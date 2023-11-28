// Seção Jogos

//  seção constantes para rodar as paginas

const video = [
    `<video src="assets/public/videos/Juju bartinha.mp4" autoplay loop plays-inline> </video>`,

    `<video src="assets/public/videos/Pipipinguim.mp4" autoplay loop plays-inline> </video>`,

    `<video src="assets/public/videos/Dory.mp4" autoplay loop plays-inline> </video>`,

    `<video src="assets/public/videos/Morsa mil sons.mp4" autoplay loop plays-inline> </video>`,

    `<video src="assets/public/videos/Fo-foca.mp4" autoplay loop plays-inline> </video>`,

    `<video src="assets/public/videos/Golfinho lindo fofinho.mp4" autoplay loop plays-inline> </video>`,

    `<video src="assets/public/videos/Ooooooorca.mp4" autoplay loop plays-inline> </video>`,

    `<video src="assets/public/videos/Palhacitos.mp4" autoplay loop plays-inline> </video>`
]

const audio = [

    `<audio id="div_audio" src="assets/public/videos/Juju bartinha.mp4" type="audio/mp4"> </audio>`,

    `<audio id="div_audio" src="assets/public/videos/Pipipinguim.mp4" type="audio/mp4"> </audio>`,

    `<audio id="div_audio" src="assets/public/videos/Dory.mp4" type="audio/mp4"> </audio>`,

    `<audio id="div_audio" src="assets/public/videos/Morsa mil sons.mp4" type="audio/mp4"> </audio>`,

    `<audio id="div_audio" src="assets/public/videos/Fo-foca.mp4" type="audio/mp4"> </audio>`,

    `<audio id="div_audio" src="assets/public/videos/Golfinho lindo fofinho.mp4" type="audio/mp4"> </audio>`,

    `<audio id="div_audio" src="assets/public/videos/Ooooooorca.mp4" type="audio/mp4"> </audio>`,

    `<audio id="div_audio" src="assets/public/videos/Palhacitos.mp4" type="audio/mp4"> </audio>`
]

