// seção de receitas

// Troca de receitas 

function mostrarSalmao() {
    if (div_receitaSalmao.style.display != "flex") {

        div_receitaSalmao.style.display = "flex";
        div_semReceita.style.display = "none";
        div_receitaCamarao.style.display = "none";
        div_receitaCarangueijo.style.display = "none";
    }
};
function mostrarCamarao() {
    if (div_receitaCamarao.style.display != "flex") {

        div_receitaCamarao.style.display = "flex";
        div_semReceita.style.display = "none";
        div_receitaSalmao.style.display = "none";
        div_receitaCarangueijo.style.display = "none";
    }
};
function mostrarCarangueijo() {
    if (div_receitaCarangueijo.style.display != "flex") {

        div_receitaCarangueijo.style.display = "flex";
        div_semReceita.style.display = "none";
        div_receitaSalmao.style.display = "none";
        div_receitaCamarao.style.display = "none";
    }
};

// Carrossel: ingredientes - modo de preparo
function rodarTexto() {

    // Salmão
    if (div_preparoSalmao.style.display != "flex") {

        div_ingredientesSalmao.style.display = "none";
        div_preparoSalmao.style.display = "flex";
        id_botaoIngreSalmao.style.display = "flex";
        seta_esquerdaSalmao.style.display = "flex";
        id_botaoPrepSalmao.style.display = "none";
        seta_direitaSalmao.style.display = "none";

    } else {
        div_ingredientesSalmao.style.display = "flex";
        div_preparoSalmao.style.display = "none";
        id_botaoPrepSalmao.style.display = "flex";
        seta_direitaSalmao.style.display = "flex";
        id_botaoIngreSalmao.style.display = "none";
        seta_esquerdaSalmao.style.display = "none";
    }

    // Camarão
    if (div_preparoCamarao.style.display != "flex") {

        div_ingredientesCamarao.style.display = "none";
        div_preparoCamarao.style.display = "flex";
        id_botaoIngreCamarao.style.display = "flex";
        seta_esquerdaCamarao.style.display = "flex";
        id_botaoPrepCamarao.style.display = "none";
        seta_direitaCamarao.style.display = "none";
    } else {
        div_ingredientesCamarao.style.display = "flex";
        div_preparoCamarao.style.display = "none";
        id_botaoPrepCamarao.style.display = "flex";
        seta_direitaCamarao.style.display = "flex";
        id_botaoIngreCamarao.style.display = "none";
        seta_esquerdaCamarao.style.display = "none";
    }

    // Carangueijo
    if (div_preparoCarangueijo.style.display != "flex") {

        div_ingredientesCarangueijo.style.display = "none";
        div_preparoCarangueijo.style.display = "flex";
        id_botaoIngreCarangueijo.style.display = "flex";
        seta_esquerdaCarangueijo.style.display = "flex";
        id_botaoPrepCarangueijo.style.display = "none";
        seta_direitaCarangueijo.style.display = "none";
    } else {
        div_ingredientesCarangueijo.style.display = "flex";
        div_preparoCarangueijo.style.display = "none";
        id_botaoPrepCarangueijo.style.display = "flex";
        seta_direitaCarangueijo.style.display = "flex";
        id_botaoIngreCarangueijo.style.display = "none";
        seta_esquerdaCarangueijo.style.display = "none";
    }

};



// Fim seção receitas

// Começo seção Entrar
function abrirFecharLogin() {
    if (div_cadastro.style.display == "none") {
        div_cadastro.style.display = "flex";
        div_login.style.display = "none";
    } else {
        div_cadastro.style.display = "none";
        div_login.style.display = "flex";
    }



}
// Fim seção Entrar

// Seção Curiosidades
var rotacao = 0;

function rodarDir() {

    var animacao_dir = document.querySelectorAll('.quadros');

    for(
        contador = 0;
        contador<animacao_dir.length;
        contador++
    ){
        animacao_dir[contador].style.animationName = 'animacao_rodar';
    }

    if (rotacao == 0) {
        primeiro_quadro.style.display = "none";
        segundo_quadro.style.display = "flex";
        rotacao++;

    } else if (rotacao == 1) {
        segundo_quadro.style.display = "none";
        terceiro_quadro.style.display = "flex";
        rotacao++;

    } else if (rotacao == 2) {
        terceiro_quadro.style.display = "none";
        quarto_quadro.style.display = "flex";
        rotacao++;

    } else if (rotacao == 3) {
    quarto_quadro.style.display = "none";
    quinto_quadro.style.display = "flex";
    rotacao++;
    } else if(rotacao == 4){
        quinto_quadro.style.display = "none";
        sexto_quadro.style.display = "flex";
        rotacao++;
    } else{
        sexto_quadro.style.display = "none";
        primeiro_quadro.style.display = "flex";
        rotacao = 0;
    }
    
    }

    function rodarEsq(){
        var animacao_esq = document.querySelectorAll('.quadros');

        for(
            contador = 0;
            contador<animacao_esq.length;
            contador++
        ){
            animacao_esq[contador].style.animationName = 'animacao_rodar_contrario';
        }

        
        if (rotacao == 5){
            sexto_quadro.style.display = "none";
            quinto_quadro.style.display = "flex";
            rotacao--;
        }   else if (rotacao == 4){
            quinto_quadro.style.display = "none";
            quarto_quadro.style.display = "flex";
            rotacao--;
        } else if(rotacao == 3){
            quarto_quadro.style.display = "none";
            terceiro_quadro.style.display = "flex";
            rotacao--;
        }   else if(rotacao == 2){
            terceiro_quadro.style.display = "none";
            segundo_quadro.style.display = "flex";
            rotacao--;
        } else if(rotacao == 1){
            segundo_quadro.style.display = "none";
            primeiro_quadro.style.display = "flex";
            rotacao--
        } else {
            primeiro_quadro.style.display = "none";
            sexto_quadro.style.display = "flex";
            rotacao = 5;
        }

     
    }

    function secreta(){
        if (div_secreta.style.display == "none"){
            div_secreta.style.display = "flex";
        } else {
            div_secreta.style.display = "none";
        }
    }
    


// Fim Seção Curiosidades

