let button = document.querySelector('#button');
let msg = document.querySelector('#welcome');
let msgwelcome = document.querySelector('#welcomemessage');
let body = document.querySelector('body');
let img = document.querySelector('#im');
let button2 = document.querySelector('#button2');
let wh = document.querySelector('#welcomehide');
let play = document.querySelector('#wrapperPlay');
let search = document.querySelector('#searchBar');
let modalbtn = document.querySelector('#myBtn')




button.addEventListener('click', ()=>{
 
  msg.classList.toggle('welcomeback');
  msgwelcome.classList.toggle('welcomeback');
  wh.classList.toggle('reveal');
  button.classList.toggle('back');
  search.classList.toggle('reveal');
  modalbtn.classList.toggle('reveal');
  body.classList.toggle('background');
  
})


function change(){
  let displayImage = document.getElementById('im');
  if(displayImage.src.match('ampoule.png')){
    displayImage.src='ampouleV.png';
  } else{
    displayImage.src='ampoule.png';
  }
  
}

function jouer(){
  var a = document.getElementById('searchBar').value;
  if(a === "jouer" || a === "JOUER"){
    play.classList.toggle('reveal');
  }
}
play.addEventListener('click', ()=>{
 
  window.open('./niveau1.html')
 
  
})

// Référence au bouton et à la fenêtre modale
var btn = document.getElementById("myBtn");
var modal = document.getElementById("myModal");

// Référence à la croix de fermeture
var span = document.getElementsByClassName("close")[0];

// Afficher la fenêtre modale lorsque le bouton est cliqué
btn.onclick = function() {
  modal.style.display = "block";
}

// Fermer la fenêtre modale lorsque la croix est cliquée
span.onclick = function() {
  modal.style.display = "none";
}

// Fermer la fenêtre modale lorsque l'utilisateur clique en dehors de la fenêtre
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
