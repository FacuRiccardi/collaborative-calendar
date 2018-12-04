const factory = require('factory-girl')
const MongooseAdapter = require('factory-girl-mongoose').MongooseAdapter
factory.setAdapter(MongooseAdapter);



module.exports = function(){
    console.log("Pt")
}