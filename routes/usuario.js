const express = require('express')
const router = express.Router()
const path = require('path')
const Usuarios = require('../models/usuario')



//LOGIN
router.get('/login',(req,res)=>{
    res.status(202).sendFile(path.join(__dirname+'/../public/login.html'))
})




//REGISTRO

router.get('/',(req,res)=>{
    Usuarios.find({},(err,usuarios)=>{
        if(err) throw err
        res.status(202).send({usuarios:usuarios})
    })
    
})
router.get('/registro',(req,res)=>{
    res.status(202).sendFile(path.join(__dirname+'/../public/register.html'))
})

router.post('/registro',(req,res)=>{

    let { username, password } = req.body

    let usuario = new Usuarios ({
        username,
        password
    })

    usuario.save((err)=>{
        if(err) throw err
        res.send('Usuario registrado satisfactoriamente')
    })

})

module.exports = router