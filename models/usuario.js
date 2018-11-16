const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsuariosSchema = new Schema({
    username : { type: String,  required: true,  },
    password : { type: String,  required: true,  } 
})

module.exports = mongoose.model('Usuarios', UsuariosSchema)