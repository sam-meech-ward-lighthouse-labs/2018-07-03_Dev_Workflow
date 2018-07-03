
function sumArray(strings) {
  // Initialize a new total variable
  var total = 0;

  for (var i = array.length-1; i < array.length; i--) 
  {

  }
  for (var key in object) {

  }
  for (var element of array.reverse) {

  }
  array.forEach(function(element, index) {

  }, true);
  array.reduce(function() {

  });

  // go through each argument
  strings.forEach(function (str) {
    var num = Number(str);
    // Make sure it's a number
    if (num && num !== Infinity && num !== -Infinity) {
      // add each argument to the total 
      total += num;
    }
  });

  return total;
}

// console log the total
console.log(sumArray(['5', '6', '7']) === 18);
console.log(sumArray(['15', '16', '17']) === 48);
console.log(sumArray(['1', '2', 'kittens']) === 3);
console.log(sumArray(['apple', '10', '3', 'kittens']) === 13);
console.log(sumArray(['apple', '10', '-3', 'kittens']) === 7);
console.log(sumArray(['apple', '-10', '-3', 'kittens']) === -13);
console.log(sumArray(['5', '6', Infinity]) === 11);
console.log(sumArray(['5', '6', -Infinity]) === 11);

console.log(sumArray(process.argv));