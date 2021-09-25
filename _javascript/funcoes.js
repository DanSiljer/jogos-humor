//Funçao dos incones
function minions() {

  var imgMinion = document.getElementById("imgMinion");

  imgMinion.style.display = "block";

  var imgGru = document.getElementById('imgGru');
  imgGru.style.display = "none";

  var imgMargo = document.getElementById('imgMargo');
  imgMargo.style.display = "none";

  var imgEdith = document.getElementById('imgEdith');
  imgEdith.style.display = "none";

  var imgAgnes = document.getElementById('imgAgnes');
  imgAgnes.style.display = "none";


}

function gru() {

  var imgGru = document.getElementById("imgGru");

  imgGru.style.display = "block";

  var imgMinion = document.getElementById('imgMinion');
  imgMinion.style.display = "none";

  var imgMargo = document.getElementById('imgMargo');
  imgMargo.style.display = "none";

  var imgEdith = document.getElementById('imgEdith');
  imgEdith.style.display = "none";

  var imgAgnes = document.getElementById('imgAgnes');
  imgAgnes.style.display = "none";

}

function margo() {

  var imgMargo = document.getElementById("imgMargo");

  imgMargo.style.display = "block";

  var imgMinion = document.getElementById('imgMinion');
  imgMinion.style.display = "none";

  var imgGru = document.getElementById('imgGru');
  imgGru.style.display = "none";

  var imgEdith = document.getElementById('imgEdith');
  imgEdith.style.display = "none";

  var imgAgnes = document.getElementById('imgAgnes');
  imgAgnes.style.display = "none";

}

function edith() {

  var imgEdith = document.getElementById("imgEdith");

  imgEdith.style.display = "block";

  var imgMinion = document.getElementById('imgMinion');
  imgMinion.style.display = "none";

  var imgGru = document.getElementById('imgGru');
  imgGru.style.display = "none";

  var imgEdith = document.getElementById('imgMargo');
  imgEdith.style.display = "none";

  var imgAgnes = document.getElementById('imgAgnes');
  imgAgnes.style.display = "none";

}

function agnes() {

  var imgAgnes = document.getElementById("imgAgnes");

  imgAgnes.style.display = "block";

  var imgMinion = document.getElementById('imgMinion');
  imgMinion.style.display = "none";

  var imgGru = document.getElementById('imgGru');
  imgGru.style.display = "none";

  var imgEdith = document.getElementById('imgMargo');
  imgEdith.style.display = "none";

  var imgAgnes = document.getElementById('imgEdith');
  imgAgnes.style.display = "none";
}


//Mudar foto

const elementoPersonagemMinion = document.querySelector('#personagem');
const elementoPersonagemGru = document.querySelector('#personagem');
// const elementoPersonagemMargo = document.querySelector('#personagem');
// const elementoPersonagemEdith= document.querySelector('#personagem');
// const elementoPersonagemAgnes= document.querySelector('#personagem');

const elementoImgMinion = document.querySelector('#imgminion', '#imggru')
const elementoImgGru = document.querySelector('#imggru')
// const elementoImgMargo = document.querySelector()
// const elementoImgEdith = document.querySelector()
// const elementoImgAgnes = document.querySelector()

const elementoSituacaoMinion = document.querySelector('#situacao')
const elementoSituacaoGru = document.querySelector('#situacao')
// const elementoSituacaoMargo= document.querySelector('#situacao')
// const elementoSituacaoEdith = document.querySelector('#situacao')
// const elementoSituacaoAgnes = document.querySelector('#situacao')

let elementoBtn = document.querySelector('#alterar')

window.onload = function() {

};

elementoBtn.addEventListener('click', function ( ){

  if(elementoBtn.value == 'primeiro'){ //Minios
    elementoImgMinion.src = '_imagens/carl.png' ;
    elementoImgGru.src = '_imagens/GruFeliz2.png' ;
    elementoPersonagemMinion.innerText = 'Carl' ;
    elementoPersonagemMinion.innerText = 'Gru' ;
    elementoSituacaoMinion.innerText = 'Feliz';
    elementoSituacaoGru.innerText = 'Feliz';

    elementoBtn.value = 'segundo' ;
   
} else if(elementoBtn.value == 'segundo') { 
    elementoImgMinion.src = '_imagens/Wolverine.png' ;
    elementoImgGru.src = '_imagens/gruApaixonado.png' ;
    elementoPersonagemMinion.innerText = 'Wolverine' ;
    elementoPersonagemMinion.innerText = "Gru" ;
    elementoSituacaoMinion.innerText = 'Saí da frete, tô virado(a) na moléstia.' ;
    elementoSituacaoGru.innerText = 'Amando';
    elementoBtn.value = 'terceiro' ;
    

} else{ 
    elementoImgMinion.src = '_imagens/tim.png' ;
    elementoImgGru.src = '_imagens/Gru3.png' 
    elementoPersonagemMinion.innerText = 'Tim' ;
    elementoPersonagemGru.innerText = 'Gru' ;
    elementoSituacaoMinion.innerText = 'Tô nem aí.';
    elementoSituacaoGru.innerText = 'Saí de baixo, hoje tô afim de explodir.';
    elementoBtn.value = 'primeiro';
    
}

})

// const elementoPersonagemGru = document.querySelector('#personagem');
// const elementoImgGru = document.querySelector('#imgru')
// const elementoSituacaoGru = document.querySelector('#situacao')
// let elementoG = document.querySelector('#alterar')


// elementoG.addEventListener('click', function ( ){

//     if(elementoG.value == 'gru1'){//Gru
//         elementoImgGru.src = '_imagens/GruFeliz2.png' 
//         elementoPersonagemGru.innerText = 'Carl' 
//         elementoSituacaoGru.innerText = 'Feliz'
//         elementoG.value = 'gru2' 

//     } else if(elementoG.value == 'gru2') { 
//         elementoImgGru.src = '_imagens/gruApaixonado.png'  
//         elementoPersonagemGru.innerText = 'Gru' 
//         elementoSituacaoGru.innerText = 'Apaixonado.' 
//         elementoG.value = 'gru3'  

//     } else{ 
//         elementoImgGru.src = '_imagens/Gru3.png' 
//         elementoPersonagemGru.innerText = 'Gru' 
//         elementoSituacaoGru.innerText = 'Irado.' 
//         elementoG.value = 'gru1'
//   }
// })





