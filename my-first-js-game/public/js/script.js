/*[EXERCICE : CARRE-1]

Objectif : Déplacer un carré sur la page.

Placer un carré de 100px centré (H & V).
Afficher une barre de commande au bas de la page avec des boutons.
Chaque bouton doit permettre de déplacer le carré à gauche, en haut, à droite et vers le bas.
Ajouter ensuite, la possibilité de déplacer le carré avec les touches du clavier. */

//Déclaration de variables
var square = document.querySelector(".square");
var up = document.querySelector(".up");
var left = document.querySelector(".left");
var right = document.querySelector(".right");
var down = document.querySelector(".down");
var newPositionTop = 0;
var newPositionLeft = 0;
//offsetHeight = offsetWidth dans mon cas 
var filedLimit = document.querySelector(".field").offsetHeight
var squareSize = square.offsetHeight;
var control = document.querySelector(".control");
var btnColor = document.querySelector(".btnColor");



//Déclarations de fonctions
//Savoir où se trouve square
// var positionNote = document.getElementById("position");
// console.log(positionNote);
// positionNote.innerHTML = "offset Left: " + square.offsetLeft + "<br><br>offset Top: " + square.offsetTop;

//DOIT ON limiter l'espace de movements?
//Une autre solution, mais déprécié ?
//var rect = square.getBoundingClientRect();


//Modifier offsetTop en ajoutant px
//CA NE MARCHE PAS, comment accéder à offsetTop et y modifier ?
function upMove() {
    if (square.offsetTop > squareSize) {
        newPositionTop -= 100;
        square.style.marginTop = newPositionTop + "px";
    } else {
        alert("Ouch!");
    }
};

function downMove() {
    if (square.offsetTop < filedLimit - squareSize) {
        newPositionTop += 100;
        square.style.marginTop = newPositionTop + "px";
    } else {
        alert("Oops!");
    }
};

function leftMove() {
    if (square.offsetLeft > squareSize) {
        newPositionLeft -= 100;
        square.style.marginLeft = newPositionLeft + "px";
    } else {
        alert("Oh no!");
    }
};

function rightMove() {
    if (square.offsetLeft < filedLimit - squareSize) {
        newPositionLeft += 100;
        square.style.marginLeft = newPositionLeft + "px";
    } else {
        alert("OMG!");
    }
};

//Peut on regrouper ces fonctions ???

//Ajout d'addListener


up.addEventListener('click', function () {
    upMove();
});

down.addEventListener('click', function () {
    downMove();
});

left.addEventListener('click', function () {
    leftMove();
});

right.addEventListener('click', function () {
    rightMove();
});

//Keyevent ArrowLeft, ArrowRight, ArrowUp, ArrowDown
window.addEventListener("keyup", function (e) {
    console.log(e.code);
    switch (e.code) {
        case 'ArrowLeft':
            leftMove();
            break;
        case 'ArrowRight':
            rightMove();
            break;
        case 'ArrowUp':
            upMove();
            break;
        case 'ArrowDown':
            downMove();
            break;
    }
});

//changer la couleur du carée
btnColor.addEventListener('input', function () {
    square.style.backgroundColor = btnColor.value;
});

//changer de vitesse