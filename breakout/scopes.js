var pancakes = undefined;

console.log(pancakes);

pancakes = "🥞";
console.log(waffles);

function doSomething() {
  var waffles = undefined;

  console.log(waffles, pancakes);

  waffles = "🌖";
}

doSomething();

console.log(global.syrup);
