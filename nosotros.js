/*CARROUSEL*/

const carrusel=document.querySelector(".carrusel--items")
let intervalo=null;
let maxScrollLeft=carrusel.scrollWidth-carrusel.clientWidth;
let step=1;
const  comienzo =()=>{
    intervalo=setInterval(function(){
        carrusel.scrollLeft=carrusel.scrollLeft+step;
        if(carrusel.scrollLeft===maxScrollLeft){
            step=step*-1;
        }else if(carrusel.scrollLeft===0){
            step=step*-1;
        }
    },10);
}

let stop =()=>{
    clearInterval(intervalo);
}

carrusel.addEventListener("mouseover",()=>{
    stop();
})

carrusel.addEventListener("mouseout",()=>{
    comienzo();
})


comienzo();