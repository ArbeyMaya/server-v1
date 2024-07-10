
const User = require("../models/user.model")


function register(req, res){
    const {firstname, lastname, email, password} = req.body
    console.log(req.body)
    

    if(!email) res.status(400).send({msg: "El email es obligatorio"})
    if(!password) res.status(400).send({msg: "La contraseña es obligatorio"})


    res.status(200).send({msg:"Funciono perfecto!"})


}

module.exports = {
    register,
}