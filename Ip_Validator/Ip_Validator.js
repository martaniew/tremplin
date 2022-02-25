//Function which check if IP number is valid

function ipValidator(ip) {
 // dividing string afetr every dot and creating an array with series of numbers as elements     
  let ipArray = ip.split(".");
 // checking if array consist of exact 4 elements and every element is an number betwen 0 end 255 
  if (
    ipArray.length === 4 &&
    ipArray.every((elem) => elem <= 255 && elem >= 0)
  ) {
    console.log("valid");
  } else {
    console.log("not valid");
  }
}
