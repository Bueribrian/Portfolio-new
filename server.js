// REQUERIDOS
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const colors = require('colors')
const config = require('./config')
const bodyParser = require('body-parser')
const path = require('path')

//CONFIGURACIONES
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname+'/public')))


//RUTAS
//  ruta proyectos


const proyectos = require('./routes/proyectos')
const usuario = require('./routes/usuario')

app.get('/',(req,res)=>{
    res.status(202).sendFile(path.join(__dirname+'/public/index.html'))
})
app.use('/proyectos', proyectos)
app.use('/usuario', usuario)








//Estableciendo conexion con la base de datos e iniciando el servidor
mongoose.connect(config.MONGODB_URL, {useNewUrlParser: true }, (err, res)=>{
    if(err) throw err
    console.log('-----------------')
    console.log('Conexion a la base de datos establecida correctamente'.magenta)
    app.listen( config.PORT, ()=>{
        console.log(`Servidor corriendo en el puerto ${config.PORT}....`.bgBlack.magenta)
    })
})
