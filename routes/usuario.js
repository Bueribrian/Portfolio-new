const express = require('express')
const router = express.Router()
const path = require('path')
const Usuarios = require('../models/usuario')
const passport = require('passport')



//LOGIN
router.get('/login',(req,res)=>{
    res.status(202).render('login')
})

router.post('/login', passport.authenticate('local',{
  successRedirect: '/proyectos',
  failureRedirect: 'usuario/login',
  failureFlash: true
}))


//REGISTRO

router.get('/',(req,res)=>{
    Usuarios.find({},(err,usuarios)=>{
        if(err) throw err
        res.status(202).send({usuarios:usuarios})
    })

})
router.get('/registro',(req,res)=>{
    res.status(202).render('register')
})

router.post('/registro', async(req,res)=>{

    let usuario = new Usuarios

    usuario.username = req.body.username
    usuario.password = await usuario.encryptPassword(req.body.password)

    await usuario.save((err)=>{
        if(err) throw err
        res.send('Usuario registrado satisfactoriamente')
    })

})

module.exports = router
