//map2SpecificSchema

const mongoose= require('mongoose')

const Schema = require('../db/schema.js')

const Goat= mongoose.model('goat', Schema.GoatSchema)

module.exports=Goat