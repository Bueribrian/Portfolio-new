
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const config = require('./config')
const PORT = config.PORT
const MONGO_URL = config.MONGODB_URL
const bodyParser = require('body-parser')




mongoose.set('useFindAndModify', false);
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "public")));

//home
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,+'/public/index.html'))
})

//User Route
const usersRoutes = require('./routes/users')
app.use('/user',usersRoutes)
//Projects Route
const projectsRoutes = require('./routes/projects')
app.use('/projects',projectsRoutes)




mongoose.connect(
  MONGO_URL,
  { useNewUrlParser: true },
  (err, res) => {
    if (err) throw err;
    console.log("Conexion a la base de datos establecida");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  }
)