const alternativa = [
    // Primeiro som - Jubartes
    `<div id="dificuldadePergunta">Fácil</div> 

       <div onclick="alternativa_escolhida()" class="caixaAlternativa">
           <div value="1" class="div_numeroAlternativa">1</div>
          <span class="respostaSelecionada"> Peixe-Boi </span>
       </div>

       <div onclick="alternativa_escolhida()" class="caixaAlternativa">
           <div  class="div_numeroAlternativa">2</div>
           <span class="respostaSelecionada"> Tubarão Baleia </span>
       </div>

       <div onclick="alternativa_escolhida()" class="caixaAlternativa">
           <div class="div_numeroAlternativa">3</div>
           <span class="respostaSelecionada"> Baleia Jubarte </span>
       </div>

       <div onclick="alternativa_escolhida()" class="caixaAlternativa">
           <div class="div_numeroAlternativa">4</div>
          <span class="respostaSelecionada"> Tartaruga Verde </span>
       </div>`,

    // Segundo som - Pinguim
    `<div id="dificuldadePergunta">Díficil</div>

       <div onclick="alternativa_escolhida()" id="alternativa_5" class="caixaAlternativa">
           <div  class="div_numeroAlternativa"> 1 </div>
           <span class="respostaSelecionada"> Pinguim </span>
       </div>

       <div onclick="alternativa_escolhida()" id="alternativa_6" class="caixaAlternativa">
           <div  class="div_numeroAlternativa"> 2 </div>
           <span class="respostaSelecionada"> Lula gigante </span>
       </div>

       <div onclick="alternativa_escolhida()" id="alternativa_7" class="caixaAlternativa">
           <div class="div_numeroAlternativa"> 3 </div>
           <span class="respostaSelecionada"> Peixe-serra </span>
       </div>

       <div onclick="alternativa_escolhida()" id="alternativa_8" class="caixaAlternativa">
           <div class="div_numeroAlternativa"> 4 </div>
           <span class="respostaSelecionada"> Linguado </span>
       </div>`,

    // Terceiro som - Dory
    `<div id="dificuldadePergunta">Fácil</div>

       <div onclick="alternativa_escolhida()" id="alternativa_9" class="caixaAlternativa">
           <div  class="div_numeroAlternativa"> 1 </div>
           <span class="respostaSelecionada"> Marlim </span>
       </div>

       <div onclick="alternativa_escolhida()" id="alternativa_10" class="caixaAlternativa">
           <div  class="div_numeroAlternativa"> 2 </div>
           <span class="respostaSelecionada"> Dory </span>
       </div>

       <div onclick="alternativa_escolhida()" id="alternativa_11" class="caixaAlternativa">
           <div class="div_numeroAlternativa"> 3 </div>
           <span class="respostaSelecionada"> Baleia azul </span>
       </div>

       <div onclick="alternativa_escolhida()" id="alternativa_12" class="caixaAlternativa">
           <div class="div_numeroAlternativa"> 4 </div>
           <span class="respostaSelecionada"> Barracuda </span>
       </div>`,

    // Quarto som - Morsa
    `<div id="dificuldadePergunta">Médio</div>

        <div onclick="alternativa_escolhida()" id="alternativa_13" class="caixaAlternativa">
            <div  class="div_numeroAlternativa"> 1 </div>
            <span class="respostaSelecionada"> Polvo </span>
        </div>
 
        <div onclick="alternativa_escolhida()" id="alternativa_14" class="caixaAlternativa">
            <div  class="div_numeroAlternativa"> 2 </div>
            <span class="respostaSelecionada"> Peixe-boi </span>
        </div>
 
        <div onclick="alternativa_escolhida()" id="alternativa_15" class="caixaAlternativa">
            <div class="div_numeroAlternativa"> 3 </div>
            <span class="respostaSelecionada"> Tubarão Martelo </span>
        </div>
 
        <div onclick="alternativa_escolhida()" id="alternativa_16" class="caixaAlternativa">
            <div class="div_numeroAlternativa"> 4 </div>
            <span class="respostaSelecionada"> Morsa </span>
        </div>`,

    // quinto som - Foca
    `<div id="dificuldadePergunta">Fácil</div>

       <div onclick="alternativa_escolhida()" id="alternativa_17" class="caixaAlternativa">
           <div  class="div_numeroAlternativa"> 1 </div>
           <span class="respostaSelecionada"> Salmão </span>
       </div>

       <div onclick="alternativa_escolhida()" id="alternativa_18" class="caixaAlternativa">
           <div  class="div_numeroAlternativa"> 2 </div>
           <span class="respostaSelecionada"> Baiacu </span>
       </div>

       <div onclick="alternativa_escolhida()" id="alternativa_19" class="caixaAlternativa">
           <div class="div_numeroAlternativa"> 3 </div>
           <span class="respostaSelecionada"> Foca </span>
       </div>

       <div onclick="alternativa_escolhida()" id="alternativa_20" class="caixaAlternativa">
           <div class="div_numeroAlternativa"> 4 </div>
           <span class="respostaSelecionada"> Peixe leão </span>
       </div>`,

    // sexto som - Golfinho
    `<div id="dificuldadePergunta">Fácil</div>

        <div onclick="alternativa_escolhida()" id="alternativa_21" class="caixaAlternativa">
            <div  class="div_numeroAlternativa"> 1 </div>
            <span class="respostaSelecionada"> Golfinho </span>
        </div>
 
        <div onclick="alternativa_escolhida()" id="alternativa_22" class="caixaAlternativa">
            <div  class="div_numeroAlternativa"> 2 </div>
            <span class="respostaSelecionada"> Orcas </span>
        </div>
 
        <div onclick="alternativa_escolhida()" id="alternativa_23" class="caixaAlternativa">
            <div class="div_numeroAlternativa"> 3 </div>
            <span class="respostaSelecionada"> Botos </span>
        </div>
 
        <div onclick="alternativa_escolhida()" id="alternativa_24" class="caixaAlternativa">
            <div class="div_numeroAlternativa"> 4 </div>
            <span class="respostaSelecionada"> Beluga </span>
        </div>`,

    // Sétimo som - Orca
    `<div id="dificuldadePergunta">Médio</div>

     <div onclick="alternativa_escolhida()" id="alternativa_25" class="caixaAlternativa">
         <div  class="div_numeroAlternativa"> 1 </div>
         <span class="respostaSelecionada"> Golfinho </span>
     </div>

     <div onclick="alternativa_escolhida()" id="alternativa_26" class="caixaAlternativa">
         <div  class="div_numeroAlternativa"> 2 </div>
         <span class="respostaSelecionada"> Orcas </span>
     </div>

     <div onclick="alternativa_escolhida()" id="alternativa_27" class="caixaAlternativa">
         <div class="div_numeroAlternativa"> 3 </div>
         <span class="respostaSelecionada"> Botos </span>
     </div>

     <div onclick="alternativa_escolhida()" id="alternativa_28" class="caixaAlternativa">
         <div class="div_numeroAlternativa"> 4 </div>
         <span class="respostaSelecionada"> Beluga </span>
     </div>`,

    // Oitavo som - Palhaço
    `<div id="dificuldadePergunta">Extrema</div>

      <div onclick="alternativa_escolhida()" id="alternativa_29" class="caixaAlternativa">
          <div  class="div_numeroAlternativa"> 1 </div>
          <span class="respostaSelecionada"> Peixe bolha </span>
      </div>

      <div onclick="alternativa_escolhida()" id="alternativa_30" class="caixaAlternativa">
          <div  class="div_numeroAlternativa"> 2 </div>
          <span class="respostaSelecionada"> Baiacu </span>
      </div>

      <div onclick="alternativa_escolhida()" id="alternativa_31" class="caixaAlternativa">
          <div class="div_numeroAlternativa"> 3 </div>
          <span class="respostaSelecionada"> Peixe palhaço </span>
      </div>

      <div onclick="alternativa_escolhida()" id="alternativa_32" class="caixaAlternativa">
          <div class="div_numeroAlternativa"> 4 </div>
          <span class="respostaSelecionada"> Tartaruga de couro </span>
      </div>`
]


