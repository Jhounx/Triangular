const fs = require('fs')

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

module.exports = function(foto_base64){
    binaryData  =   Buffer.from(foto_base64, 'base64').toString('binary');
    name = makeid(20)+'.jpg'
    id = './images/'+name
    var a = fs.writeFile(id, binaryData, "binary", function (err) {
        return err
    });
    if(a) return [false, '']
    return [true, name];
}