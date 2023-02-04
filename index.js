let botonMostrarMenuPizza=document.getElementById('boton-menu-pizza');
let contenedorDiferentesMenus=document.getElementById('main-contenedor-diferentes-menus');
botonMostrarMenuPizza.onclick=()=>{
    contenedorDiferentesMenus.innerHTML="";
    menuPartyPizza=document.createElement('div');
    menuPartyPizza.className="menu-party-pizza";
    contenedorDiferentesMenus.append(menuPartyPizza);
}