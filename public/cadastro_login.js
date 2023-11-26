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
        div_alerta.style.display = 'flex';
        div_alerta.innerHTML = `Preencha todos os campos!`;
    
    } else if (email.endsWith(`.com`) == false || email.indexOf(`@`) == -1) {
        div_alerta.style.display = 'flex';
        div_alerta.innerHTML = `Email incorreto!`;

    } else if (senha.length < 8) {
        div_alerta.style.display = 'flex';
        div_alerta.innerHTML = `A senha deve conter no mínimo 8 caracteres.`

    } else if (confirma_senha != senha) {
        div_alerta.style.display = 'flex';
        div_alerta.innerHTML = `As senhas não conferem.`

    } else {
        div_alerta.style.display = 'flex';
        div_alerta.innerHTML = `Cadastro realizado`;

        div_cadastro.style.display = 'none';
        div_login.style.display = 'flex';


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
    setInterval(sumirMensagem, 5000)
}


// LOGIN

function botao_loginUsuario() {
    // aguardar();

    var email = input_loginEmail.value;
    var senha = input_loginSenha.value;

    if (email == "" || senha == "") {
        div_alerta.innerHTML = `Preencha todos os campos!`;

        div_alerta.style.display = 'flex';
        return false;
    }
    else {


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

                    div_alerta.style.display = 'flex';
                    div_alerta.innerHTML = 'Entrada efetuada';
                    setTimeout(
                        window.location = "http://localhost:3333/jogo.HTML"
                        , 3000); // apenas para exibir o loading

                });

            } else {

                div_alerta.style.display = 'flex';
                div_alerta.innerHTML = 'Email e/ou Senha incorretos';
                console.log("Houve um erro ao tentar realizar o login!");

                resposta_login.text().then(texto => {
                    console.error(texto);
                    // finalizarAguardar(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })
        setInterval(sumirMensagem, 5000)
    }
    return false;
}

function sumirMensagem() {
    div_alerta.style.display = "none"
}


