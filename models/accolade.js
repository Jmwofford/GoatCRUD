//map2SpecificSchema
const mongoose= require('mongoose')

const Schema = require('../db/schema.js')

const Accolade= mongoose.model('accolade', Schema.AccoladeSchema)

module.exports=Accolade