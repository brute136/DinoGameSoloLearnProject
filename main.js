let dino = document.getElementById('player');
let obsticle = document.getElementById('obsticle');
let yext = document.getElementById('text');
let gameKey = true;
let gameOver = new Audio('gameover.mp3');
let onJump = new Audio('music.mp3');
window.addEventListener('click',(e)=>{
  //console.log(1);//  dino.style.top = ""
  onJump.play();
   if (gameKey){
     GkNam = true;
     obsticle.classList.add('obanim');
      gameKey = false;
      href();
    }else{
      dino.classList.add('nim');
      setTimeout(()=>{ dino.classList.remove('nim');
},1001);
}
  });
let GkNam = false;
const lone = () => {
   let ii = window.getComputedStyle(dino,null).getPropertyValue('left');
   let ivb = window.getComputedStyle(obsticle,null).getPropertyValue('left');
   if (parseInt(ii) ==0 && parseInt(ivb) < 70 && parseInt(ivb) > 40){
     obsticle.classList.remove('obanim');
     clearInterval(i);
     gameKey = true;
     yext.innerHTML = 0;
     GkNam = false;
     onJump.pause();
     gameOver.play();
     setTimeout(()=>{
       gameOver.pause();
     },1000);
   }else{
     yext.innerHTML = parseInt(yext.innerHTML) + 1.0;
     }
   }
let i = null;
function href(){
  i = setInterval(lone, 100);
}