let button = document.querySelector('#button');
let msg = document.querySelector('#welcome');
let msgwelcome = document.querySelector('#welcomemessage');
let body = document.querySelector('body');
let img = document.querySelector('#im');
let button2 = document.querySelector('#button2');
let wh = document.querySelector('#welcomehide');
let play = document.querySelector('#wrapperPlay');
let search = document.querySelector('#searchBar');




button.addEventListener('click', ()=>{
 
  msg.classList.toggle('welcomeback');
  msgwelcome.classList.toggle('welcomeback');
  wh.classList.toggle('reveal');
  button.classList.toggle('back');
  search.classList.toggle('reveal');

  
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
  window.open('http://google.com')
  
})

