// JavaScript Document
console.log("hi");



var menu = document.querySelector("header section:nth-of-type(1) button");
var hamburgerDicht = document.querySelector("header section:nth-of-type(2) button");
var menuItems = document.querySelector("header section:nth-of-type(2)");




function toonMenu() {
    menuItems.classList.add("hamburgermenu");
}

function verstopHamburger() {
    menuItems.classList.remove("hamburgermenu");
}





menu.addEventListener("click", toonMenu);

hamburgerDicht.addEventListener("click", verstopHamburger);