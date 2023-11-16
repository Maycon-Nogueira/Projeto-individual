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
        }

        ;

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

function alternativa_escolhida(){
    

}