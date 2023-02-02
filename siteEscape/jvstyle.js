let button = document.querySelector('#button');
let msg = document.querySelector('#welcome');
let body = document.querySelector('body');
let img = document.querySelector('#im');
let button2 = document.querySelector('#button2');
let wh = document.querySelector('#welcomehide');



button.addEventListener('click', ()=>{
  body.classList.toggle('back');
  msg.classList.toggle('welcomeback');
  wh.classList.toggle('reveal');

  
})

function change(){
  let displayImage = document.getElementById('im');
  if(displayImage.src.match('ampoule.png')){
    displayImage.src='ampouleV.png';
  } else{
    displayImage.src='ampoule.png';
    
  }
}


