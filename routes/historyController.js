
const express = require('express')

const router = express.Router({ mergeParams: true })


const History = require('../models/history')
const Goat = require('../models/goat')
const Accolade = require('../models/accolade')


router.get('/', (req, res) => {
    Goat.findById(req.params.goatId)
        .then((goat) => {
            const history = goat.history
            res.render('history/index', { history, goat })
        })

})


// new ...get
router.get('/new', (req, res) => {
    Goat.findById(req.params.goatId)
        .then((goat) => {
            res.render('history/new', { goat })
        })
        .catch((err) => {
            console.log(err)
        })
})

//show...get
router.get('/show', (req, res) => {
    res.render('/history/show')
})



//create...post
router.post('/', (req, res) => {
    const newPlacement = new History(req.body)
    Goat
        .findById(req.params.goatId)
        .then((goat) => {
            goat.history.push(newPlacement)

            return goat.save()
        })
        .then(() => {
            res.redirect(`/goats/${req.params.goatId}/history`)
        })
        .catch((err) => {
            console.log(err)
        })
   
})

//Edit...edit
router.get('/:id', (req, res) => {
    res.send('testRoutes')
    //create Edit ...then Redirect
})

//update...put
router.put('/:id', (req, res) => {
    res.send('testRoutes')
})

//delete...delete
router.delete('/:id', (req, res) => {
    res.send('testRoutes')
   
})

module.exports = router