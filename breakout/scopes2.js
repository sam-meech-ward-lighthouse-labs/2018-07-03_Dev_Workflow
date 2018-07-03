var ariplane = '🛩';
var x = 2;

function doSomething(y) {
  x++;

  (function() {
    x = 20;
  })();

  console.log(x);
}

doSomething(0);

console.log(x);