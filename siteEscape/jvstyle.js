let button = document.querySelector('#button');
let msg = document.querySelector('#message');
let body = document.querySelector('body');
let img = document.querySelector('#im');
let button2 = document.querySelector('#button2');

button.addEventListener('click', ()=>{
  body.classList.toggle('back');
  
})

function change(){
  let displayImage = document.getElementById('im');
  if(displayImage.src.match('ampoule.png')){
    displayImage.src='ampouleV.png';
  } else{
    displayImage.src='ampoule.png';
    
  }
}


