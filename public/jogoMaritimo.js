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

       <div onclick="alternativa_escolhida()" id="alternativa_1" class="caixaAlternativa">
           <div  class="div_numeroAlternativa"> 1 </div>
           Peixe-Boi
       </div>

       <div onclick="alternativa_escolhida()" id="alternativa_2" class="caixaAlternativa">
           <div  class="div_numeroAlternativa"> 2 </div>
           Tubarão Baleia
       </div>

       <div onclick="alternativa_escolhida()" id="alternativa_3" class="caixaAlternativa">
           <div class="div_numeroAlternativa"> 3 </div>
           Baleia Jubarte
       </div>

       <div onclick="alternativa_escolhida()" id="alternativa_4" class="caixaAlternativa">
           <div class="div_numeroAlternativa"> 4 </div>
           Tartaruga Verde
       </div>`,

    // Segundo som - Pinguim
    `<div id="dificuldadePergunta">Díficil</div>

       <div onclick="alternativa_escolhida()" id="alternativa_1" class="caixaAlternativa">
           <div  class="div_numeroAlternativa"> 1 </div>
           Pinguim
       </div>

       <div onclick="alternativa_escolhida()" id="alternativa_2" class="caixaAlternativa">
           <div  class="div_numeroAlternativa"> 2 </div>
           Lula gigante
       </div>

       <div onclick="alternativa_escolhida()" id="alternativa_3" class="caixaAlternativa">
           <div class="div_numeroAlternativa"> 3 </div>
           Peixe-serra
       </div>

       <div onclick="alternativa_escolhida()" id="alternativa_4" class="caixaAlternativa">
           <div class="div_numeroAlternativa"> 4 </div>
           Linguado
       </div>`,

    // Terceiro som - Dory
    `<div id="dificuldadePergunta">Fácil</div>

       <div onclick="alternativa_escolhida()" id="alternativa_1" class="caixaAlternativa">
           <div  class="div_numeroAlternativa"> 1 </div>
           Marlim
       </div>

       <div onclick="alternativa_escolhida()" id="alternativa_2" class="caixaAlternativa">
           <div  class="div_numeroAlternativa"> 2 </div>
           Dory
       </div>

       <div onclick="alternativa_escolhida()" id="alternativa_3" class="caixaAlternativa">
           <div class="div_numeroAlternativa"> 3 </div>
            Baleia azul
       </div>

       <div onclick="alternativa_escolhida()" id="alternativa_4" class="caixaAlternativa">
           <div class="div_numeroAlternativa"> 4 </div>
           Barracuda
       </div>`,

    // Quarto som - Morsa
    `<div id="dificuldadePergunta">Médio</div>

        <div onclick="alternativa_escolhida()" id="alternativa_1" class="caixaAlternativa">
            <div  class="div_numeroAlternativa"> 1 </div>
            Polvo
        </div>
 
        <div onclick="alternativa_escolhida()" id="alternativa_2" class="caixaAlternativa">
            <div  class="div_numeroAlternativa"> 2 </div>
            Peixe-boi
        </div>
 
        <div onclick="alternativa_escolhida()" id="alternativa_3" class="caixaAlternativa">
            <div class="div_numeroAlternativa"> 3 </div>
            Tubarão Martelo
        </div>
 
        <div onclick="alternativa_escolhida()" id="alternativa_4" class="caixaAlternativa">
            <div class="div_numeroAlternativa"> 4 </div>
            Morsa
        </div>`,

    // quinto som - Foca
    `<div id="dificuldadePergunta">Fácil</div>

       <div onclick="alternativa_escolhida()" id="alternativa_1" class="caixaAlternativa">
           <div  class="div_numeroAlternativa"> 1 </div>
           Salmão
       </div>

       <div onclick="alternativa_escolhida()" id="alternativa_2" class="caixaAlternativa">
           <div  class="div_numeroAlternativa"> 2 </div>
           Baiacu
       </div>

       <div onclick="alternativa_escolhida()" id="alternativa_3" class="caixaAlternativa">
           <div class="div_numeroAlternativa"> 3 </div>
           Foca
       </div>

       <div onclick="alternativa_escolhida()" id="alternativa_4" class="caixaAlternativa">
           <div class="div_numeroAlternativa"> 4 </div>
           Peixe leão
       </div>`,

    // sexto som - Golfinho
    `<div id="dificuldadePergunta">Fácil</div>

        <div onclick="alternativa_escolhida()" id="alternativa_1" class="caixaAlternativa">
            <div  class="div_numeroAlternativa"> 1 </div>
            Golfinho
        </div>
 
        <div onclick="alternativa_escolhida()" id="alternativa_2" class="caixaAlternativa">
            <div  class="div_numeroAlternativa"> 2 </div>
            Orcas
        </div>
 
        <div onclick="alternativa_escolhida()" id="alternativa_3" class="caixaAlternativa">
            <div class="div_numeroAlternativa"> 3 </div>
            Botos
        </div>
 
        <div onclick="alternativa_escolhida()" id="alternativa_4" class="caixaAlternativa">
            <div class="div_numeroAlternativa"> 4 </div>
            Beluga
        </div>`,

    // Sétimo som - Orca
    `<div id="dificuldadePergunta">Fácil</div>

     <div onclick="alternativa_escolhida()" id="alternativa_1" class="caixaAlternativa">
         <div  class="div_numeroAlternativa"> 1 </div>
         Golfinho
     </div>

     <div onclick="alternativa_escolhida()" id="alternativa_2" class="caixaAlternativa">
         <div  class="div_numeroAlternativa"> 2 </div>
         Orcas
     </div>

     <div onclick="alternativa_escolhida()" id="alternativa_3" class="caixaAlternativa">
         <div class="div_numeroAlternativa"> 3 </div>
         Botos
     </div>

     <div onclick="alternativa_escolhida()" id="alternativa_4" class="caixaAlternativa">
         <div class="div_numeroAlternativa"> 4 </div>
         Beluga
     </div>`,

    // Oitavo som - Palhaço
    `<div id="dificuldadePergunta">Extrema</div>

      <div onclick="alternativa_escolhida()" id="alternativa_1" class="caixaAlternativa">
          <div  class="div_numeroAlternativa"> 1 </div>
          Peixe bolha
      </div>

      <div onclick="alternativa_escolhida()" id="alternativa_2" class="caixaAlternativa">
          <div  class="div_numeroAlternativa"> 2 </div>
          Baiacu
      </div>

      <div onclick="alternativa_escolhida()" id="alternativa_3" class="caixaAlternativa">
          <div class="div_numeroAlternativa"> 3 </div>
          Peixe palhaço
      </div>

      <div onclick="alternativa_escolhida()" id="alternativa_4" class="caixaAlternativa">
          <div class="div_numeroAlternativa"> 4 </div>
          Tartaruga de couro
      </div>`
]


const texto_explicativo = [
    // Video Jubarte
    `<div id="div_comentario">
        <h1 id="acerto_erro">Acertou</h1>
    
        As baleias produzem esses sons para buscar parceiros durante o acasalamento, comunicação social dentro dos grupos, demarcar território e localizar presas. Em vastos ambientes oceânicos, as vocalizações permitem que as baleias se comuniquem eficientemente, desempenhando um papel vital em sua sobrevivência e interações.

        <div id="botao_fecharVideo" onclick="proximaPerg()">
        Próximo som
        </div>
    </div>`,

    // Vídeo Pinguins
    `<div id="div_comentario">
        <h1 id="acerto_erro">Acertou</h1>

        Os sons que os pinguins emitem desempenham papéis cruciais em suas interações sociais e comportamentais. Durante o acasalamento, os pinguins imperiais, por exemplo, utilizam vocalizações distintas para fortalecer os laços entre casais. Além disso, os sons podem servir como formas de reconhecimento entre pais e filhotes em meio a grandes colônias, facilitando a identificação mútua.

        <div id="botao_fecharVideo" onclick="proximaPerg()">
        Próximo som
        </div>
    </div>`,

    // Vídeo Dory
    `<div id="div_comentario">
        <h1 id="acerto_erro">Acertou</h1>

        Na animação da Disney "Procurando o Nemo",  o pai de Nemo, Marlin e sua amiga Dory, estão em busca do filho do peixe palhaço, e em um momento do filme, Dory 'fala baleiês' para se comunicar com uma baleia azul e possivelmente receber informações sobre o peixinho perdido. Gerando uma cena memorável e nostálgica para muitos.
        curiosidade: a espécie de Dory se chama peixe cirurgião-patela.

        <div id="botao_fecharVideo" onclick="proximaPerg()">
            Próximo som
        </div>
    </div>`,

    // Vídeo Morsas
    `<div id="div_comentario">
        <h1 id="acerto_erro">Acertou</h1>
        
        As morsas, majestosos mamíferos marinhos do Ártico, são reconhecidas por suas características presas longas e por suas vocalizações únicas. As morsas emitem uma variedade de sons, incluindo grunhidos, rosnados e cliques, que desempenham papéis importantes em sua comunicação e interações sociais. Esses sons podem ser utilizados para coordenar atividades em grupo, manter a coesão social e expressar emoções. Além disso, as vocalizações das morsas podem desempenhar um papel na navegação e na localização de companheiros ou de áreas de descanso.
        
        <div id="botao_fecharVideo" onclick="proximaPerg()">
            Próximo som
        </div>
    </div>`,

    // Vídeo focas
    `<div id="div_comentario">
        <h1 id="acerto_erro">Acertou</h1>

        As focas, habitantes dos ambientes marinhos, são conhecidas por suas vocalizações distintas. Os sons que emitem desempenham funções cruciais em suas interações sociais e na comunicação entre membros de uma colônia. As focas usam uma variedade de vocalizações, incluindo guinchos, grunhidos e padrões complexos, para expressar emoções, manter contato com filhotes e parceiros, além de alertar sobre possíveis ameaças. Esses sons ajudam a fortalecer os laços sociais, coordenar atividades e contribuem para a sobrevivência desses mamíferos marinhos em seus habitats diversos.

        <div id="botao_fecharVideo" onclick="proximaPerg()">
            Próximo som
        </div>
    </div>`,

    // Vídeo golfinhos
    `<div id="div_comentario">
        <h1 id="acerto_erro">Acertou</h1>

        Os golfinhos, inteligentes e sociais habitantes dos oceanos, são conhecidos por sua notável capacidade vocal. Emitindo uma variedade de sons, desde assobios agudos até cliques sonares, os golfinhos utilizam suas vocalizações para se comunicar, navegar e interagir socialmente. Os assobios podem servir para identificação individual, enquanto os cliques são fundamentais para a ecolocalização, ajudando os golfinhos a detectar presas e objetos no ambiente aquático. Além de facilitar a coordenação dentro de grupos, esses sons desempenham um papel essencial na expressão de emoções e na comunicação entre membros da comunidade de golfinhos.

        <div id="botao_fecharVideo" onclick="proximaPerg()">
            Próximo som
        </div>
    </div>`,

    // Vídeo Orcas
    `<div id="div_comentario">
        <h1 id="acerto_erro">Acertou</h1>

        Os golfinhos, inteligentes e sociais habitantes dos oceanos, são conhecidos por sua notável capacidade vocal. Emitindo uma variedade de sons, desde assobios agudos até cliques sonares, os golfinhos utilizam suas vocalizações para se comunicar, navegar e interagir socialmente. Os assobios podem servir para identificação individual, enquanto os cliques são fundamentais para a ecolocalização, ajudando os golfinhos a detectar presas e objetos no ambiente aquático. Além de facilitar a coordenação dentro de grupos, esses sons desempenham um papel essencial na expressão de emoções e na comunicação entre membros da comunidade de golfinhos.

        <div id="botao_fecharVideo" onclick="proximaPerg()">
            Próximo som
        </div>
    </div>`,

    // Vídeo Peixe-palhaço
    `<div id="div_comentario">
        <h1 id="acerto_erro">Acertou</h1>

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


