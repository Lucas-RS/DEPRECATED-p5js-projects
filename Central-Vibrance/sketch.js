let particles
let attractCenterForce
let mouseForce
let resetButton
let showParticlePoints, doWrap, doMouseAttract
let particleCount
let maxVelX, maxVelY
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
  canvas = createCanvas(1024, 1024)
  resetButton = createButton("Reset Canvas")
  resetButton.mousePressed(resetSketch)
  showParticlePoints = createCheckbox("Show Particles", false)
  doWrap = createCheckbox("Wrap Edges", false)
  doMouseAttract = createCheckbox("Enable Mouse Attracts Particles", false)
  drawTrails = createCheckbox("Draw Trails", true)
  createP("Particle Count:")
  particleCount = createInput(100)
  createP("Max Velocity:")
  createSpan("X:")
  maxVelX = createInput(2)
  createSpan("Y:")
  maxVelY = createInput(2)
  createP("Starting Max Speed:")
  startVelMax = createInput(1)
  createElement("h1","Center Attraction Force Settings:")
  doAttractCenter = createCheckbox("Attract Particles to Center", true)
  createP("Center Force Radius:")
  centerForceRadius = createInput(50)
  createElement("h2","If in radius, apply random force between:")
  createSpan("Min:")
  minForceInCenter = createInput(-3)
  createSpan("Max:")
  maxForceInCenter = createInput(1)
  createElement("h2","If not in radius, apply random force between:")
  createP("If random number is less than 0.0005:")
  createSpan("Min:")
  minForceOutCenter = createInput(-3)
  createSpan("Max:")
  maxForceOutCenter = createInput(1)
  createP("Else:")
  createSpan("Min:")
  elseMinForceOutCenter = createInput(-1)
  createSpan("Max:")
  elseMaxForceOutCenter = createInput(1)
  createP("Max Line Dist:")
  maxLineDist = createInput(30)

  resetSketch()
}

function resetSketch() {
  background(255)
  particles = []
  for (var i = 0; i < particleCount.value();) {
    let origin = createVector(random(width), random(height))
    if(dist(origin.x, origin.y, width/2, height/2) < width/5) {
      particles[i] = new Particle(origin);
      particles[i].applyForce(createVector(random(-startVelMax.value(),startVelMax.value()), random(-startVelMax.value(),startVelMax.value())))
      i++
    }
  }
}

function draw() {
  if(!drawTrails.checked()){
    background(255)
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].update()
    particles[i].capVel(maxVelX.value(), maxVelY.value())
    if(showParticlePoints.checked()) {
      particles[i].show(5)
    }
    if(doWrap.checked()) {
      particles[i].wrap()
    }
    if(doMouseAttract.checked()) {
      particles[i].mouseAttract()
    }

    if(Math.random() < 0.1 && doAttractCenter.checked()) {
      attractCenterForce = createVector(width/2, height/2)
      attractCenterForce.sub(particles[i].pos)
      if(dist(particles[i].pos.x, particles[i].pos.y, width/2, height/2) < centerForceRadius.value()) {
        if(Math.random() < 0.5) {
          attractCenterForce.setMag(random(parseFloat(minForceInCenter.value()), parseFloat(maxForceInCenter.value())))
        } else {
          attractCenterForce.setMag(0)
        }
      } else {
        if(Math.random() < 0.0005) {
          attractCenterForce.setMag(random(parseFloat(minForceOutCenter.value()), parseFloat(maxForceOutCenter.value())))
        } else {
          attractCenterForce.setMag(random(parseFloat(elseMinForceOutCenter.value()), parseFloat(elseMaxForceOutCenter.value())))
        }
      }
      particles[i].applyForce(attractCenterForce);
    } else if(Math.random() < 0.01){
      particles[i].applyForce(createVector(random(-startVelMax.value(),startVelMax.value()), random(-startVelMax.value(),startVelMax.value())))
    }

    for(var j = 0; j < particles.length; j++) {
      if(dist(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y) < maxLineDist.value()){
        if(Math.random() < 0.1) {
          particles[i].vel.mult(0.97)
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
