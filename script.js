var list = document.querySelector('.list-icon');
var mobile = document.querySelector('.mobile-nav');
list.addEventListener('click',()=>{
     mobile.classList.add('show'); 
});
var cancel = document.querySelector('.cancel');
cancel.addEventListener('click',()=>{
     mobile.classList.remove('show');
});

window.addEventListener('scroll',()=>{
     var nav = document.querySelector('.nav');
     if(window.scrollY > 100 ){
          nav.classList.add('scrolled');
     }else{
          nav.classList.remove('scrolled');
     }
})

function toggleContent(card1){
     var front = document.querySelector('.front');
     var back = document.querySelector('.back');

     if(front.style.opacity === "0"){
          front.style.opacity = "1";
          back.style.opacity ="0";
     }else{
          front.style.opacity="0"
          back.style.opacity="1"
     }
}


function toggleContent2(card2){
     var front2 = document.querySelector('.front2');
     var back2 = document.querySelector('.back2');

     if(front2.style.opacity === "0"){
          front2.style.opacity = "1"
          back2.style.opacity ="0";
     }else{
          front2.style.opacity="0"
          back2.style.opacity="1"
     }
}