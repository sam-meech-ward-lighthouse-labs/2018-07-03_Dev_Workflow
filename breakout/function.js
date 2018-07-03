var ariplane = undefined;

function something() {
  console.log("Something is happending", ariplane);
}

console.log(ariplane);
console.log(something);



something();

ariplane = '🛩';

console.log(ariplane);

var i = 5;

(function() {
  console.log(i);

  function thing1() {
    var i; 
    function thing2() {
      
    }

    thing2();
  }
  thing1();

  for(var i = 0; i < 10; i++) {

  }

  console.log(i);
})();

console.log(i);