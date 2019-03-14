// Referanser til html-elementer
const mittCanvas = document.querySelector("#mittCanvas");
const ctx =  mittCanvas.getContext("2d");

ctx.fillRect(10,10,29,25);

// Globale variabler
let levende = true;

// Setup, altså oppstart
gameloop();

// Hendelsesfunksjoner
window.onkeydown = flyttFigur;
// Funksjonsdefinisjoner
function gameloop(){
    tegnBakgrunn();
    tegnFigur();
    flyttHinder();
    tegnHinder();
    sjekkKollisjon();
    if(levende){
        requestAnimationFrame(gameloop);
    }
}

function tegnBakgrunn(){
    console.log("Tegn bakgrunn");
}
function tegnFigur(){
    console.log("Tegn Figur");
}
function flyttHinder(){
    console.log("Flytt Hinder");
}
function tegnHinder(){
    console.log("Tegn Hinder");
}
function sjekkKollisjon(){
    console.log("Sjekk Kollisjon");
}
function flyttFigur(){
    console.log("Flytt Figur");
}

