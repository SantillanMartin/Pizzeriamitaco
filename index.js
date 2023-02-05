let botonMostrarMenuPizza=document.getElementById('boton-menu-pizza');
let contenedorDiferentesMenus=document.getElementById('main-contenedor-diferentes-menus');
botonMostrarMenuPizza.onclick=()=>{
    
    let mostrarDisplay=document.getElementById("mostrar-display-block");
    mostrarDisplay.style.display="flex";
    mostrarDisplay.style.flexDirection="column";
    /*mostrarMenuPizzaParty();*/
    window.scroll(0,2500);
}



function mostrarMenuPizzaParty(){
    contenedorDiferentesMenus.innerHTML="";
    menuPartyPizza=document.createElement('div');
    menuPartyPizza.innerHTML="<section><h3>Como en casa</h3><h3>Pizzá Mi Taco</h3><h3>Premiun</h3></section>";
    menuPartyPizza.className="menu-party-pizza";
    contenedorDiferentesMenus.append(menuPartyPizza);
    window.scroll(0,5000);
}