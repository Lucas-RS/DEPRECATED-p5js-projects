let particles
let attractCenterForce
let mouseForce
let resetButton
let particleCount
let startVelMax
let centerForceRadius
let minForceInCenter
let maxForceInCenter
let elseForceInCenter
let minForceOutCenter
let maxForceOutCenter
let elseMinForceOutCenter
let elseMaxForceOutCenter
let maxLineDist

function setup() {
  createCanvas(1200, 1200)
  resetButton = createButton("Reset")
  resetButton.mousePressed(resetSketch)
  createP("Particle Count:")
  particleCount = createInput(100)
  createP("Starting Max Speed:")
  startVelMax = createInput(1)
  createElement("h1","Center Attraction Force Settings:")
  createP("Center Force Radius:")
  centerForceRadius = createInput(100)
  createElement("h2","If in radius, apply random force between:")
  createSpan("Min:")
  minForceInCenter = createInput(-0.25)
  createSpan("Max:")
  maxForceInCenter = createInput(1)
  createElement("h2","If not in radius, apply random force between:")
  createP("If random number is less than 0.005:")
  createSpan("Min:")
  minForceOutCenter = createInput(-1)
  createSpan("Max:")
  maxForceOutCenter = createInput(0.1)
  createP("Else:")
  createSpan("Min:")
  elseMinForceOutCenter = createInput(-0.25)
  createSpan("Max:")
  elseMaxForceOutCenter = createInput(0.25)
  createP("Max Line Dist:")
  maxLineDist = createInput(50)

  resetSketch()
}

function resetSketch() {
  background(255)
  particles = []
  for (var i = 0; i < particleCount.value(); i++) {
    particles[i] = new Particle(random(width/2) + width/4, random(height/2) + height/4);
    particles[i].applyForce(createVector(random(-startVelMax.value(),startVelMax.value()), random(-startVelMax.value(),startVelMax.value())))
  }
}

function draw() {
  for (var i = 0; i < particles.length; i++) {
    
	  // particles[i].show(1)
    particles[i].update()
    particles[i].wrap()
    particles[i].capVel(1)
    // particles[i].mouseAttract()

    if(Math.random() < 0.1) {
      attractCenterForce = createVector(width/2, height/2)
      attractCenterForce.sub(particles[i].pos)
      if(dist(particles[i].pos.x, particles[i].pos.y, width/2, height/2) > centerForceRadius.value()) {
        if(Math.random() < 0.1) {
          attractCenterForce.setMag(random(minForceInCenter.value(), maxForceInCenter.value()))
        } else {
          attractCenterForce.setMag(0)
        }
      } else {
        if(Math.random() < 0.005) {
          attractCenterForce.setMag(random(minForceOutCenter.value(), maxForceOutCenter.value()))
        } else {
          attractCenterForce.setMag(random(elseMinForceOutCenter.value(), elseMaxForceOutCenter.value()))
        }
      }
      particles[i].applyForce(attractCenterForce);
    }

    for(var j = 0; j < particles.length; j++) {
      if(dist(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y) < maxLineDist.value()){
        if(Math.random() < 0.1) {
          particles[i].vel.mult(0.995)
        }
        stroke(lerpColor(particles[i].color, particles[j].color, 0.5))
        line(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y)
      } else {
        if(Math.random() < 0.1) {
          particles[i].vel.mult(1.00001)
        }
      }
    }
  }
}
