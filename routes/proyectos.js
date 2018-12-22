const express = require('express')
const router =  express.Router()
const path = require('path')
const Proyectos = require('../models/proyectos')
const { isAuthenticated } = require('../helpers/auth')
const upload = require('../helpers/upload')
const fs = require('fs')

router.get('/',   (req,res)=>{
  res.render('projects')
})

router.post('/',(req,res)=>{
    upload(req, res, function (err) {
        // need to check if the req.file is set.
        if(req.file == null || req.file == undefined || req.file == ""){
            //redirect to the same url
            res.send(err)

        }else{
            // An error occurred when uploading
            if (err) {
                console.log(err);
            }else{
                // Everything went fine
                //define what to do with the params
                //both the req.body and req.file(s) are accessble here
                console.log(req.file);


                //store the file name to mongodb
                //we use the model to store the file.
                let proyecto = new Proyectos();
                proyecto.title = req.body.title
                proyecto.desc = req.body.desc
                proyecto.tags = req.body.tags
                proyecto.img = req.file.filename;
                proyecto.url = req.body.url


                //save the image
                proyecto.save(()=>{
                    if(err){
                        console.log(err);
                    }else{
                        //render the view again
                        res.redirect('/proyectos/todo');

                    }
                });

            }

        }
    })

});
router.get('/todo',(req,res)=>{
    Proyectos.find({},(err,proyectos)=>{
        if(err) throw err
        res.send(proyectos)
    })
})
router.route('/:id')
      .delete((req,res)=>{
          let _id = req.params.id
          Proyectos.findByIdAndDelete(_id,(err, proyecto)=>{
              if(err) throw err
              let $filePath = './public/IMAGES/' + proyecto.img
              fs.unlinkSync($filePath, (err)=>{
                  if(err){
                      console.log('No se borro' + req.params.id + 'image')
                  }
              })
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
