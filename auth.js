const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const User = mongoose.model('User')

exports.authenticate = (username, password) =>{
    return new Promise(async (resolve, reject) =>{
        try{
            //get user by username
            const user = await User.findOne({username})
            //Match Password
            bcrypt.compare(password, user.password, (err, isMatch)=>{
                if(err) throw err;
                if(isMatch){
                    resolve(user)
                }else{
                    //Pass didnt match
                    reject('Authentication Failed')
                }
            })
        } catch (err) {
            reject('Authentication Failed')
        }
    })
}