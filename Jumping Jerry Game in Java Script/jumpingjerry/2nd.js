const jerry = document.getElementById("jerry");  
const cactus = document.getElementById("cactus")  
const displayscore=document.getElementById("displayScore")

 function jump(){  
   if(dispatchEvent.classList!="jump") 
   {  
     jerry.classList.add("jump");  
     
     setTimeout (function(){  
       jerry.classList.remove("jump"); 
     },600)  
   }  
 }  
 var score=0;
 let checkAlive = setInterval(function(){  
   let jerryTop = parseInt(window.getComputedStyle(jerry).getPropertyValue("top"));  
   let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
;  
   
  console.log(jerryTop)


   //check for collision  
   if(cactusLeft>-140 && cactusLeft<140 && jerryTop>=180){  
     jerry.style.animationPlayState = 'paused';  
     cactus.style.animationPlayState = 'paused'; 
     cheese.style.animationPlayState='paused';  
    //  alert("Whoops! Game Over :(");  
    window.location.href = "game_frontpage/gameover.html?score="+score; 
    document.getElementById("gaeoverscore").innerHTML =window.location.search;
   }
   
   else{ 
    score+=1;
    sessionStorage.setItem("score",score);
    displayscore.innerText=score;
    if(score==101){
      sessionStorage.setItem("score",score);
      window.location.href = "3rd.html?score="+score; 
    }
  
  }
  
 
  
 },90); 

 document.addEventListener("keydown", function(event){  
   jump(); 
  
 })  


