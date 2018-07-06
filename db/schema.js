const mongoose= require('mongoose')
const Schema = mongoose.Schema

const HistorySchema = new Schema({
    notableGm: String,
    pointsPerGame: Number,
    lategmWins: Number,
    allstarGm: Boolean

})

const AccoladeSchema = new Schema({
     scoreHigh: Number,
     offMvp:Boolean,
     defMvp:Boolean,
     scoreTitle: Number,
     sigMove: String,
     
})

const GoatSchema = new Schema({
    name: String,
    team: String,
    yearsPlayed: Number,
    rings: Number,
    image: String,
    image2: String,
    audio: String,
    newimg1: String,
    newimg2: String,
    newimg3: String,
    newimg4: String,
    accolades:[AccoladeSchema],
    history:[HistorySchema]
})

module.exports= {
    GoatSchema,
    AccoladeSchema,
    HistorySchema
}
