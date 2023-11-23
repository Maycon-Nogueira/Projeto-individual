function abrirFecharLogin() {
    if (div_cadastro.style.display == "none") {
        div_cadastro.style.display = "flex";
        div_login.style.display = "none";
    } else {
        div_cadastro.style.display = "none";
        div_login.style.display = "flex";
    }

}



function botao_cadastraUsuario() {
    var nome = input_cadastroNomeUsuario.value;
    var email = input_cadastroEmailUsuario.value;
    var senha = input_cadastroSenha.value;
    var confirma_senha = input_confirmaSenha.value;

    if (nome == "" || 
        email == "" ||
        senha == "" ||
        confirma_senha == ""
        ) {
        alert(`Preencha todos os campos!`)

    } else if (email.endsWith(`.com`) == false || email.indexOf(`@`) == -1) {
        alert( `Email incorreto!`)

    } else if (senha.length < 8) {
        alert( `A senha deve conter no mínimo 8 caracteres.`)

    } else if (confirma_senha != senha) {
        alert( `As senhas não conferem.`)

    } else {
     alert(`Cadastro realizado`);
    

        // Enviando o valor da nova input
        fetch("http://localhost:3333/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nome,
            emailServer: email,
            senhaServer: senha
        }),
        })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
            cardErro.style.display = "block";
            } else {
            throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

        return false;
    }

}


// LOGIN

function botao_loginUsuario() {
    // aguardar();

    var email = input_loginEmail.value;
    var senha = input_loginSenha.value;

    if (email == "" || senha == "") {
        // cardErro.style.display = "block"
        // mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
        // finalizarAguardar();

        alert(`inputs em branco`)
        return false;
    }
    else {
        // setInterval(sumirMensagem, 5000)
    }

    console.log("FORM LOGIN: ", email);
    console.log("FORM SENHA: ", senha);

    fetch("usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: email,
            senhaServer: senha
        })
    }).then(function (resposta_login) {
        console.log("ESTOU NO THEN DO login()!")

        if (resposta_login.ok) {
            console.log(resposta_login);

            resposta_login.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;

                // setTimeout(function () {
                    
                // }, 1000); // apenas para exibir o loading
                window.location = "http://localhost:3333/jogo.HTML";
            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta_login.text().then(texto => {
                console.error(texto);
                // finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function sumirMensagem() {
    // cardErro.style.display = "none"
}


