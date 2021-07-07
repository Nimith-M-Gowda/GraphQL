const mongoose = require ('mongoose')
const schema = mongoose.Schema ;

const AnimalModel = new schema({
    name : String ,
    species : String ,
    distance : String ,
    MicrochipID : String ,
    color : String ,

})

module.exports = mongoose.model('Animal',AnimalModel);
