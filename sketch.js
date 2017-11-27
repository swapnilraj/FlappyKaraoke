// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/cXgA1d_E-jY&


var bird;
var alive = true;
var score = 0;
var count = 0;
var speed = 2;
var pipes = [];

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);

  if (alive) {

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    
    if (score > 30) {
      pipes[i].update(score, 10, 100);
    } else {
      pipes[i].update(score, speed, 100);
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }

    if (pipes[i].pastBird(bird)) {
      ++count;
      score = floor(count/32);
    }

    if (pipes[i].hits(bird)) {
      alive = false;
    }

  }

  bird.update();
  bird.show();
  textSize(64);
  fill(0, 102, 153);
  text(score.toString(), height/2, 64);
  
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
}
  if (!alive) {
    textSize(64);
    text(score.toString(), height/2, 64);
    fill(0, 102, 153);
  }

}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}


