const express = require('express')
const router = express.Router()
const path = require('path')
const Proyectos = require('../models/proyectos')

router.route('/')
      .get((req,res)=>{
            Proyectos.find({},(err, proyectos)=>{
                if(err)throw err
                res.status(202).send(proyectos)
            })
        })
      .post((req,res)=>{
          let {title, desc, tags, img, url} = req.body
          const proyecto = new Proyectos({
              title,
              desc,
              tags,
              img,
              url
          })
          proyecto.save((err)=>{
              if(err)throw err
              console.log(proyecto)
              res.send('Proyecto creado exitosamente')
          })
      })

router.route('/:id')
      .delete((req,res)=>{
          let _id = req.params.id
          Proyectos.findByIdAndDelete(_id,(err, proyecto)=>{
              if(err) throw err
              console.log('Un Proyecto se ha eliminado \n \n \n ' + proyecto )
              res.status(202).send('Proyecto eliminado satisfactoriamente \n \n \n' + proyecto)
          }) 
      })
      .put((req,res)=>{
        let _id = req.params.id
        let update = req.body
        Proyectos.findByIdAndUpdate(_id,update,(err, proyecto)=>{
            if(err) throw err
            console.log('Un Proyecto se ha Modificado \n \n \n ' + proyecto )
            res.status(202).send('Proyecto Modificado satisfactoriamente \n \n \n' + proyecto)
        }) 
    })

module.exports = router