const texto_explicativo = [
    // Video Jubarte
    `<div id="div_comentario">
        <h1 id="acerto_erro">Errado</h1>
    
        As baleias produzem esses sons para buscar parceiros durante o acasalamento, comunicação social dentro dos grupos, demarcar território e localizar presas. Em vastos ambientes oceânicos, as vocalizações permitem que as baleias se comuniquem eficientemente, desempenhando um papel vital em sua sobrevivência e interações.

        <div id="botao_fecharVideo" onclick="proximaPerg()">
        Próximo som
        </div>
    </div>`,

    // Vídeo Pinguins
    `<div id="div_comentario">
        <h1 id="acerto_erro">Errado</h1>

        Os sons que os pinguins emitem desempenham papéis cruciais em suas interações sociais e comportamentais. Durante o acasalamento, os pinguins imperiais, por exemplo, utilizam vocalizações distintas para fortalecer os laços entre casais. Além disso, os sons podem servir como formas de reconhecimento entre pais e filhotes em meio a grandes colônias, facilitando a identificação mútua.

        <div id="botao_fecharVideo" onclick="proximaPerg()">
        Próximo som
        </div>
    </div>`,

    // Vídeo Dory
    `<div id="div_comentario">
        <h1 id="acerto_erro">Errado</h1>

        Na animação da Disney "Procurando o Nemo",  o pai de Nemo, Marlin e sua amiga Dory, estão em busca do filho do peixe palhaço, e em um momento do filme, Dory 'fala baleiês' para se comunicar com uma baleia azul e possivelmente receber informações sobre o peixinho perdido. Gerando uma cena memorável e nostálgica para muitos.
        curiosidade: a espécie de Dory se chama peixe cirurgião-patela.

        <div id="botao_fecharVideo" onclick="proximaPerg()">
            Próximo som
        </div>
    </div>`,

    // Vídeo Morsas
    `<div id="div_comentario">
        <h1 id="acerto_erro">Errado</h1>
        
        As morsas, majestosos mamíferos marinhos do Ártico, são reconhecidas por suas características presas longas e por suas vocalizações únicas. As morsas emitem uma variedade de sons, incluindo grunhidos, rosnados e cliques, que desempenham papéis importantes em sua comunicação e interações sociais. Esses sons podem ser utilizados para coordenar atividades em grupo, manter a coesão social e expressar emoções. Além disso, as vocalizações das morsas podem desempenhar um papel na navegação e na localização de companheiros ou de áreas de descanso.
        
        <div id="botao_fecharVideo" onclick="proximaPerg()">
            Próximo som
        </div>
    </div>`,

    // Vídeo focas
    `<div id="div_comentario">
        <h1 id="acerto_erro">Errado</h1>

        As focas, habitantes dos ambientes marinhos, são conhecidas por suas vocalizações distintas. Os sons que emitem desempenham funções cruciais em suas interações sociais e na comunicação entre membros de uma colônia. As focas usam uma variedade de vocalizações, incluindo guinchos, grunhidos e padrões complexos, para expressar emoções, manter contato com filhotes e parceiros, além de alertar sobre possíveis ameaças. Esses sons ajudam a fortalecer os laços sociais, coordenar atividades e contribuem para a sobrevivência desses mamíferos marinhos em seus habitats diversos.

        <div id="botao_fecharVideo" onclick="proximaPerg()">
            Próximo som
        </div>
    </div>`,

    // Vídeo golfinhos
    `<div id="div_comentario">
        <h1 id="acerto_erro">Errado</h1>

        Os golfinhos, inteligentes e sociais habitantes dos oceanos, são conhecidos por sua notável capacidade vocal. Emitindo uma variedade de sons, desde assobios agudos até cliques sonares, os golfinhos utilizam suas vocalizações para se comunicar, navegar e interagir socialmente. Os assobios podem servir para identificação individual, enquanto os cliques são fundamentais para a ecolocalização, ajudando os golfinhos a detectar presas e objetos no ambiente aquático. Além de facilitar a coordenação dentro de grupos, esses sons desempenham um papel essencial na expressão de emoções e na comunicação entre membros da comunidade de golfinhos.

        <div id="botao_fecharVideo" onclick="proximaPerg()">
            Próximo som
        </div>
    </div>`,

    // Vídeo Orcas
    `<div id="div_comentario">
        <h1 id="acerto_erro">Errado</h1>

        Os golfinhos, inteligentes e sociais habitantes dos oceanos, são conhecidos por sua notável capacidade vocal. Emitindo uma variedade de sons, desde assobios agudos até cliques sonares, os golfinhos utilizam suas vocalizações para se comunicar, navegar e interagir socialmente. Os assobios podem servir para identificação individual, enquanto os cliques são fundamentais para a ecolocalização, ajudando os golfinhos a detectar presas e objetos no ambiente aquático. Além de facilitar a coordenação dentro de grupos, esses sons desempenham um papel essencial na expressão de emoções e na comunicação entre membros da comunidade de golfinhos.

        <div id="botao_fecharVideo" onclick="proximaPerg()">
            Próximo som
        </div>
    </div>`,

    // Vídeo Peixe-palhaço
    `<div id="div_comentario">
        <h1 id="acerto_erro">Errado</h1>

        Os peixes palhaços, muito conhecidos, também se destacam pela sua forma peculiar de comunicação. eles emitem sons distintos que desempenham papéis importantes na organização social e na defesa do território. Os sons dos peixes palhaços,são descritos como estalos ou grunhidos, são utilizados para fortalecer os laços entre pares e demarcar áreas específicas do recife como território próprio. Essas vocalizações desempenham um papel vital na manutenção da hierarquia social dentro dos grupos de peixes palhaços, ajudando a evitar conflitos desnecessários e promovendo a eficácia na defesa contra possíveis predadores.

        <div id="botao_fecharVideo" onclick="proximaPerg()">
        Ver ranking
        </div>
    </div>`
]



