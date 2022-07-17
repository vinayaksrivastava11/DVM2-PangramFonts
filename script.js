let rightArrow = document.querySelector(".rarrow");
let leftArrow = document.querySelector(".larrow");


let arr = document.querySelectorAll(".slide");


let dropf=document.querySelector(".down1");
let drops=document.querySelector(".down2");
let l1=document.querySelector(".l1");
let l2=document.querySelector(".l2");
let l3=document.querySelector(".l3");

let now = 0;
let a=document.querySelectorAll(".an");


function drop() {
    let checkBox = document.getElementById("click");
    
    if (checkBox.checked == true){
     
      dropf.style.height ="69vh";
      drops.style.height ="85vh";
      l1.style.backgroundColor="black";
      l2.style.backgroundColor="black";
      l3.style.backgroundColor="black";
    } else {
        
        dropf.style.height ="0vh";
        drops.style.height ="0vh";
        l1.style.backgroundColor="white";
        l2.style.backgroundColor="white";
        l3.style.backgroundColor="white";
    }
  }
 


sort(arr[now], arr[now - 1], arr[now - 2], arr[now + 1], arr[now + 2]);


rightArrow.addEventListener("click", () => {
    animate("right");
    lineup();
    

    
});


leftArrow.addEventListener("click", () => {
    animate("left");
    lineup();
    
    
});


function animate(direction) {
   
      
        if(direction === "right") {
         
        if(now < 4){
        toLeft(arr[now]);
        comeRight(arr[now + 1]);
        setTimeout(() => {
          
            now++;
            sort(arr[now], arr[now - 1], arr[now - 2], arr[now + 1], arr[now + 2]);
        }, 500)
        }else{
            
            toLeft(arr[now]);
            comeRight(arr[0]);
            setTimeout(() => {
            
                now = 0;
                sort(arr[now], arr[now - 1], arr[now - 2], arr[now + 1], arr[now + 2]);
            }, 500)
        }
            
        }else if(direction === "left"){
            if(now > 0){
                toRight(arr[now]);
                comeLeft(arr[now - 1]);
                setTimeout(() => {
               
                now--;
                sort(arr[now], arr[now - 1], arr[now - 2], arr[now + 1], arr[now + 2]);
                }, 500)
            }else{
               
                toRight(arr[now]);
                comeLeft(arr[4]);
                setTimeout(() => {
                    
                    now = 4;
                    sort(arr[now], arr[now - 1], arr[now - 2], arr[now + 1], arr[now + 2]);
                    }, 500)
            }
           
        }
    }







function toLeft(screen) {
    screen.style.animation = "toLeft 0.5s ease-in-out forwards";
    
    setTimeout(() => {
        screen.style.animation = "";
    }, 500);
}

function toRight(screen) {
    screen.style.animation = "toRight 0.5s ease-in-out forwards";
    
    setTimeout(() => {
        screen.style.animation = "";
    }, 500);
}

function comeRight(screen) {
    screen.style.animation = "comeRight 0.5s ease-in-out forwards";
    
    setTimeout(() => {
        screen.style.animation = "";
    }, 500);
}

function comeLeft(screen) {
    screen.style.animation = "comeLeft 0.5s ease-in-out forwards";
    
    setTimeout(() => {
        screen.style.animation = "";
    }, 500);
}




function sort(mainScreen, leftScreen1 , leftScreen2, rightScreen1 , rightScreen2) {

    if(rightScreen1 === undefined){
        rightScreen1 = arr[0];
    }
   if(rightScreen1 === undefined){
        rightScreen1 = arr[1];
    }
 
    if(leftScreen1 === undefined){
        leftScreen1 = arr[4];
    }
  
   if(leftScreen1 === undefined){
        leftScreen1 = arr[3];
    }
    arr.forEach(screen => {
        if(screen === mainScreen){
            screen.style.display = "block";
            screen.style.left = "0px";
        }else if (screen === leftScreen1){
            screen.style.display = "block";
            screen.style.left = "-100%";
          }else if (screen === leftScreen2){
            screen.style.display = "block";
            screen.style.left = "-200%";
        }else if (screen === rightScreen1){
            screen.style.display = "block";
            screen.style.left = "100%";
          }else if (screen === rightScreen2){
            screen.style.display = "block";
            screen.style.left = "200%";
        }else{
            screen.style.display = "none";
        }
    })
}


function lineup(){

    for(let i=0 ;i<a.length;i++)
    {a[i].style.animation="2s anim-lineUp ease-out infinite";

    setTimeout(() => {
        a[i].style.animation = "";
    }, 1000);
   
   
    
    
}

}


window.onload= function() {
    for(let i=0 ;i<4;i++)
    {a[i].style.animation="2s anim-lineUp ease-out ";
    
}
};

function web(){
    window.location.href = 'https://pangrampangram.com/';
}
