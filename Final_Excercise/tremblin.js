"use strict";

//********   Functions responsible for actions behind every form    ******************************

// Function displaying three consecutives words in loop
function bigram(phrase) {
  // dividing string afetr every space and creating an array with a single word as element
  let wordsArray = phrase.split(" ");
  let newPhrase = "";
  if (wordsArray.length < 3) {
    return "please enter at least three words"
  }
  // as long as there are min. 2 elements in the array display three consecutive elements incrementing position of starting element by one with every iteration
  for (
    let i = 0 /* initialisation */;
    i < wordsArray.length - 2 /* condition */;
    i++ /* incrémentation */
  ) {
    newPhrase += `${wordsArray[i]} ${wordsArray[i + 1]} ${wordsArray[i + 2]} `;
  }
  return newPhrase;
}

//Function checking if IP number is valid
function ipValidator(ip) {
  // dividing string afetr every dot and creating an array with series of numbers as elements
  let ipArray = ip.split(".");
  // checking if array consist of exact 4 elements and every element is an number betwen 0 end 255
  if (
    ipArray.length === 4 &&
    ipArray.every((elem) => elem <= 255 && elem >= 0)
  ) {
    return "valid";
  } else {
    return "not valid";
  }
}

// Function searching all the occucence of an given character in a string
function searchZ(phrase) {
  let character = "z";
  //changing all character of strings to lower case
  let phraseInLowerCases = phrase.toLowerCase();

  // checking if string doesn't contains searched character
  if (!phraseInLowerCases.includes(character)) {
    return `aucun ${character} à l'horizon`;
  } else {
    // creating an array with the string's character (with spread syntax) to itearte over it in search of all accurence of character and give total number of occurence
    var count = [...phraseInLowerCases].filter((x) => x === character).length;
    return `il y a ${count} ${character}`;
  }
}

//********   Event handler     ******************************

function onClickHandler(e) {
  //prevent sending form
  e.preventDefault();
  
  // defining variables 
  let paragraphe = "";
  let phrase = "";
  let textToDisplay = "";

  //get id of clicked button
  let id = this.id;

  // evaluate id to perform dedicated action and return text to diplay 
  switch (id) {
    case "zSearchButton":
      phrase = document.querySelector("#zSearchInput").value;
      textToDisplay = searchZ(phrase);
      break;
    case "ipValidatorButton":
      phrase = document.querySelector("#ipValidatorInput").value;
      textToDisplay = ipValidator(phrase);
      break;
    case "bigramButton":
      phrase = document.querySelector("#bigramInput").value;
      textToDisplay = bigram(phrase);
      break;
    default:
      console.log("click on one of the button");
  }

  // get parent element (form) of clicked button
  let contaneir = this.parentNode;

  //create paragraphe <p> 
  paragraphe = document.createElement("p");

  //remove existing paragraphe in case of retaping phrase 
  contaneir.removeChild(contaneir.lastChild);

  //add text tranformed with the add of the functions to paragraphe 
  paragraphe.textContent = textToDisplay;

  // attach paragpare as a last child of form container 
  contaneir.appendChild(paragraphe);
}

//********   Elements of the DOM   ******************************

let button = document.querySelectorAll("button");
let input = document.querySelectorAll("input");

// ******************* Events listeners ******************************

button.forEach((item) => {
  item.addEventListener("click", onClickHandler);
});