// reprodutor e iniciar/parar espectro

function iniciar_parar() {
    const btn_pause = document.querySelector('.btn_pause');
    const btn_play = document.querySelector('.btn_play');
    const reproAudio = document.querySelector('#div_audio')
    var spectrum = document.querySelectorAll('.spectrum');


    if (btn_play.style.display != 'none') {
        reproAudio.play();
        btn_play.style.display = 'none';
        btn_pause.style.display = 'block';


        for (
            contador = 0;
            contador < spectrum.length;
            contador++
        ) {
            spectrum[contador].style.animationName = 'equilizer'
        };

    } else {
        reproAudio.pause();
        btn_pause.style.display = 'none';
        btn_play.style.display = 'block';

        for (
            contador = 0;
            contador < spectrum.length;
            contador++
        ) {
            spectrum[contador].style.animationName = 'none'
        }
    }
};

// Jogo:


rotacao_geral = 0;



function comecarJogo() {

    document.querySelector('#div_explicaJogo').classList.remove(`aparecer`);
    document.querySelector('#div_explicaJogo').classList.add(`esconder`);


    document.querySelector('.preJogo').classList.remove(`aparecer`);
    document.querySelector('.preJogo').classList.add(`esconder`);

    div_inserirAudio.innerHTML = audio[0];
    div_alternativas.innerHTML = alternativa[0];

    document.querySelector('.priPergunta').classList.remove(`esconder`);
    document.querySelector(`.priPergunta`).classList.add(`aparecer`);
}

