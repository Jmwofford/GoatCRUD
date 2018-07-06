const express = require('express');

const router = express.Router();


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
    res.render('goats/new')
})



//show...get
router.get('/:id', (req, res) => {
    Goat
        .findById(req.params.id)
        .then((goat) => {
          const accolades = goat.accolades  
            res.render('goats/show', { goat,accolades })
        })
})


// CREATE Route
router.post('/', (req, res) => {
    const Placement = req.body
    Goat
        .create(Placement)
        .then(() => {
            res.redirect('/goats')
        })
})


router.get('/:id/edit', (req, res) => {

    Goat
        .findById(req.params.id)
        .then((goat) => {
            res.render('goats/edit', { goat })
            //create Edit ...then R
        })
})

//update...put
router.put('/:id', (req, res) => {
    Goat
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(() => {
            res.redirect(`/goats/${req.params.id}`)
        })

})

//delete...delete
router.delete('/:id', (req, res) => {
    Goat
        .findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/goats')
        })
})


module.exports = router

