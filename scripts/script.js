// JavaScript Document
console.log("hi");



var menu = document.querySelector("header section:nth-of-type(1) button");
var hamburgerDicht = document.querySelector("header section:nth-of-type(2) button");
var menuItems = document.querySelector("header section:nth-of-type(2)");

// aangepaste variabelen voor vrachtwagen icoontje
var vrachtwagen = document.querySelector(".homepage main section:nth-of-type(1) p span");
var vrachtwagenGeluid = document.querySelector(".homepage main section:nth-of-type(1) audio");
//


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

// aangepaste addEventListener
vrachtwagen.addEventListener("click", toeteren);




//student assistent laurens heeft hiermee geholpen
//als de href (url) "index" bevat, vrachtwagentje zoeken. Anders niet
//zorgt ervoor dat deze code alleen op index.html wordt uitgevoerd, anders gaat hij overal naar een vrachtwagen zoeken die niet bestaat, dan breekt alles

// if (window.location.href.includes("index")) {
//     var vrachtwagen = document.querySelector("main section:nth-of-type(1) p span");
//     var vrachtwagenGeluid = document.querySelector(" main section:nth-of-type(1) audio");
//     vrachtwagen.addEventListener("click", toeteren);
// }

// =============================================================================================================
// =============================================================================================================
// =============================================================================================================
// =============================================================================================================
// =============================================================================================================

//studentassistent yara heeft hiermee geholpen
/*
Deze bovenste functie werkt wel, maar alleen wanneer er index.html in de URL balk staat
dit is alleen niet altijd het geval, zoals bijvoorbeeld bij het live gaan via VS Code zelf (met Go Live)
of bij Github web, namelijk als je op de link van tabitatk.github.io/FED22-23/ klikt, staat daar geen
index.html standaard bij, daarom doet het geluidje het niet als je het via deze manier wilt doen

daarom veranderd naar document.querySelector(".homepagina ..."); , 
*/