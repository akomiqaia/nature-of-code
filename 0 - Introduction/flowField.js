let inc = 0.1;
let scl = 10;
let cols;
let rows;

let zoff = 0

function setup() {
  createCanvas(400, 400);
  cols = floor(width / scl)
  rows = floor(height / scl)
}

function draw() {
  background(255)
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = (x + y * width) * 4;
      let angle = noise(xoff, yoff, zoff) * TWO_PI
      let v = p5.Vector.fromAngle(angle)
      xoff += inc;
      // fill(r)
      // rect(x * scl, y * scl, scl, scl)
      stroke(0);
      push();
      translate(x*scl, y*scl);
      rotate(v.heading());
      line(0,0,scl,0);
      pop();
    }
    yoff += inc;

    zoff += 0.001;
  }
}