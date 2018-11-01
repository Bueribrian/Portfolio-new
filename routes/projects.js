const express = require('express')
const router = express.Router()
const Project = require('../models/proyect')
const config = require('../config')
const jwt = require('express-jwt')

router.get('/',jwt({secret: config.JWT_SECRET}),(req,res)=>{
    Project.find({},(err,projects) =>{
        res.send(projects)
    })
    
})
//GetOneProject
router.get('/:id', (req, res) => {
    let projectId = req.params.id
    Project.findById(projectId,(err,project)=>{
        console.log(project)
    })
    res.sendStatus(201)
});
//AddProyect
router.post('/' ,jwt({secret: config.JWT_SECRET}),(req,res)=>{

    const { title, imgUrl, tags, description} = req.body
    const project = new Project({
        title, 
        imgUrl,
        tags,
        description
    })
    project.save()
    res.status(201).send({msg:'Creado con exito'})
})
    
//RemoveProyect
router.delete('/:id', (req, res) => {
    
    let projectId = req.params.id
	Project.findById(projectId,(err, project)=>{
	if(err) return res.status(303).send({message:'Error al buscar producto para eliminar'})
	if(!project) return res.status(404).send({message:'no existe el projecto'})
	project.remove(err => {
	if(err) return res.status(500).send({message:'Error al borrar el producot'})
	res.status(200).send({message:'EL prodcutos ha sido eliminado'})
	})
	})

});
//UpdateProyect
router.put('/:id', (req, res) => {
	Project.findOneAndUpdate({_id:req.params.id}, req.body,(err, project)=>{
        if(err){
            res.sendStatus(404).send({msg:err})
        }
        res.send({msg:'todo piola'})
    })
	
});

module.exports = router