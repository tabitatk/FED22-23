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

function toeteren() {
    vrachtwagenGeluid.play();
}



menu.addEventListener("click", toonMenu);
hamburgerDicht.addEventListener("click", verstopHamburger);


//student assistent laurens heeft hiermee geholpen
//als de href (url) "index" bevat, vrachtwagentje zoeken. Anders niet
//zorgt ervoor dat deze code alleen op index.html wordt uitgevoerd, anders gaat hij overal naar een vrachtwagen zoeken die niet bestaat, dan breekt alles

if (window.location.href.includes("index")) {
    var vrachtwagen = document.querySelector("main section:nth-of-type(1) p span");
    var vrachtwagenGeluid = document.querySelector(" main section:nth-of-type(1) audio");
    vrachtwagen.addEventListener("click", toeteren);
}