function alternativa_escolhida() {
    rotacao_geral += 1

    var cliqueAlternativa = document.querySelector('.respostaSelecionada');

    document.querySelector(`.priPergunta #div_video`).classList.remove(`esconder`);
    document.querySelector(`.priPergunta #div_video`).classList.add(`aparecer`);

    div_video.innerHTML += texto_explicativo[rotacao_geral - 1] + video[rotacao_geral - 1];
    div_inserirAudio.innerHTML = audio[rotacao_geral];
    div_alternativas.innerHTML = alternativa[rotacao_geral];

    cliqueAlternativa.addEventListener("click", verificarResposta());
}

function verificarResposta() {
    var respostaClicada = event.target;
    var pontosUsuario = 0;
    var pontoPriPerg = 0;
    var pontoSegPerg = 0;
    var pontoTerPerg = 0
    var pontoQuaPerg = 0; 
    var pontoQuiPerg = 0;
    var pontoSexPerg = 0;
    var pontoSetPerg = 0;
    var pontoOitPerg= 0;

    if (respostaClicada.innerHTML == " Baleia Jubarte " && rotacao_geral == 1) {
        acerto_erro.innerHTML = `Certo`
        pontosUsuario += 1;
        pontoPriPerg = 1;

    } else if (respostaClicada.innerHTML == " Pinguim " && rotacao_geral == 2) {
        acerto_erro.innerHTML = `Certo`
        pontosUsuario += 4;
        pontoSegPerg = 1;

    } else if (respostaClicada.innerHTML == " Dory " && rotacao_geral == 3) {
        acerto_erro.innerHTML = `Certo`
        pontosUsuario += 1;
        pontoTerPerg = 1;

    } else if (respostaClicada.innerHTML == " Morsa " && rotacao_geral == 4) {
        acerto_erro.innerHTML = `Certo`
        pontosUsuario += 2;
        pontoQuaPerg = 1;

    } else if (respostaClicada.innerHTML == " Foca " && rotacao_geral == 5) {
        acerto_erro.innerHTML = `Certo`
        pontosUsuario += 1;
        pontoQuiPerg = 1;

    } else if (respostaClicada.innerHTML == " Golfinho " && rotacao_geral == 6) {
        acerto_erro.innerHTML = `Certo`
        pontosUsuario += 1;
        pontoSexPerg = 1;

    } else if (respostaClicada.innerHTML == " Orcas " && rotacao_geral == 7) {
        acerto_erro.innerHTML = `Certo`
        pontosUsuario += 2;
        pontoSetPerg = 1;

    } else if (respostaClicada.innerHTML == " Peixe palhaço " && rotacao_geral == 8) {
        acerto_erro.innerHTML = `Certo`
        pontosUsuario += 8;
        pontoOitPerg = 1;
    };

    if (rotacao_geral == 8) {

        fetch("/usuarios/inserirPontos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
            // emailServer: email,
            // senhaServer: senha,
            pontosUsuarioServer: pontosUsuario,
            pontoPriPergServer: pontoPriPerg,
            pontoSegPergServer: pontoSegPerg,
            pontoTerPergServer: pontoTerPerg,
            pontoQuaPergServer: pontoQuaPerg,
            pontoQuiPergServer: pontoQuiPerg,
            pontoSexPergServer: pontoSexPerg,
            pontoSetPergServer: pontoSetPerg,
            pontoOitPergServer: pontoOitPerg  
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

function proximaPerg() {

    var div_video = document.querySelector(`.priPergunta #div_video`);

    div_video.classList.remove(`aparecer`);
    div_video.classList.add(`esconder`);

    while (div_video.firstChild) {
        div_video.removeChild(div_video.firstChild)
    }

    if (rotacao_geral == 8) {

        window.location = "http://localhost:3333/entrar.HTML"
        // fetch("/usuarios/inserirPontos", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         // crie um atributo que recebe o valor recuperado aqui
        //         // Agora vá para o arquivo routes/usuario.js
        //     // emailServer: email,
        //     // senhaServer: senha,
        //     pontosUsuarioServer: pontosUsuario,
        //     pontoPriPergServer: pontoPriPerg,
        //     pontoSegPergServer: pontoSegPerg,
        //     pontoTerPergServer: pontoTerPerg,
        //     pontoQuaPergServer: pontoQuaPerg,
        //     pontoQuiPergServer: pontoQuiPerg,
        //     pontoSexPergServer: pontoSexPerg,
        //     pontoSetPergServer: pontoSetPerg,
        //     pontoOitPergServer: pontoOitPerg  
        //     }),
        // })
        //     .then(function (resposta) {
        //         console.log("resposta: ", resposta);

        //         if (resposta.ok) {
        //             cardErro.style.display = "block";
        //         } else {
        //             throw "Houve um erro ao tentar realizar o cadastro!";
        //         }
        //     })
        //     .catch(function (resposta) {
        //         console.log(`#ERRO: ${resposta}`);
        //     });
            
            // return false;
        }        
    }

    // fetch("usuarios/autenticar", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         // emailServer: email,
    //         // senhaServer: senha,
    //         pontosUsuarioServer: pontosUsuario,
    //         pontoPriPergServer: pontoPriPerg,
    //         pontoSegPergServer: pontoSegPerg,
    //         pontoTerPergServer: pontoTerPerg,
    //         pontoQuaPergServer: pontoQuaPerg,
    //         pontoQuiPergServer: pontoQuiPerg,
    //         pontoSexPergServer: pontoSexPerg,
    //         pontoSetPergServer: pontoSetPerg,
    //         pontoOitPergServer: pontoOitPerg             
    //     })
    // }).then(function (resposta_login) {
    //     console.log("ESTOU NO THEN DO login()!")

    //     if (resposta_login.ok) {
    //         console.log(resposta_login);

    //         resposta_login.json().then(json => {
    //             console.log(json);
    //             console.log(JSON.stringify(json));
    //             sessionStorage.EMAIL_USUARIO = json.email;
    //             sessionStorage.NOME_USUARIO = json.nome;

    //             div_alerta.style.display = 'flex';
    //             div_alerta.innerHTML = 'Entrada efetuada';
    //             setTimeout(
    //                 window.location = "http://localhost:3333/jogo.HTML"
    //                 , 3000); // apenas para exibir o loading

    //         });

    //     } else {

    //         div_alerta.style.display = 'flex';
    //         div_alerta.innerHTML = 'Email e/ou Senha incorretos';
    //         console.log("Houve um erro ao tentar realizar o login!");

    //         resposta_login.text().then(texto => {
    //             console.error(texto);
    //             // finalizarAguardar(texto);
    //         });
    //     }

    // }).catch(function (erro) {
    //     console.log(erro);
    // })