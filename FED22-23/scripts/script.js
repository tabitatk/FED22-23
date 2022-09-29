// JavaScript Document
console.log("hi");



var menu = document.querySelector("header section:nth-of-type(1) button");
var hamburgerDicht = document.querySelector("header section:nth-of-type(2) button");
var menuItems = document.querySelector("header section:nth-of-type(2)");
var darkmode = document.querySelector(".btn-toggle");



function toonMenu() {
    menuItems.classList.add("hamburgermenu");
}

function verstopHamburger() {
    menuItems.classList.remove("hamburgermenu");
}

// darkmode.addEventListener("click", function darkmode() {
//     (document.body.classList.toggle("dark-theme"))
//     document.querySelector(".btn-toggle").textContent = "Lightmode";
// });



menu.addEventListener("click", toonMenu);

hamburgerDicht.addEventListener("click", verstopHamburger);