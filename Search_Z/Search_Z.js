// Function searching all the occucence of an given character in a string



function searchZ(phrase) {
  let character = "z";
  //changing all character of strings to lower case
  let phraseInLowerCases = phrase.toLowerCase();

  // checking if string doesn't contains searched character
  if (!phraseInLowerCases.includes(character)) {
    console.log(`aucun ${character} à l'horizon`);
  } else {
    // creating an array with the string's character (with spread syntax) to itearte over it in search of all accurence of character and give total number of occurence
    var count = [...phraseInLowerCases].filter((x) => x === character).length;
    console.log(`il y a ${count} ${character}`);
  }
}


