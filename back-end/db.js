var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'vertrigo',
      database : 'triangular'
    }
});

const exporter = {
    addPoint: function(params, callback){
        knex('report_points').insert(params).then(callback)
    },

    getPoints: function(latitude, longitude, raio, callback){
        knex('points').
            where('latitude', '>=', latitude-raio).
            andWhere('latitude', '<=', latitude+raio).
            andWhere('longitude', '>=', longitude-raio).
            andWhere('longitude', '<=', longitude+raio).
            then(callback)
    },

    transferPoint: function(id, callback){
        knex('report_points').where({id: id}).select('latitude', 'longitude').
        then(result=>{
            knex('points').insert(result[0]).then(callback)
        })
        knex('report_points').where({id: id}).del().then(result => {return callback(result)})
    }
}

module.exports = exporter