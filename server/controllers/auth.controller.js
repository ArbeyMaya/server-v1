function register(req, res){
    console.log("Se ha ejecutado elregistro")

    res.status(200).send({msg:"FuncionaPerfecto !"})
}

module.exports = {
    register,
}