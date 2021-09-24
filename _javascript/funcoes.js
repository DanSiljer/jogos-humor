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

const elementoPersonagem = document.querySelector('#personagem');
const elementoImg = document.querySelector('#imgminion')
const elementoSituacao = document.querySelector('#situacao')
let elementoBtn = document.querySelector('#alterar')


elementoBtn.addEventListener('click', function (evente){

  if(elementoBtn.value == 'minion1'){ //Minios
    elementoImg.src = '_imagens/carl.png' 
    elementoPersonagem.innerText = 'Carl' 
    elementoSituacao.innerText = 'Feliz'
    elementoBtn.value = 'minion2' 
   
} else if(elementoBtn.value == 'minion2') { 
    elementoImg.src = '_imagens/Wolverine2.png'  
    elementoPersonagem.innerText = 'Wolverine' 
    elementoSituacao.innerText = 'Saí da frete, tô virado(a) na moléstia.' 
    elementoBtn.value = 'minion3'  

} else{ 
    elementoImg.src = '_imagens/tim.png' 
    elementoPersonagem.innerText = 'Tim' 
    elementoSituacao.innerText = 'Tô nem aí.'
    elementoBtn.value = 'minion1'
}
form.reset()
})
    
function gru(form){

    if(elementoBtn.value == 'gru1'){//Gru
  elementoImg.src = '_imagens/GruFeliz2.png' 
  elementoPersonagem.innerText = 'Carl' 
  elementoSituacao.innerText = 'Feliz'
  elementoBtn.value = 'gru2' 

    } else if(elementoBtn.value == 'gru2') { 
  elementoImg.src = '_imagens/gruApaixonado.png'  
  elementoPersonagem.innerText = 'Gru' 
  elementoSituacao.innerText = 'Apaixonado.' 
  elementoBtn.value = 'gru3'  

    } else{ 
  elementoImg.src = '_imagens/Gru3.png' 
  elementoPersonagem.innerText = 'Gru' 
  elementoSituacao.innerText = 'Irado.' 
  elementoBtn.value = 'gru1'
  }

  return gru
}


// } else if(elementoBtn.value == 'gru1'){//Margo
//   elementoImg.src = '_imagens/GruFeliz2.png' 
//   elementoPersonagem.innerText = 'Carl' 
//   elementoSituacao.innerText = 'Feliz'
//   elementoBtn.value = 'gru2' 

// } else if(elementoBtn.value == 'gru2') { 
//   elementoImg.src = '_imagens/gruApaixonado.png'  
//   elementoPersonagem.innerText = 'Gru' 
//   elementoSituacao.innerText = 'Apaixonado.' 
//   elementoBtn.value = 'gru3'  

// } else if(elementoBtn.value == 'gru1' ){ 
//   elementoImg.src = '_imagens/Gru3.png' 
//   elementoPersonagem.innerText = 'Gru' 
//   elementoSituacao.innerText = 'Irado.' 






