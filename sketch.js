var bubbles = []; // array of Jitter objects

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  // Create objects
  for (var i=0; i<100; i++) {
    bubbles.push(new Bubble());
  }
}

function draw() {
  background(50, 89, 100);
  for (var i=0; i<bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}

// Bubble class
function Bubble() {
  this.x = random(width);
  this.y = random(height);
  this.speed = 1;
  
  this.sorte = random(1, 100);
  if(this.sorte > 0 && this.sorte < 30){
      this.diameter = random(2, 5);
  }else if(this.sorte > 30 && this.sorte < 90){ 
     this.diameter = random(10, 15);
  }else{
     this.diameter = random(10, 60);
  }

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {    
    fill(255, 100);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

function mouseMoved(){
 //bugs.pop(); //esse retira os ultimos adicionados.
 bubbles.splice(0, 1); //esse retira o mais antigo.
 bubbles.push(new Bubble());
}
