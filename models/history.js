//map2SpecificSchema
const mongoose= require('mongoose')

const Schema = require('../db/schema.js')

const History= mongoose.model('history', Schema.HistorySchema)

module.exports=History