"use strict";

document.querySelector(".rouge").addEventListener("click", function () {
  document.querySelector("#droit").style.fill = "red";
});
document.querySelector(".bleu").addEventListener("click", function () {
  document.querySelector("#droit").style.fill = "blue";
});

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var classeZone = ev.target.className; //faudrait récupérer la classe de la zone.

  console.log(ev.target.className); //data contient l'id de ce qui a été drag.

  var data = ev.dataTransfer.getData("text"); //ev.target.appendChild(document.getElementById(data));
  //On va regarder c'est quelle zone.

  switch (classeZone) {
    case "clickBox gauche":
      console.log("YAY");
      VerifyColor('#gauche', data);
      break;

    case "clickBox droite":
      console.log("droite");
      VerifyColor("#droit", data);

    default:
      "oh no";
  }
}

function VerifyColor(classeZone, data) {
  switch (data) {
    case 'rouge':
      document.querySelector(classeZone).style.fill = "red";
      console.log("à droite");
      break;

    case 'bleu':
      document.querySelector(classeZone).style.fill = "blue";
      break;

    default:
      break;
  }
}