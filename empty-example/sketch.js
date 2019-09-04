let angle = 0;
let w = 48;
let ma;
let maxD;

function setup() {
  createCanvas(600, 600,WEBGL);
  ma = atan(1/sqrt(2));
  maxD = dist(0,0,200,200);
  frameRate(20);
}

function draw() {
  background(255);
  ortho(-400,400,-400,400,0,1000);

  directionalLight(237, 9, 184,   -1,0,0);
  directionalLight(156,123,181,    0,0,1);
  directionalLight(242,168,41,     0,-1,0);

  rotateY(ma);
  rotateX(-PI/4);

  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {

      push();
      let d = dist(x,z,width/2,height/2);
      let offset = map(d,0,maxD,-PI,PI);
      let a = angle + offset;
      let h = map(sin(a), -1, 1, 100, 300);
      translate(x - width / 2, 0, z - height / 2);
      // ambientMaterial(255, 255, 255);
      normalMaterial();
      box(w - 2, h, w - 2);
      pop();
    }
  }

  angle -= 0.12;
}