let x;
let y;
let inc = 0;

function setup() {
  createCanvas(400, 400)
  x = width / 2;
  y = height / 2;
  background(51);
}


function draw() {
  // console.log(mouseX, mouseY)
  point(x, y);

  let randomDirection = floor(random(4)) 
  switch (randomDirection){
    case 0:
      x = x + 3
      drawColoredRandomWalkerNoise()
    break;
    case 1:
      x = x - 3
      drawColoredRandomWalkerNoise()
    break;
    case 2:
      y = y + 3
      drawColoredRandomWalkerNoise()
    break;
    case 3:
      y = y - 3
      drawColoredRandomWalkerNoise()
    break;
  }
  inc += 0.01
}


function drawColoredRandomWalkerNoise() {
  let r = noise(inc + 10) * 255
  let g = noise(inc + 20)*255
  let b = noise(inc + 40)*255
  stroke(r,g,b);
  strokeWeight(2.5);
}
