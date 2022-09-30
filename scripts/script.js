// JavaScript Document
console.log("hi");



var menu = document.querySelector("header section:nth-of-type(1) button");
var hamburgerDicht = document.querySelector("header section:nth-of-type(2) button");
var menuItems = document.querySelector("header section:nth-of-type(2)");
// var vrachtwagen = document.querySelector(" main section:nth-of-type(1) audio");



function toonMenu() {
    menuItems.classList.add("hamburgermenu");
}

function verstopHamburger() {
    menuItems.classList.remove("hamburgermenu");
}

// function toeteren() {
//     var vrachtwagenGeluid = document.querySelector("audio");
//     vrachtwagenGeluid.play();

// }



menu.addEventListener("click", toonMenu);
// vrachtwagen.addEventListener("click", toeteren);
hamburgerDicht.addEventListener("click", verstopHamburger);