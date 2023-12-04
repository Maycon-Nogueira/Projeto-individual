var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idUsu, nomeUsu, emailUsu, senhaUsu FROM usuario WHERE emailUsu = '${email}' AND senhaUsu = '${senha}';
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

function inserirPontos(idUsu, pontoPriPerg, pontoSegPerg, pontoTerPerg,
    pontoQuaPerg, pontoQuiPerg, pontoSexPerg, pontoSetPerg, pontoOitPerg) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function inserirPontos():", idUsu, pontoPriPerg, pontoSegPerg, pontoTerPerg,
    pontoQuaPerg, pontoQuiPerg, pontoSexPerg, pontoSetPerg, pontoOitPerg);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into tentativa(fkUsu,fkQuestao, acerto, pontos) values
        ( ${idUsu}, 1, ${pontoPriPerg}, ${pontoPriPerg}),
        ( ${idUsu}, 2, ${pontoSegPerg}, ${pontoSegPerg * 4}),
        ( ${idUsu}, 3, ${pontoTerPerg}, ${pontoTerPerg}),
        ( ${idUsu}, 4, ${pontoQuaPerg}, ${pontoQuaPerg * 2}),
        ( ${idUsu}, 5, ${pontoQuiPerg}, ${pontoQuiPerg}),
        ( ${idUsu}, 6, ${pontoSexPerg}, ${pontoSexPerg}),
        ( ${idUsu}, 7, ${pontoSetPerg}, ${pontoSetPerg * 2}),
        ( ${idUsu}, 8, ${pontoOitPerg}, ${pontoOitPerg * 8});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
} 

function obterResultado(pontos, acerto, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")

    var instrucao = `
    select nomeUsu,
    sum(pontos) as pontos, 
    sum(acerto) as acerto
    from tentativa
    join usuario
    on tentativa.fkUsu = usuario.idUsu
    where idUsu = ${idUsuario}
    group by nomeUsu;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscaRank() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")

    var instrucao = `
    select nomeUsu as colocacao
    from tentativa
    join usuario
    on tentativa.fkUsu = usuario.idUsu
    group by nomeUsu
    order by sum(pontos) desc
    limit 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function registraNumSorte(idUsuario, numSorteado) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function inserirNumSorte():", idUsuario, numSorteado);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into numerosorte(fkUsu, numSorte) values
    (${idUsuario}, ${numSorteado});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
} 

module.exports = {
    autenticar,
    cadastrar,
    inserirPontos,
    obterResultado,
    buscaRank,
    registraNumSorte
};