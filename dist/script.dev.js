"use strict";

//On va aller voir si on a bien que des chiffres
//On va mettre tous les champs "type=text" dans un string appelé "allUserInput"
var allUserInput = document.querySelectorAll("[type='text']");
var wordNum = 1;
var wordLength = 4;
var allowedVowels = 1;
var allowedConsonants = 1;
var vowelsInRow = 0;
var consonantsInRow = 0;
var isVowel = false;
var scrollY = 0;
var vowels = new Array(97, 101, 105, 111, 117, 121); //a, e, i, o, u, y

document.querySelector("form").addEventListener("submit", function (event) {
  document.body.scrollTop = 550; // For Safari

  document.documentElement.scrollTop = 550;
  event.preventDefault();
  document.querySelector("#wordDisplay").innerText = "";

  if (document.querySelector("[name=nbLetters]").value && document.querySelector("[name=nbVoyelles]").value && document.querySelector("[name=nbConsonnes]").value != 0) {
    wordNum = parseInt(document.querySelector("[name='nbMots']").value, 10);

    for (var i = 0; i < wordNum; i++) {
      wordGenerate();
      if (i != wordNum - 1) document.querySelector("#wordDisplay").innerText += ", ";
    }

    document.querySelector(".prevent.allChamps").classList.remove("visible");
  } else {
    console.log("Veuillez remplir tous les gens");
    document.querySelector(".prevent.allChamps").classList.add("visible");
  }
});

window.onscroll = function (event) {
  console.log(window.pageYOffset);
  console.log(document.documentElement.scrollTop);
}; //On parcourt ce string


for (var i = 0; i < allUserInput.length; i++) {
  //Dès qu'il y a un input quelque part
  //On exécute la fonction de vérification en lui donnant c'est où que ça a été cliqué
  allUserInput[i].addEventListener("keyup", function () {
    VerficationChiffre(this);
  });
}

function VerficationChiffre(userInputPlace) {
  userInput = userInputPlace.value; //ce que la personne a tapé

  console.log(userInputPlace.name); //Vérification du caractère Unicode de l'user
  //48 à 57 pour les chiffres.

  if (userInput.charCodeAt() < 48 || userInput.charCodeAt() > 57) {
    console.log("Pas chiffre");
    document.querySelector(".prevent." + userInputPlace.name).classList.add("visible");
    console.log(".prevent." + userInputPlace.name);
  } else {
    document.querySelector(".prevent." + userInputPlace.name).classList.remove("visible");
  }
}

function getLetter() {
  var c;

  do {
    c = 97;
    var offset = Math.round(Math.random() * 25);
    c += offset;
  } while (!isVowel && vowels.includes(c) || isVowel && !vowels.includes(c));

  return String.fromCharCode(c);
}

function phono_balance() {
  var before = isVowel;
  var random_holder = Math.random() > 0.5;
  var c = "";

  if (isVowel) {
    if (vowelsInRow >= allowedVowels) {
      isVowel = !isVowel;
      vowelsInRow = 0;
    } else isVowel = isVowel && random_holder;
  } else {
    if (consonantsInRow >= allowedConsonants) {
      isVowel = !isVowel;
      consonantsInRow = 0;
    } else isVowel = isVowel || random_holder;
  }

  if (before != isVowel) {
    vowelsInRow = 0;
    consonantsInRow = 0;
  }

  c = getLetter();
  if (isVowel) vowelsInRow++;else consonantsInRow++;
  return c;
}

function wordGenerate() {
  nbWords = parseInt(document.querySelector("[name='nbMots']").value, 10);
  wordLength = parseInt(document.querySelector("[name='nbLetters']").value, 10);
  allowedVowels = parseInt(document.querySelector("[name='nbVoyelles']").value, 10);
  allowedConsonants = parseInt(document.querySelector("[name='nbConsonnes']").value, 10);
  var word = "";
  var letter = 'a';
  isVowel = Math.random() < 0.5;

  for (var i = 0; i < wordLength; i++) {
    letter = phono_balance();
    word += letter;
  }

  document.querySelector("#wordDisplay").innerText += word;
  /*switch(nbWords){
      case 1:document.querySelector("#wordDisplay").style.fontSize="150px";break;
      case 2:document.querySelector("#wordDisplay").style.fontSize="105px";break;
      case 3:document.querySelector("#wordDisplay").style.fontSize="80px";break;
      case 4:document.querySelector("#wordDisplay").style.fontSize="62px";break;
      case 5:document.querySelector("#wordDisplay").style.fontSize="45px";break;
      case 6:document.querySelector("#wordDisplay").style.fontSize="41px";break;
      case 7:document.querySelector("#wordDisplay").style.fontSize="34px";break;
      case 8:document.querySelector("#wordDisplay").style.fontSize="32px";break;
      case 9:document.querySelector("#wordDisplay").style.fontSize="26px";break;
      default:document.querySelector("#wordDisplay").style.fontSize="26px";break;
  }*/
}