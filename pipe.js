// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/cXgA1d_E-jY&
var space = 400
var stop = false;
function Pipe() {
  this.top = random(height/2);

  this.x = width;
  this.w = 20;

  this.highlight = false;

  this.pastBird = function(bird) {
    return (bird.x > this.x);
  }

  this.hits = function(bird) {
    if (bird.y < this.top + 16 || bird.y > (this.top + this.space) - 16) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function() {
    fill(255);
    if (this.highlight) {
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, this.top + this.space, this.w, height - (this.top + this.space));
  }

  this.update = function(score, speed, space) {
    if (score > 10) {
      space = 200;
    } else if (score > 20) {
      space = 100;
    } else if (score > 30) {
      this.speed = 10;
    }

    this.x -= speed;

    this.space = space;

  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }


}
