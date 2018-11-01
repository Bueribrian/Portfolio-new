const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/register',(req,res)=>{
    res.send({msg:'Te VAS A REGISTRAR RANCIOOO?'})
})
router.post('/register',(req,res)=>{
    res.send({msg:'Te vas a registrar PUTO?'})
})



module.exports = router