let particles
let attractCenterForce
let mouseForce
let resetButton
let particleCount
let maxVelX
let maxVelY
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
  createCanvas(800, 800)
  resetButton = createButton("Reset")
  resetButton.mousePressed(resetSketch)
  createP("Particle Count:")
  particleCount = createInput(100)
  createP("Max Velocity:")
  createSpan("X:")
  maxVelX = createInput(2)
  createSpan("Y:")
  maxVelY = createInput()
  createP("Starting Max Speed:")
  startVelMax = createInput(1)
  createElement("h1","Center Attraction Force Settings:")
  createP("Center Force Radius:")
  centerForceRadius = createInput(50)
  createElement("h2","If in radius, apply random force between:")
  createSpan("Min:")
  minForceInCenter = createInput(-0.25)
  createSpan("Max:")
  maxForceInCenter = createInput(1)
  createElement("h2","If not in radius, apply random force between:")
  createP("If random number is less than 0.0005:")
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
  for (var i = 0; i < particleCount.value();) {
    let origin = createVector(random(width), random(height))
    if(dist(origin.x, origin.y, width/2, height/2) < width/3) {
      particles[i] = new Particle(origin);
      particles[i].applyForce(createVector(random(-startVelMax.value(),startVelMax.value()), random(-startVelMax.value(),startVelMax.value())))
      i++
    }
  }
}

function draw() {
  for (var i = 0; i < particles.length; i++) {
    
	  // particles[i].show(1)
    particles[i].update()
    particles[i].wrap()
    particles[i].capVel(maxVelX.value(), maxVelY.value())
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
        if(Math.random() < 0.0005) {
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
