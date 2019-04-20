let particles
let attractCenterForce
let mouseForce
let showParticlePoints, doBounce, doMouseAttract
let mouseAttractRange
let particleCount
let maxVel, restrictX, restrictY
let startVelMax
let centerForceRadius
let minForceInCenter, maxForceInCenter, elseForceInCenter
let minForceOutCenter, maxForceOutCenter
let elseMinForceOutCenter, elseMaxForceOutCenter
let maxLineDist
let newCanvSizeX, newCanvSizeY
let originRadiusMax, originRadiusMin
let attractCenterForceChance
let extraCenterForceChance
let doLineDrawPhyiscs
let backgroundColor

function setup() {
  canvas = createCanvas(1024, 1024).parent("canvas-container")

  createButton("(r) Reset Canvas").parent("settings-container").mousePressed(resetSketch)
  // createButton("(e) End Simulation").parent("settings-container").mousePressed(endSim)
  createButton("(s) Save As PNG").parent("settings-container").mousePressed(function() {saveCanvas(canvas, 'central-vibrance', 'png');})
  createElement("br").parent("settings-container")

  createSpan("Canvas Size: ").parent("settings-container")
  newCanvSizeX = createInput(1024).parent("settings-container")
  createSpan(" x ").parent("settings-container")
  newCanvSizeY = createInput(1024).parent("settings-container")
  createElement("br").parent("settings-container")
  createSpan("Radius in which particles originate: ").parent("settings-container")
  createElement("br").parent("settings-container")
  createSpan("Min: ").parent("settings-container")
  originRadiusMin = createInput(0).parent("settings-container")
  createSpan("Max: ").parent("settings-container")
  originRadiusMax = createInput(128).parent("settings-container")
  createElement("br").parent("settings-container")
  createSpan("(resizing canvas requires the canvas be reset.)").parent("settings-container")
  createElement("br").parent("settings-container")
  createSpan("Background Color:").parent("settings-container")
  backgroundColor = createInput('#ffffff', 'color').parent("settings-container")
  createSpan("<br>(requires reset or disabling 'draw trails' to update)").parent("settings-container")
  showParticlePoints = createCheckbox("Show Particles", false).parent("settings-container")
  doBounce = createCheckbox("Bounce Edges (flip velocity at edges)", false).parent("settings-container")
  drawTrails = createCheckbox("Draw Trails", true).parent("settings-container")
  doMouseAttract = createCheckbox("Enable Mouse Attracts Particles", false).parent("settings-container")
  createSpan("Mouse Attraction Range: ").parent("settings-container")
  mouseAttractRange = createInput(width * 0.1).parent("settings-container")
  createElement("br").parent("settings-container")
  createSpan("Particle Count: ").parent("settings-container")
  particleCount = createInput(100).parent("settings-container")
  createElement("br").parent("settings-container")
  doLineDrawPhyiscs = createCheckbox("Draw lines and apply line physics", true).parent("settings-container")
  createSpan("Max Line Dist: ").parent("settings-container")
  maxLineDist = createInput(25).parent("settings-container")
  createElement("br").parent("settings-container")
  createSpan("Cap Velocity: ").parent("settings-container")
  maxVel = createInput(3).parent("settings-container")
  restrictX = createCheckbox("Disable Movement on X Axis", false).parent("settings-container")
  restrictY = createCheckbox("Disable Movement on Y Axis", false).parent("settings-container")
  createSpan("Starting Max Speed: ").parent("settings-container")
  startVelMax = createInput(1).parent("settings-container")

  createElement("h1","Center Attraction Force Settings: ").parent("settings-container")
  doAttractCenter = createCheckbox("Attract Particles to Center", true).parent("settings-container")
  createSpan("If random number is less than ").parent("settings-container")
  attractCenterForceChance = createInput(0.1).parent("settings-container")
  createSpan(", apply center attraction forces.").parent("settings-container")
  createP("Center Force Radius: ").parent("settings-container")
  centerForceRadius = createInput(100).parent("settings-container")
  createElement("h2","If not in radius, apply random force between: ").parent("settings-container")
  createSpan("Min: ").parent("settings-container")
  minForceInCenter = createInput(-2).parent("settings-container")
  createSpan("Max: ").parent("settings-container")
  maxForceInCenter = createInput(2).parent("settings-container")
  createElement("h2","If in radius, apply random force between: ").parent("settings-container")
  createSpan("If random number is less than").parent("settings-container")
  extraCenterForceChance = createInput(0.005).parent("settings-container")
  createSpan(": ").parent("settings-container")
  createElement("br").parent("settings-container")
  createSpan("Min: ").parent("settings-container")
  minForceOutCenter = createInput(-5).parent("settings-container")
  createSpan("Max: ").parent("settings-container")
  maxForceOutCenter = createInput(5).parent("settings-container")
  createP("Else: ").parent("settings-container")
  createSpan("Min: ").parent("settings-container")
  elseMinForceOutCenter = createInput(-1).parent("settings-container")
  createSpan("Max: ").parent("settings-container")
  elseMaxForceOutCenter = createInput(1).parent("settings-container")

  resetSketch()
}

