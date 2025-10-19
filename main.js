function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
   
        if( elemento &&  elemento.localName === 'audio'){
                        elemento.play();
                }else{
                    console.log("Elemento nao encontrado")
                }
        
}


const listaButtons = document.querySelectorAll('.tecla');





for (contador = 0; contador < listaButtons.length; contador++) {
    const tecla = listaButtons[contador]
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Enter' || evento.code === 'space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
