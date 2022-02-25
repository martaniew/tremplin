// Function displaying three consecutive words in loop

function bigram(phrase) {
  // dividing string afetr every space and creating an array with the singles words as elements
  let wordsArray = phrase.split(" ");

  // as long as there are min. 2 elements od the array display three consecutive elements incrementing starting element by one with every iteration
  for (
    let i = 0 /* initialisation */;
    i < wordsArray.length - 2 /* condition */;
    i++ /* incrémentation */
  ) {
    console.log(`${wordsArray[i]} ${wordsArray[i + 1]} ${wordsArray[i + 2]}`);
  }
}
