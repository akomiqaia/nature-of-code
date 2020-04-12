let x;
let y;
let inc = 0;

function setup() {
  createCanvas(200,200)
  x = width / 2;
  y = height / 2;
  background(51);
}

function draw() {
  
  point(x, y);

  let randomDirection = floor(random(4)) 
  switch (randomDirection){
    case 0:
      x = x + 2
      drawColoredRandomWalkerNoise()
    break;
    case 1:
      x = x - 2
      drawColoredRandomWalkerNoise()
    break;
    case 2:
      y = y + 2
      drawColoredRandomWalkerNoise()
    break;
    case 3:
      y = y - 2
      drawColoredRandomWalkerNoise()
    break;
  }
  inc += 0.01
}


function drawColoredRandomWalkerNoise() {
  let randomColor = int(map(noise(inc),0,1,0, 255))
  let r = randomColor + 150
  let g = randomColor + 70
  let b = randomColor + 70
  stroke(r,g,b);
  strokeWeight(2.5);
}
