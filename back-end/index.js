const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const database = require('./db')
const upload = require('./foto_upload')
const foto_upload = require('./foto_upload')

app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

app.get('/getPoints', (req, res)=>{
    console.log('Request feita')
    query = req.query
    if(query.latitude && query.longitude && query.raio){
        clientLatitude = parseFloat(query.latitude)
        clientLongitude = parseFloat(query.longitude)
        raio = parseFloat(query.raio)
        if(isNaN(clientLatitude) || isNaN(clientLongitude) || isNaN(raio)){
            return res.json({error: "2"})
        }
        console.log(clientLatitude)
        console.log(clientLongitude)
        database.getPoints(clientLatitude, clientLongitude, raio/100, function(response){
            return res.json(response)
        })
    }   
    else{
        return res.json({error: "1"})
    }
})

app.post('/reportPoint', (req, res)=>{
    body = req.body    
    if(body.latitude && body.longitude && body.foto && body.foto.data){
        reportLatitude = parseFloat(body.latitude).toFixed(6)
        reportLongitude = parseFloat(body.longitude).toFixed(6)
        if(isNaN(reportLatitude) || isNaN(reportLongitude)){
            return res.json({error: 2})
        }
        const foto = foto_upload(body.foto.data)
        if(foto[0]){
            database.addPoint({
                latitude: reportLatitude,
                longitude: reportLongitude, 
                local: foto[1]}, 
                function(response){res.json(response)})
            return 
        }
        else{
            return res.json({error: 2}) 
        }
    }
    else{
        return res.json({error: 1})
    }   
})

app.listen(8081, function(){
    console.log('Iniciando da porta 8081!')
})