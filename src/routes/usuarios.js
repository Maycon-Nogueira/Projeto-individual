var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/inserirPontos", function (req, res) {
    usuarioController.inserirPontos(req, res);
});

router.post("/obterResultado", function (req, res) {
    usuarioController.obterResultado(req, res);
});

router.post("/buscaRank", function (req, res) {
    usuarioController.buscaRank(req, res);
});

router.post("/registraNumSorte", function (req, res) {
    usuarioController.registraNumSorte(req, res);
});

module.exports = router;