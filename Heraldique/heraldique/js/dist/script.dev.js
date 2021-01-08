"use strict";

var coupe = "none";
var allCoupes = ''; //Tableau qui va contenir toutes les coupes.

function formes(c1, c2) {
  allCoupes = {
    "none": '<svg xmlns="http://www.w3.org/2000/svg" width="500px" height="500px" viewBox="0 0 393.46 535.54"><g id="none"><rect id="_1" data-name="1" x="2.5" y="2.5" width="388.46" height="530.54" fill="' + c1 + '" stroke="#161616" stroke-miterlimit="10" stroke-width="5"/></g></svg>',
    "parti": '<svg xmlns="http://www.w3.org/2000/svg" width="500px" height="500px" viewBox="0 0 393.46 535.54"><g id="parti"><rect id="_2" data-name="2" x="2.5" y="2.5" width="388.46" height="530.54" fill="' + c1 + '" stroke="#161616" stroke-miterlimit="10" stroke-width="5"/><rect id="_1" data-name="1" x="2.5" y="268.67" width="388.46" height="265.27" fill="' + c2 + '" stroke="#161616" stroke-miterlimit="10" stroke-width="5"/></g></svg>',
    "coupe": '<svg id="coupe" xmlns="http://www.w3.org/2000/svg" width="500px" height="500px" viewBox="0 0 393.46 535.54"><rect id="_2" data-name="2" x="2.5" y="2.5" width="388.46" height="530.54" fill="' + c1 + '" stroke="#161616" stroke-miterlimit="10" stroke-width="5"/><rect id="_1" data-name="1" x="196.46" y="2.37" width="194.5" height="531.57" fill="' + c2 + '" stroke="#161616" stroke-miterlimit="10" stroke-width="5"/></svg>'
  };
}

document.querySelector(".coupe1").addEventListener("click", function () {
  coupe = "none"; //On modifie la value.

  formes(document.getElementById('Fcolor1').value);
  document.getElementById('forme').value = allCoupes["none"];
  VerifyCoupe();
});
document.querySelector(".coupe2").addEventListener("click", function () {
  coupe = "parti";
  document.getElementById('forme').value = allCoupes["parti"];
  VerifyCoupe();
});
document.querySelector(".coupe3").addEventListener("click", function () {
  coupe = "coupe";
  document.getElementById('forme').value = allCoupes["coupe"];
  VerifyCoupe();
}); //Fonction qui va vérifier la coupe de mon bouclier.

function VerifyCoupe() {
  switch (coupe) {
    case 'none':
      console.log("On change vers none.");
      console.log(document.getElementById('svgBouclier')); //On va supprimer le svg existant
      //document.getElementById('svgBouclier').remove();

      var newDiv = document.createElement("svg"); //création du svg

      /*
      newDiv.id="ooj";
      newDiv.xmlns="http://www.w3.org/2000/svg";
      newDiv.width="100px";
      newDiv.height="100px";*/
      //path

      /*
      var paths=document.createElement("path");
      var newContent = document.createTextNode('Hi there and greetings!');
      newDiv.appendChild(paths);
      var currentDiv = document.querySelector('.bouclier');
      currentDiv.appendChild(newDiv);*/

      break;

    case 'parti':
      break;

    case 'coupe':
      break;

    default:
      break;
  }
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var classeZone = ev.target.id; //On va aller chercher l'ID de la zone drop

  var data = ev.dataTransfer.getData("text"); //data contient l'id de ce qui a été drag.
  //On va regarder c'est quelle zone.

  switch (classeZone) {
    case "color1":
      //On va modifier la couleur dans le form
      document.getElementById('Fcolor1').value = data; //Modifier la couleur

      VerifyColor("#color1", data);
      break;

    case "color2":
      //Modifier la couleur dans le form
      document.getElementById('Fcolor2').value = data;
      VerifyColor("#color2", data);
      break;

    default:
      "oh no";
  }
} //classeZone c'est là où il y les zones à colorer
//data c'est la couleur sélectionnée.


function VerifyColor(classeZone, data) {
  document.querySelector(classeZone).style.fill = data;
  formes(document.getElementById('Fcolor1').value, document.getElementById('Fcolor2').value);
}