let x;
let y;
let inc = 0;

function setup() {
  createCanvas(800, 800)
  x = width / 2;
  y = height / 2;
  z = width / 2;
  w = height / 2;
  background(51);
}

function draw() {
    point(x, y);
    point(z, w);
    let randomDirection = floor(random(4)) 
    let r = float(random(1))
    switch (randomDirection){
          case 0:
            x = x + 5
            z = z - 5
            drawColoredRandomWalkerNoise()
          break;
          case 1:
            x = x - 5
            z = z + 5
            drawColoredRandomWalkerNoise()
          break;
          case 2:
            y = y + 5
            w = w + 5
            drawColoredRandomWalkerNoise()
          break;
          case 3:
            y = y - 5
            w = w - 5
            drawColoredRandomWalkerNoise()
          break;
        }
    inc += 0.01
  }

function mousedirection (x,y) {
  if (x < mouseX && y < mouseY) {
    x += 1
    y += 1
  } else if (x < mouseX && y > mouseY) {
    x += 1
    y -= 1
  } else if (x > mouseX && y < mouseY) {
    x -= 1
    y += 1
  } else if (x > mouseX && y > mouseY) {
    x -= 1
    y -= 1
  } 
}

function drawColoredRandomWalkerNoise() {
  let r = noise(inc + 10) * 255
  let g = noise(inc + 20)*255
  let b = noise(inc + 40)*255
  stroke(r,g,b);
  strokeWeight(5);
}
