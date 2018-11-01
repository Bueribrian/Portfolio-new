const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const auth = require('../auth')
const config = require('../config')

router.get('/',(req,res)=>{
    User.find({},(err,users)=>{
        if(err){
            res.status(404).send({msg:'Ups usuarios no encontrados'})
        }
        res.status(200).send(users)
    })
    // res.send({msg:'Loco'})
})


router.post('/register',(req,res,next)=>{
    const { username, password} = req.body

    const user = new User ({
        username,
        password
    })
    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(user.password, salt, (err, hash)=>{
                
            user.password = hash;
            user.save()
            res.status(201).send({msg2:'Usuario REGISTRADO'})
        });
    })  
    
})


router.post('/login', async (req,res,next)=>{
    const { username, password } = req.body
    try{
        // AUTENTICA USUARIO
        console.log('llegue hasta aca')
        const user = await auth.authenticate(username, password)
        //Creat JWT
        const token = jwt.sign(user.toJSON(), config.JWT_SECRET,{
            expiresIn: '15m'
        })

        const { iat, exp } = jwt.decode(token)
        //Respond with token
        res.send({iat, exp, token})

        console.log(user)
        next()
    } catch(err){
        //USER UNAUTHORED
        console.log(err)
        return next(res.status(404))
    }
})

module.exports = router