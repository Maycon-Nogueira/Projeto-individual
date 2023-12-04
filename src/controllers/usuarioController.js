var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            id: resultadoAutenticar[0].idUsu,
                            email: resultadoAutenticar[0].emailUsu,
                            nome: resultadoAutenticar[0].nomeUsu,
                            senha: resultadoAutenticar[0].senhaUsu
                            
                        });
                        
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;


    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function inserirPontos(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idUsu = req.body.idUsuServer;
    var pontoPriPerg = req.body.pontoPriPergServer;
    var pontoSegPerg = req.body.pontoSegPergServer;
    var pontoTerPerg = req.body.pontoTerPergServer;
    var pontoQuaPerg = req.body.pontoQuaPergServer;
    var pontoQuiPerg = req.body.pontoQuiPergServer;
    var pontoSexPerg = req.body.pontoSexPergServer;
    var pontoSetPerg = req.body.pontoSetPergServer;
    var pontoOitPerg = req.body.pontoOitPergServer;
    

    // Faça as validações dos valores
     if (idUsu == undefined) {
        res.status(400).send("Seu idUsu está undefined!");
    } else if (pontoPriPerg == undefined) {
        res.status(400).send("Seu pontoPriPerg está undefined!");
    } else if (pontoSegPerg == undefined) {
        res.status(400).send("Sua pontoSegPerg está undefined!");
    } if (pontoTerPerg == undefined) {
        res.status(400).send("Seu pontoTerPerg está undefined!");
    } else if (pontoQuaPerg == undefined) {
        res.status(400).send("Seu pontoQuaPerg está undefined!");
    } else if (pontoQuiPerg == undefined) {
        res.status(400).send("Sua pontoQuiPerg está undefined!");
    } if (pontoSexPerg == undefined) {
        res.status(400).send("Seu pontoSexPerg está undefined!");
    } else if (pontoSetPerg == undefined) {
        res.status(400).send("Seu pontoSetPerg está undefined!");
    } else if (pontoOitPerg == undefined) {
        res.status(400).send("Sua pontoOitPerg está undefined!");
    } else {}
    
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.inserirPontos(idUsu, pontoPriPerg, pontoSegPerg, pontoTerPerg,
             pontoQuaPerg, pontoQuiPerg, pontoSexPerg, pontoSetPerg, pontoOitPerg)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a inserção de pontos! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

// var usuarioModel = require("../models/usuarioModel");

function obterResultado(req, res) {
    console.log(`Estou no obter Resultado do controller`)
    var idUsuario = req.body.idUsuarioServer;
    var pontos = req.body.pontosServer;
    var acerto = req.body.acertoServer;

    console.log('Pontos:', pontos);
    console.log('Acerto:', acerto);
    console.log(`IdUsuario`, idUsuario)
        usuarioModel.obterResultado(pontos, acerto, idUsuario)
            .then(
                function (resultadoObterResultado) {
                    console.log(`\nResultados encontrados: ${resultadoObterResultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoObterResultado)}`); // transforma JSON em String
                    
                    res.json({
                        pontos: resultadoObterResultado[0].pontos,
                        acerto: resultadoObterResultado[0].acerto                        
                    });
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar a busca do resultado! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

    function buscaRank(req, res) {
        console.log(`Estou no Busca rank do controller`)

            usuarioModel.buscaRank()
                .then(
                    function (resultadoBuscaRank) {
                        console.log(`\nResultados encontrados: ${resultadoBuscaRank.length}`);
                        console.log(`Resultados: ${JSON.stringify(resultadoBuscaRank)}`); // transforma JSON em String
                        
                        res.json({
                            priColocacao: resultadoBuscaRank[0].colocacao,
                            segColocacao: resultadoBuscaRank[1].colocacao,
                            terColocacao: resultadoBuscaRank[2].colocacao,
                            quaColocacao: resultadoBuscaRank[3].colocacao,
                            quiColocacao: resultadoBuscaRank[4].colocacao
                        });
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log("\nHouve um erro ao realizar a busca do rank! Erro: ", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    }
                );
        }

        function registraNumSorte(req, res) {
            // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
            var idUsuario = req.body.idUsuarioServer;
            var numSorteado = req.body.numSorteadoServer;
  
                // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
                usuarioModel.registraNumSorte(idUsuario, numSorteado)
                    .then(
                        // function (resultadoNumRegistrado) {
                        //     console.log(`\nResultados encontrados: ${resultadoNumRegistrado.length}`);
                        //     console.log(`Resultados: ${JSON.stringify(resultadoNumRegistrado)}`); // transforma JSON em String
                            
                        //     res.json({
                        //         numSorteado: resultadoNumRegistrado[0].resultadoNumRegistrado
                        //         // quaColocacao: resultadoBuscaRank[3].colocacao,
                        //     });
                        // }
                    ).catch(
                        function (erro) {
                            console.log(erro);
                            console.log(
                                "\nHouve um erro ao realizar a inserção do numero da sorte! Erro: ",
                                erro.sqlMessage
                            );
                            res.status(500).json(erro.sqlMessage);
                        }
                    );
        }

module.exports = {
    autenticar,
    cadastrar,
    inserirPontos,
    obterResultado,
    buscaRank,
    registraNumSorte
}
