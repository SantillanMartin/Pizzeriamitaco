let botonMostrarMenuPizza=document.getElementById('boton-menu-pizza');
let contenedorDiferentesMenus=document.getElementById('main-contenedor-diferentes-menus');
let botonMostrarMenuPernil=document.getElementById('boton-menu-pernil');
let botonMostrarMenuPasta=document.getElementById("boton-menu-pasta");
let botonMostrarMenuPuerta=document.getElementById("boton-menu-puerta");
let mostrarDisplay=document.getElementById("mostrar-display-pizza-block");
let mostrarDisplayPernil=document.getElementById("mostrar-display-pernil-flex");
let mostrarDisplayPasta=document.getElementById("mostrar-display-pasta-flex")
let mostrarDisplayPuerta=document.getElementById("mostrar-display-puerta-flex");

/*BOTONES*/

botonMostrarMenuPizza.onclick=()=>{
    
    
    mostrarDisplay.style.display="flex";
    mostrarDisplay.style.flexDirection="column";
    mostrarDisplayPuerta.style.display="none";
    mostrarDisplayPernil.style.display="none";
    mostrarDisplayPasta.style.display="none";
    window.scroll(0,2700);
    scrollearWidth();
    
}

botonMostrarMenuPernil.onclick=()=>{
    mostrarDisplayPasta.style.display="none";
    mostrarDisplay.style.display="none";
    mostrarDisplayPuerta.style.display="none";
    mostrarDisplayPernil.style.display="flex";
    mostrarDisplayPernil.style.flexDirection="column";
    window.scroll(0,2700);
    scrollearWidth();
    
}

botonMostrarMenuPasta.onclick=()=>{
    mostrarDisplay.style.display="none";
    mostrarDisplayPernil.style.display="none";
    mostrarDisplayPuerta.style.display="none";
    mostrarDisplayPasta.style.display="flex";
    mostrarDisplayPasta.style.flexDirection="column";
    window.scroll(0,2700)
    scrollearWidth();
}

botonMostrarMenuPuerta.onclick=()=>{
    mostrarDisplay.style.display="none";
    mostrarDisplayPernil.style.display="none";
    mostrarDisplayPasta.style.display="none";
    mostrarDisplayPuerta.style.display="flex";
    window.scroll(0,2700)
    scrollearWidth();
}



function scrollearWidth(){
    if (window.matchMedia("(max-width: 767px)").matches) {
        window.scroll(0,4500);
      }
}



function mostrarMenuPizzaParty(){
    contenedorDiferentesMenus.innerHTML="";
    menuPartyPizza=document.createElement('div');
    menuPartyPizza.innerHTML="<section><h3>Como en casa</h3><h3>Pizzá Mi Taco</h3><h3>Premiun</h3></section>";
    menuPartyPizza.className="menu-party-pizza";
    contenedorDiferentesMenus.append(menuPartyPizza);
    window.scroll(0,5000);
}