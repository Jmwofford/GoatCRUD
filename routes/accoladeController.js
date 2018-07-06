
const express = require('express')

const router = express.Router()


const History = require('../models/history')
const Goat = require('../models/goat')
const Accolade = require('../models/accolade')


router.get('/', (req, res, next) => {

    Goat
        .find()
        .then((goatsArray) => {
            console.log(goatsArray)

            res.render('goats/index', { goatsArray: goatsArray })
        })
        .catch((err) => res.send(err))

})
// new ...get
router.get('/new', (req, res) => {
    res.send('New Page is Working')
})

//show...get
router.get('/show', (req, res) => {
    res.send('Show Page is Working')
})

//create...post
router.post('/:id', (req, res) => {
    res.send('Creation Post is Working')

})

//Edit...edit
router.get('/:id', (req, res) => {
    res.send('Creation Post is Working')

})

//update...put
router.put('/:id', (req, res) => {
    res.send('Index Page is Working')

})

router.delete('/:id', (req, res) => {
    res.send('Index Page is Working')
})

module.exports = router
