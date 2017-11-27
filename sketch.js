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

var mic, recorder, soundFile;
var called = false;

var minThreshHold = 0;
var midThreshHold = 0.25;

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());

    mic = new p5.AudioIn();
    mic.start();

    recorder = new p5.SoundRecorder();
    recorder.setInput(mic);

    soundFile = new p5.SoundFile();
    recorder.record(soundFile);
}

function draw() {
  background(0);
        if (alive) {

    for (var i = pipes.length-1; i >= 0; i--) {
        pipes[i].show();
    
      pipes[i].update(score, speed, 200);

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

    var vol = mic.getLevel();
     console.log(vol);
      if (vol > midThreshHold) {
        bird.up(vol);
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
        else if (!alive) {
    textSize(64);
    text(score.toString(), height/2, 64);
    fill(0, 102, 153);
      if (!called){
        recorder.stop();
        called = true;
      }
  }
}
