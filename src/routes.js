const routes = require("express").Router();

const SessionController = require('./app/controllers/SessionController');
// Definição rotas

routes.post('/sessions', SessionController.store)

routes.get("/dashboard", (req, res)=>{
    return res.status(200).send()
})

module.exports = routes;