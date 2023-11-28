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
    insert into tentativa(fkUsu,fkQuestao, acerto, pontos) values
        ( 1, 1, ${pontoPriPerg}, ${pontoPriPerg}),
        ( 1, 2, ${pontoSegPerg}, ${pontoSegPerg * 4}),
        ( 1, 3, ${pontoTerPerg}, ${pontoTerPerg}),
        ( 1, 4, ${pontoQuaPerg}, ${pontoQuaPerg * 2}),
        ( 1, 5, ${pontoQuiPerg}, ${pontoQuiPerg}),
        ( 1, 6, ${pontoSexPerg}, ${pontoSexPerg}),
        ( 1, 7, ${pontoSetPerg}, ${pontoSetPerg * 2}),
        ( 1, 8, ${pontoOitPerg}, ${pontoOitPerg * 8});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
} // Mudar a fkUsu para o Id do usuario!!

module.exports = {
    autenticar,
    cadastrar,
    inserirPontos
};