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
let redMin, redMax, greenMin, greenMax, blueMin, blueMax, alphaMin, alphaMax
let endSim = false

function setup() {
  canvas = createCanvas(1024, 1024).parent("canvas-container")

  //Top buttons
  createButton("(r) Reset Canvas").parent("settings-container").mousePressed(resetSketch)
  createButton("(e) End Simulation").parent("settings-container").mousePressed(function() {endSim = true})
  createButton("(s) Save As PNG").parent("settings-container").mousePressed(function() {saveCanvas(canvas, 'central-vibrance', 'png')})

  //Canvas size
  createSpan("<br>Canvas Size: ").parent("settings-container")
  newCanvSizeX = createInput(1024).parent("settings-container")
  createSpan(" x ").parent("settings-container")
  newCanvSizeY = createInput(1024).parent("settings-container")

  //Particle origin boundaries
  createSpan("<br>Origin boundaries: <br>").parent("settings-container")
  createSpan("Min: ").parent("settings-container")
  originRadiusMin = createInput('0').parent("settings-container")
  createSpan(" Max: ").parent("settings-container")
  originRadiusMax = createInput(128).parent("settings-container")

  createSpan("<br>(resizing canvas requires the canvas be reset.)").parent("settings-container")

  createElement("hr").parent("settings-container")

  //Particle color inputs
  createElement("h3","COLORS: ").parent("settings-container")
  
  createSpan("Background Color:").parent("settings-container")
  backgroundColor = createInput('#ffffff', 'color').parent("settings-container")
  createSpan("<br>(requires reset or disabling 'draw trails' to update)<br>").parent("settings-container")

  createSpan("RED Min: ").parent("settings-container")
  redMin = createInput('0').parent("settings-container")
  createSpan(" Max: ").parent("settings-container")
  redMax = createInput(255).parent("settings-container")
  createSpan("<br>GREEN Min: ").parent("settings-container")
  greenMin = createInput('0').parent("settings-container")
  createSpan(" Max: ").parent("settings-container")
  greenMax = createInput(255).parent("settings-container")
  createSpan("<br>BLUE Min: ").parent("settings-container")
  blueMin = createInput('0').parent("settings-container")
  createSpan(" Max: ").parent("settings-container")
  blueMax = createInput(255).parent("settings-container")
  createSpan("<br>OPACITY Min: ").parent("settings-container")
  alphaMin = createInput('0').parent("settings-container")
  createSpan(" Max: ").parent("settings-container")
  alphaMax = createInput(255).parent("settings-container")

  createElement("hr").parent("settings-container")
  
  createElement("h3","OTHER: ").parent("settings-container")

  //Boolean Settings
  showParticlePoints = createCheckbox("Show Particles", false).parent("settings-container")
  doBounce = createCheckbox("Bounce Edges (flip velocity at edges)", false).parent("settings-container")
  drawTrails = createCheckbox("Draw Trails", true).parent("settings-container")
  restrictX = createCheckbox("Disable Movement on X Axis", false).parent("settings-container")
  restrictY = createCheckbox("Disable Movement on Y Axis", false).parent("settings-container")
  doMouseAttract = createCheckbox("Enable Mouse Attracts Particles", false).parent("settings-container")
  doLineDrawPhyiscs = createCheckbox("Draw lines and apply line physics", true).parent("settings-container")

  //Misc
  createSpan("Max Line Dist: ").parent("settings-container")
  maxLineDist = createInput(25).parent("settings-container")

  createSpan("<br>Mouse Attraction Range: ").parent("settings-container")
  mouseAttractRange = createInput(width * 0.1).parent("settings-container")

  createSpan("<br>Particle Count: ").parent("settings-container")
  particleCount = createInput(100).parent("settings-container")
  
  createSpan("<br>Cap Velocity: ").parent("settings-container")
  maxVel = createInput(3).parent("settings-container")

  createSpan("<br>Starting Max Speed: ").parent("settings-container")
  startVelMax = createInput(1).parent("settings-container")

  createElement("hr").parent("settings-container")

  //Center Attraction Settings
  createElement("h3","CENTER ATTRACTION FORCE: ").parent("settings-container")

  doAttractCenter = createCheckbox("Attract Particles to Center", true).parent("settings-container")

  createSpan("If random number is less than ").parent("settings-container")
  attractCenterForceChance = createInput(0.1).parent("settings-container")
  createSpan(", apply center attraction forces.").parent("settings-container")

  createSpan("<br>Center Force Radius: ").parent("settings-container")
  centerForceRadius = createInput(100).parent("settings-container")

  createElement("h4","if not in radius, apply random force between: ").parent("settings-container")

  createSpan("Min: ").parent("settings-container")
  minForceInCenter = createInput(-2).parent("settings-container")
  createSpan(" Max: ").parent("settings-container")
  maxForceInCenter = createInput(2).parent("settings-container")

  createElement("h4","if in radius, apply random force between: ").parent("settings-container")

  createSpan("If random number is less than").parent("settings-container")
  extraCenterForceChance = createInput(0.005).parent("settings-container")
  createSpan(":<br>").parent("settings-container")
  
  createSpan("Min: ").parent("settings-container")
  minForceOutCenter = createInput(-5).parent("settings-container")
  createSpan(" Max: ").parent("settings-container")
  maxForceOutCenter = createInput(5).parent("settings-container")

  createP("Else: ").parent("settings-container")

  createSpan("Min: ").parent("settings-container")
  elseMinForceOutCenter = createInput(-1).parent("settings-container")
  createSpan(" Max: ").parent("settings-container")
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
    } else if(Math.random() < 0.002){
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

    if(endSim){
      if(alpha(particles[i].color) > 0) {
        particles[i].color.setAlpha(alpha(particles[i].color) - 1)
      } else {
        particles.splice(i,1)
      }
    }
  }
}

function keyPressed() {
  if (key === "r") {
    resetSketch();
  } else if (key === "s") {
    saveCanvas(canvas, 'central-vibrance', 'png');
  } else if (key === "e") {
    endSim = true
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
    canvasContainerElem.style.height = "calc(100vh - 30px)";
    settingsContainerElem.style.height = "calc(100vh - 40px)";
    settingsContainerElem.style.overflowY = "scroll"
  } else {
    canvasContainerElem.style.height = "calc(100vw - 30px)";
    settingsContainerElem.style.height = "auto";
    settingsContainerElem.style.overflowY = "initial"
  }
}

function resetSketch() {
  endSim = false
  resizeCanvas(newCanvSizeX.value(), newCanvSizeY.value())
  updateCanvasSize()
  background(backgroundColor.value())
  particles = []
  for (var i = 0; i < particleCount.value();) {
    let origin = createVector(random(width), random(height))
    if(dist(origin.x, origin.y, width/2, height/2) < originRadiusMax.value() && dist(origin.x, origin.y, width/2, height/2) > parseFloat(originRadiusMin.value())) {
      let c = color(random(parseFloat(redMin.value()),redMax.value()),random(parseFloat(greenMin.value()),greenMax.value()),random(parseFloat(blueMin.value()),blueMax.value()),random(parseFloat(alphaMin.value()),alphaMax.value()))

      particles[i] = new Particle(origin, c);
      particles[i].applyForce(createVector(random(-startVelMax.value(),startVelMax.value()), random(-startVelMax.value(),startVelMax.value())))
      i++
    }
  }
}