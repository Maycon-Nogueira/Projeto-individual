// Seção Jogos
function iniciar_parar() {
    const btn_pause = document.querySelector('.btn_pause');
    const btn_play = document.querySelector('.btn_play');
    const audio = document.querySelector('#audio')
    var spectrum = document.querySelectorAll('.spectrum');
    

    if (btn_play.style.display != 'none') {
        audio.play();
        btn_play.style.display = 'none';
        btn_pause.style.display = 'block';


        for(
            contador = 0;
            contador<spectrum.length;
            contador++
        ){
            spectrum[contador].style.animationName = 'equilizer'
        };

    } else {
        audio.pause();
        btn_pause.style.display = 'none';
        btn_play.style.display = 'block';

        for(
            contador = 0;
            contador<spectrum.length;
            contador++
        ){
            spectrum[contador].style.animationName = 'none'
        }
    }
};

//  seção constantes para rodar as paginas

const video = [ 
`<video src="assets/public/videos/Canto das Jubartes.mp4" autoplay loop plays-inline>  </video>`,

`<video src="assets/public/videos/Penguin Sounds HD.mp4" autoplay loop plays-inline> </video>`,

`<video src="assets/public/videos/Dory falando baleiês - Procurando Nemo.mp4" autoplay loop plays-inline> </video>`,




]

const texto_explicativo = [
    `<div id="div_comentario">
    <h1 id="acerto_erro">Acertou</h1>
    
    As baleias produzem esses sons para buscar parceiros durante o acasalamento, comunicação social dentro dos grupos, demarcar território e localizar presas. Em vastos ambientes oceânicos, as vocalizações permitem que as baleias se comuniquem eficientemente, desempenhando um papel vital em sua sobrevivência e interações.
    <div id="botao_fecharVideo" onclick="proximaPerg()">
        Próximo som
    </div>
</div>`,

`<div id="div_comentario">
<h1 id="acerto_erro">Acertou</h1>

Os sons que os pinguins emitem desempenham papéis cruciais em suas interações sociais e comportamentais. Durante o acasalamento, os pinguins imperiais, por exemplo, utilizam vocalizações distintas para fortalecer os laços entre casais. Além disso, os sons podem servir como formas de reconhecimento entre pais e filhotes em meio a grandes colônias, facilitando a identificação mútua.
<div id="botao_fecharVideo" onclick="proximaPerg()">
    Próximo som
</div>
</div>`,

`<div id="div_comentario">
<h1 id="acerto_erro">Acertou</h1>

Na animação da Disney "Procurando o Nemo",  o pai de Nemo, Marlin e sua amiga Dory, estão em busca do filho do peixe palhaço, e em um momento do filme, Dory 'fala baleiês' para se comunicar com uma baleia azul e possivelmente receber informações sobre o peixinho perdido. Gerando uma cena memorável e nostálgica para muitos.
curiosidade: a espécie de Dory se chama peixe cirurgião-patela
<div id="botao_fecharVideo" onclick="proximaPerg()">
    Próximo som
</div>
</div>`,

]

// const audio = [

//  `<source src="assets/public/videos/Canto das Jubartes.mp4" type="audio/mp4">`,

// `<source src="assets/public/audios/SOM DO PINGUIM, SOM DOS ANIMAIS _ PENGUIN SOUND.mp4" type="audio/mp4">`

// ]

rotacao_video = -1;

rotacao_geral = 0;


const conteinerInterativo = document.querySelector('.div_conteinerInterativo');

const alternativa = document.querySelector('.caixaAlternativa');

function comecarJogo(){

    document.querySelector('#div_explicaJogo').classList.remove(`aparecer`);
    document.querySelector('#div_explicaJogo').classList.add(`esconder`);


    document.querySelector('.preJogo').classList.remove(`aparecer`);
     document.querySelector('.preJogo').classList.add(`esconder`);


    document.querySelector('.priPergunta').classList.remove(`esconder`); 
    document.querySelector('.PriPergunta').classList.add(`aparecer`);


}

function alternativa_escolhida(){
   rotacao_video += 1

    document.querySelector(`.priPergunta #div_video`).classList.remove(`esconder`);
    document.querySelector(`.priPergunta #div_video`).classList.add(`aparecer`)


   

    div_video.innerHTML += texto_explicativo[rotacao_video] + video[rotacao_video];

    
}

function proximaPerg(){

    var div_video = document.querySelector(`.priPergunta #div_video`);
    
    div_video.classList.remove(`aparecer`);
    div_video.classList.add(`esconder`)

    while(div_video.firstChild){
        div_video.removeChild(div_video.firstChild)
    }
}


