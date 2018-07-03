var x = 0;

// point A
console.log('A: ', x);

function a() {
  // point B
  console.log('B: ', x)

  x++;

  // point C
  console.log('C: ', x)
  return x;
}

// point D
console.log('D: ', x);

x = a(x);

// point E
console.log('E: ', x);