var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT nomeUsu, emailUsu, senhaUsu FROM usuario WHERE emailUsu = '${email}' AND senhaUsu = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into usuario (nomeUsu, emailUsu, senhaUsu) VALUES 
 ('${nome}', '${email}','${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function inserirPontos(pontosUsuario, pontoPriPerg, pontoSegPerg, pontoTerPerg,
    pontoQuaPerg, pontoQuiPerg, pontoSexPerg, pontoSetPerg, pontoOitPerg) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function inserirPontos():", pontosUsuario, pontoPriPerg, pontoSegPerg, pontoTerPerg,
    pontoQuaPerg, pontoQuiPerg, pontoSexPerg, pontoSetPerg, pontoOitPerg);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
  
    insert into questoes(acertoPorQuestao) values 
    (${pontoPriPerg}),(${pontoSegPerg}),(${pontoTerPerg}),(${pontoQuaPerg}),(${pontoQuiPerg}),
         (${pontoSexPerg}),(${pontoSetPerg}),(${pontoOitPerg});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrar,
    inserirPontos,
};