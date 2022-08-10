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
 var score=parseInt(window.location.search.split("=")[1]);
 let checkAlive = setInterval(function(){  
   let jerryTop = parseInt(window.getComputedStyle(jerry).getPropertyValue("top"));  
   let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
   let cheeseLeft = parseInt(window.getComputedStyle(cheese).getPropertyValue("left"));  
   
  console.log(jerryTop)


   //check for collision  
   if(cactusLeft>-140 && cactusLeft<140 && jerryTop>=180){  
     jerry.style.animationPlayState = 'paused';  
     cactus.style.animationPlayState = 'paused'; 
     cheese.style.animationPlayState='paused';  
    //  alert("Whoops! Game Over :(");  
    window.location.href = "game_frontpage/gameover.html?score="+score; 
   }
   
   else{ 
    score+=1;

    displayscore.innerText=score;
    if(score==300){
      window.location.href = "game_frontpage/win.html?score="+score; 
    }
  
  }   
  
 },90); 

 document.addEventListener("keydown", function(event){  
  
   jump(); 
  
 })  