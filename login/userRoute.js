const express = require('express')

const userController = require('./auth')


const router = express.Router()

router.get('/signup', function(req,res) {
    res.render('signup',{pageTitle:'Signup',layout:false});

});
router.post('/signup', userController.postSignup)

router.post('/login', userController.postLogin)
router.get('/login', function(req,res) {
    res.render('login',{pageTitle:'Login',layout:false});

});


module.exports = router
