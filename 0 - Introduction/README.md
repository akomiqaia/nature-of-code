## Introduction in Perlin noise

* noise() vs random()
* Graphing 1D Perlin Noise
* 2D Noise
* noiseDetail()
* Coding Chalange: Random Walker

---
## [noise()](https://p5js.org/reference/#/p5/noise)

It was invented By Ken Perlin in the 1980s is mostly sued in hraphical applications to produce textures, natural motion, shapes, terrains etc.

Perlin Noise returns Perlin noise value at specific coordinates.

Perlin Noise is a random sequence generator producing a more natural ordered, harmonic succession of numbers compared to random() funciton. 

## noise() and random() visualisation in 1D

#### random()
![](https://i.imgur.com/LTcchHT.gif)

#### noise()
![](https://i.imgur.com/xjO1Sy0.gif)


#### 1D Perlin noise drawing
![](https://i.imgur.com/B76SDg6.gif)

#### noise() function adding `for` loop and `vertex` function from `p5js` library
![](https://i.imgur.com/S1is2GJ.gif)


#### Default 2D Perlin noise visulisation.
 2D perlin noise visulisation can be used for producing textures or terrains for different purposses. the picture from bellow is reult of implementing 2 dimensional Perlin noise. Since perlin noise is 'smooth randomness' and we are giving values to each pixel from gray to black we get cloudy texture look like drawing.


![](https://i.imgur.com/WETmmv9.png)


#### noiseDetail() in perlin noise

what does noiseDeatil() do?

* noiseDetail() takes two arguments.
* first argument is controling number of octives.the higher the number the finer details get on teh canvas.
* Lower octaves contribute more to the output signal and as such define the overall intensity of the noise, whereas higher octaves create finer grained details in the noise sequence.
* By default, noise is computed over 4 octaves with each octave contributing exactly half than its predecessor, starting at 50% strength for the 1st octave. 
* second argument is usually is reffered as falloff
* This falloff amount can be changed by adding an additional function parameter.
  * Eg. a falloff factor of 0.75 means each octave will now have 75% impact (25% less) of the previous lower octave. Any value between 0.0 and 1.0 is valid, however note that values greater than 0.5 might result in greater than 1.0 values returned by noise().
* By changing these parameters, the signal created by the noise() function can be adapted to fit very specific needs and characteristics.

#### Challenge - random walk

##### little dot moving on the canvas that picks random direction and walks around the canvas

* the dot randomly chooses between for directions(up, down, left and right)

![](https://i.imgur.com/dOzIYcP.gif)