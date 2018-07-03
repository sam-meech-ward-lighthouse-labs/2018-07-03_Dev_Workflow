// Write a node program that takes in an unlimited number 
// of command line arguments, goes through each and 
// prints out the sum of them.

///

// Get the user arguments
// console.log(typeof process.argv[3])


// Accepts an array of strings
// Returns the sum of all the numbers in that array
// Does not add infinity
function sumArray(strings) {
  // Initialize a new total variable
  var total = 0;

  // go through each argument
  for (var i = 0; i < strings.length; i++) {
    var str = strings[i];
    var num = Number(str);
    // Make sure it's a number
    if (num && num !== Infinity && num !== -Infinity) {
      // add each argument to the total 
      total += num;
    }
  }

  return total;
}

// console log the total
// console.log(sumArray(['5', '6', '7']) === 18);
// console.log(sumArray(['15', '16', '17']) === 48);
// console.log(sumArray(['1', '2', 'kittens']) === 3);
// console.log(sumArray(['apple', '10', '3', 'kittens']) === 13);
// console.log(sumArray(['apple', '10', '-3', 'kittens']) === 7);
// console.log(sumArray(['apple', '-10', '-3', 'kittens']) === -13);
// console.log(sumArray(['5', '6', Infinity]) === 11);
// console.log(sumArray(['5', '6', -Infinity]) === 11);

console.log(sumArray(process.argv));