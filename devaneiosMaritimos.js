// seção de receitas

// Troca de receitas 

function mostrarSalmao(){
    if (div_receitaSalmao.style.display != "flex"){

        div_receitaSalmao.style.display = "flex";
        div_semReceita.style.display = "none";
        div_receitaCamarao.style.display = "none";
        div_receitaCarangueijo.style.display = "none";
    }
};
function mostrarCamarao(){
    if (div_receitaCamarao.style.display != "flex"){
        
        div_receitaCamarao.style.display = "flex";
        div_semReceita.style.display = "none";
        div_receitaSalmao.style.display = "none";
        div_receitaCarangueijo.style.display = "none";
    }
};
function mostrarCarangueijo(){
    if (div_receitaCarangueijo.style.display != "flex"){
        
        div_receitaCarangueijo.style.display = "flex";
        div_semReceita.style.display = "none";
        div_receitaSalmao.style.display = "none";
        div_receitaCamarao.style.display = "none";
    }
};

// Carrossel: ingredientes - modo de preparo
function rodarTexto(){

// Salmão
    if (div_preparoSalmao.style.display != "flex"){

        div_ingredientesSalmao.style.display = "none"
        div_preparoSalmao.style.display = "flex"
    } else {
        div_ingredientesSalmao.style.display = "flex";
        div_preparoSalmao.style.display = "none";
    }

// Camarão
    if (div_preparoCamarao.style.display != "flex"){

        div_ingredientesCamarao.style.display = "none"
        div_preparoCamarao.style.display = "flex"
    } else {
        div_ingredientesCamarao.style.display = "flex";
        div_preparoCamarao.style.display = "none";
    }

// Carangueijo
    if (div_preparoCarangueijo.style.display != "flex"){

        div_ingredientesCarangueijo.style.display = "none"
        div_preparoCarangueijo.style.display = "flex"
    } else {
        div_ingredientesCarangueijo.style.display = "flex";
        div_preparoCarangueijo.style.display = "none";
    }

};



// Fim seção receitas