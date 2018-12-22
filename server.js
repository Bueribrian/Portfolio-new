// REQUERIDOS
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const colors = require('colors')
const config = require('./config')
const bodyParser = require('body-parser')
const path = require('path')
const exphdbs = require('express-handlebars')
const passport = require('passport')
const session = require('express-session')
require('./helpers/passport')

//CONFIGURACIONES
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname+'/public')))
app.engine('handlebars', exphdbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(session({
  secret: config.SECRET,
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
//RUTAS
//  ruta proyectos


const proyectos = require('./routes/proyectos')
const usuario = require('./routes/usuario')

app.get('/',(req,res)=>{
    res.status(202).render('home')
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
