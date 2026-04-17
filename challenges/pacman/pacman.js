let pacmanContent=document.getElementById("pacman_container");
let pacmanHorizontalMove=0;
let pacmanVerticalMove=0;

document.body.addEventListener("keydown",(keyDownEventObject)=>{
    if(keyDownEventObject.key=="ArrowRight"){
       pacmanContent.style.transform=`translate(${++pacmanHorizontalMove}vw,${pacmanVerticalMove}vh)` 
       if(pacmanHorizontalMove == 50){
          pacmanHorizontalMove=-57;  
       } 
    }
})
document.body.addEventListener("keydown",(keyDownEventObject)=>{
    if(keyDownEventObject.key=="ArrowLeft"){
       pacmanContent.style.transform=`translate(${--pacmanHorizontalMove}vw,${pacmanVerticalMove}vh)scaleX(-1)` 
       if(pacmanHorizontalMove ==-57){
          pacmanHorizontalMove=50;  
       } 
    }
})
document.body.addEventListener("keydown",(keyDownEventObject)=>{
    if(keyDownEventObject.key=="ArrowUp"){
       pacmanContent.style.transform=`translate(${pacmanHorizontalMove}vw,${--pacmanVerticalMove}vh)rotate(-90deg)` 
       if(pacmanVerticalMove ==-54){
          pacmanVerticalMove=60;  
       }  
    }
})
document.body.addEventListener("keydown",(keyDownEventObject)=>{
    if(keyDownEventObject.key=="ArrowDown"){
       pacmanContent.style.transform=`translate(${pacmanHorizontalMove}vw,${++pacmanVerticalMove}vh)rotate(90deg)` 
       if(pacmanVerticalMove ==60){
          pacmanVerticalMove=-54;  
       } 
    }
})