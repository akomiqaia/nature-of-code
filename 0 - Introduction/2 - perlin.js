function setup() {
  createCanvas(400, 400);
  pixelDensity(1)
}
let zoff = 0
function draw() {
  let yoff = 0;
  loadPixels();
  for (let y = 0; y < height; y++) {
    let xoff = 0;
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let r = noise(xoff, yoff, zoff) * 255
      pixels[index] = r
      pixels[index + 1] = r
      pixels[index + 2] = r
      pixels[index + 3] = 255
      xoff += 0.01
      
    }
    yoff += 0.01
    zoff += 0.0002

  }
  noiseDetail(10,0.65)
  updatePixels()
}
// comment lines 5 and 22 to get 2 dimensional perlin noise and remove zoff from line 13 as third argument