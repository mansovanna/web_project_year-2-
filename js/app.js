const buttonMenu = document.getElementById("btn-menu");
const menuOn = document.getElementById("menu_on");
const menuOff = document.getElementById("menu_off");
const appBarMenu = document.getElementById("appbar_menu");

buttonMenu.addEventListener("click", ()=>{
    menuOn.classList.toggle("active");
    menuOff.classList.toggle("active");
    appBarMenu.classList.toggle("active");
})