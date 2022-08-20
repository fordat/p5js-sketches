let x = 0;
let y = 0;

let size = 80
let space = size*2;

let canvasSpace = 400;

var shape;

function setup() {
  createCanvas(canvasSpace,canvasSpace);

  noStroke();
}

function draw() {
  background(127, 255, 212);

  for (let a = -canvasSpace; a < canvasSpace; a += space) {
    for (let b = -canvasSpace; b < canvasSpace; b += space) {
      fill(42, 170, 138);
      rect(x + a, y + b, size, size)
      rect(x + a + size, y + b + size, size, size)
    }
  }

  if (x == (canvasSpace-size)) {
    x = 0;
  } else {
    x = x+1;
  }
  if (y == (canvasSpace-size)) {
    y = 0;
  } else {
    y = y+0.5;
  }
}