// const conteinerInterativo = document.querySelector('.div_conteinerInterativo');

// const alternativa = document.querySelector('.caixaAlternativa');

function comecarJogo() {

    document.querySelector('#div_explicaJogo').classList.remove(`aparecer`);
    document.querySelector('#div_explicaJogo').classList.add(`esconder`);


    document.querySelector('.preJogo').classList.remove(`aparecer`);
    document.querySelector('.preJogo').classList.add(`esconder`);

    div_inserirAudio.innerHTML = audio[0];
    div_alternativas.innerHTML = alternativa[0];

    document.querySelector('.priPergunta').classList.remove(`esconder`);
    document.querySelector('.PriPergunta').classList.add(`aparecer`);


}

function alternativa_escolhida() {
    rotacao_geral += 1

    var div_audio = document.querySelector(`.priPergunta #div_audio`);

    document.querySelector(`.priPergunta #div_video`).classList.remove(`esconder`);
    document.querySelector(`.priPergunta #div_video`).classList.add(`aparecer`);

    // for (
    //     rotacao_perg = 0;
    //     rotacao_perg <= rotacao_geral;
    //     rotacao_perg++
    // ) {

    // }



    // while (div_audio.firstChild) {
    //     div_audio.removeChild(div_audio.firstChild)
    // }

    div_video.innerHTML += texto_explicativo[rotacao_geral - 1] + video[rotacao_geral - 1];
    div_inserirAudio.innerHTML = audio[rotacao_geral];
    div_alternativas.innerHTML = alternativa[rotacao_geral];


}

function proximaPerg() {

    var div_video = document.querySelector(`.priPergunta #div_video`);


    div_video.classList.remove(`aparecer`);
    div_video.classList.add(`esconder`);

    while (div_video.firstChild) {
        div_video.removeChild(div_video.firstChild)
    }
}


