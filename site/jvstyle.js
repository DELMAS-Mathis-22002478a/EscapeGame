let button = document.querySelector('#button');
let msg = document.querySelector('#message');
let body = document.querySelector('body');
let img = document.querySelector('#im');

button.addEventListener('click', ()=>{
  msg.classList.toggle('reveal');
  body.classList.toggle('back');
  im.classList.toggle('imreveal');
})

