let x;
let y;

let xspeed;
let yspeed;

let burts;

let r,g,b;

function preload() {
  burts = loadImage("burt1.png");
}

function setup() {
  createCanvas(800, 600);
  x = random(width);
  y = random(height);
  xspeed = 5;
  yspeed = 5;
  pickColor();
}

function draw() {
  background(0);

  // Draw image
  tint(r,g,b);
  image(burts,x,y,268,200);

  x = x + xspeed;
  y = y + yspeed;

  if (x + 268 >= width) {
    xspeed = -xspeed;
    x = width - 268;
    pickColor();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    pickColor();
  }

  if (y + 200 >= height) {
    yspeed = -yspeed;
    y = height - 200;
    pickColor();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    pickColor();
  }
}

function pickColor() {
  r = random(100,256);
  g = random(100,256);
  b = random(100,256);
}