function draw() {
  if(!drawTrails.checked()){
    background(backgroundColor.value())
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].update()
    particles[i].capVel(maxVel.value(), restrictX.checked(), restrictY.checked())
    if(showParticlePoints.checked()) {
      particles[i].show(0.01*((newCanvSizeX.value()**2 + newCanvSizeY.value()**2)**0.5))
    }
    if(doBounce.checked()) {
      particles[i].bounceCanvasEdge()
    }
    if(doMouseAttract.checked()) {
      particles[i].mouseAttract(mouseAttractRange.value())
    }

    if(Math.random() < attractCenterForceChance.value() && doAttractCenter.checked()) {
      attractCenterForce = createVector(width/2, height/2)
      attractCenterForce.sub(particles[i].pos)
      if(dist(particles[i].pos.x, particles[i].pos.y, width/2, height/2) > centerForceRadius.value()) {
        if(Math.random() < 0.5) {
          attractCenterForce.setMag(random(parseFloat(minForceInCenter.value()), parseFloat(maxForceInCenter.value())))
        } else {
          attractCenterForce.setMag(0)
        }
      } else {
        if(Math.random() < parseFloat(extraCenterForceChance.value())) {
          attractCenterForce.setMag(random(parseFloat(minForceOutCenter.value()), parseFloat(maxForceOutCenter.value())))
        } else {
          attractCenterForce.setMag(random(parseFloat(elseMinForceOutCenter.value()), parseFloat(elseMaxForceOutCenter.value())))
        }
      }
      particles[i].applyForce(attractCenterForce);
    } else if(Math.random() < 0.01){
      particles[i].applyForce(createVector(random(-startVelMax.value(),startVelMax.value()), random(-startVelMax.value(),startVelMax.value())))
    }

    if(doLineDrawPhyiscs.checked()){
      for(var j = 0; j < particles.length; j++) {
        if(dist(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y) < maxLineDist.value()){
          if(Math.random() < 0.1) {
            particles[i].vel.mult(0.97)
          }
          stroke(lerpColor(particles[i].color, particles[j].color, 0.5))
          if(i !== j) {
            line(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y)
          }
        } else {
          if(Math.random() < 0.1) {
            particles[i].vel.mult(1.00001)
          }
        }
      }
    }
  }
}

function keyPressed() {
  if (key === "r") {
    resetSketch();
  } else if (key === "s") {
    saveCanvas(canvas, 'central-vibrance', 'png');
  }
}

window.onload = function()  {
  updateCanvasSize()
}

function windowResized() {
  updateCanvasSize()
}

function updateCanvasSize() {
  let canvasElem = document.getElementById("defaultCanvas0")
  let canvasContainerElem = document.getElementById("canvas-container")
  let settingsContainerElem = document.getElementById("settings-container")
  if(windowHeight < windowWidth) {
    canvasElem.style.width = "auto";
    canvasElem.style.height = "auto";
    canvasContainerElem.style.height = "calc(100vh - 90px)";
    settingsContainerElem.style.height = "calc(100vh - 100px)";
    settingsContainerElem.style.overflowY = "scroll"
  } else {
    canvasContainerElem.style.height = "calc(100vw - 90px)";
    settingsContainerElem.style.height = "auto";
    settingsContainerElem.style.overflowY = "initial"
  }
}

function resetSketch() {
  resizeCanvas(newCanvSizeX.value(), newCanvSizeY.value())
  updateCanvasSize()
  background(backgroundColor.value())
  particles = []
  for (var i = 0; i < particleCount.value();) {
    let origin = createVector(random(width), random(height))
    if(dist(origin.x, origin.y, width/2, height/2) < originRadiusMax.value() && dist(origin.x, origin.y, width/2, height/2) > originRadiusMin.value()) {
      particles[i] = new Particle(origin);
      particles[i].applyForce(createVector(random(-startVelMax.value(),startVelMax.value()), random(-startVelMax.value(),startVelMax.value())))
      i++
    }
  }
}