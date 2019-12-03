
function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  
//  ambientLight(0,0,180);
//  directionalLight(255,100,100,10);
  
  
  background(0);
  normalMaterial();
 // ambientMaterial(250);
  noStroke();
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(70, 20);
  pop();
}