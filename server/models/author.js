const mongoose = require ('mongoose')
const schema = mongoose.Schema ;

const AuthorModel = new schema({
    name : String ,
    age : String 
})

module.exports = mongoose.model('Author',AuthorModel)
