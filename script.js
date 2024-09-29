const imgae = document.querySelector(".background");
const num = document.querySelector(".load");
const load = document.querySelector(".load-bar");
const sbg = document.querySelector(".sub-load-bar");

let l = 0;
let int = setInterval(loading,30);
 
function loading(){
    l++;
    if(l>99){
        clearInterval(int);
    }
    num.innerText = `${l}%`;
    num.style.opacity = scale(l,0,100,1,0);
    sbg.style.width = `${l}%`;
    sbg.style.opacity = scale(l,0,100,1,0);
    load.style.opacity = scale(l,0,100,1,0);
    imgae.style.filter = `blur(${scale(l,0,100,30,0)}px)`;
    
    
   
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}