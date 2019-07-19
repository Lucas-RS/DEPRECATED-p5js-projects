let capturer;
let defaultNode = {
  __active: false,
  gravityChance: 1,
  forceMultiplier: -0.5,
  constantForceChance: 0.1,
  constantForceRadius: 128,
  insideChance: 1,
  insideMin: -2,
  insideMax: 2,
  outsideChance: 0.5,
  outsideMin: -1,
  outsideMax: 1,
  extraChance: 0.005,
  extraMin: -5,
  extraMax: 5,
  initX: 0,
  initY: 0,
  useEquations: false,
  xEquation: "sin(t)",
  yEquation: "cos(t)",
  spawnParticles: true,
  spawnOnlyAtStart: true,
  spawnChance: 1,
  spawnCount: 140,
  spawnRadiusMin: 0,
  spawnRadiusMax: 192,
  particleLifetime: 0,
  deleteParticles: false,
  deleteChance: 0.5,
  deleteRadius: 2
};
let settings = {
  Share: share,
  "Shift + Click to Add Particle | Ctrl + Click to Add Node": {},
  captureFrames: {
    __doCapture: false,
    __startFrame: 1,
    captureLength: 300,
    _captureLength: { min: 1, step: 1, name: "captureLength (No. of frames)" },
    resetSketchOnStart: true,
    format: "webm",
    _format: {
      type: "select",
      options: ["webm", "png", "jpg"]
    },
    start: () => {
      capturer = new CCapture({
        format: settings.captureFrames.format
      });
      capturer.start();
      settings.captureFrames.__doCapture = true;
      if (settings.captureFrames.resetSketchOnStart) {
        settings.captureFrames.__startFrame = 1;
        resetSketch();
      } else {
        settings.captureFrames.__startFrame = frameCount;
      }
    }
  },
  "Pause (Space)": toggleLoop,
  "Reset Canvas (r)": resetSketch,
  resetNodes,
  "Save As PNG (s)": () => {
    saveCanvas(canvas, "central-vibrance", "png");
  },
  "Show Code Area (c)": toggleCodeArea,
  "Show uiCanvas (g)": () => {
    showAllGUIs = !showAllGUIs;
  },
  "Collapse All Folders": () => {
    for (let c in gui.controllers) {
      if (gui.controllers[c].hasOwnProperty("__ul")) {
        gui.controllers[c].close();
      }
    }
  },
  seed: 0,
  useCustomSeed: false,
  timeScale: 1,
  _timeScale: { step: 0.00001, name: "(timeScale) t = frameCount \u00D7" },
  __showTimeScale: false,
  particleLifetime: 0,
  _particleLifetime: {
    min: 0,
    step: 1,
    name: "particleLifetime (frames, 0 = \u221E)"
  },
  particleDeathSpeed: 0.5,
  _particleDeathSpeed: { min: 0.1, max: 255, step: 0.1 },
  "end (e)": () => {
    end = true;
  },
  mouseAttractsParticles: false,
  mouseAttractionRange: 100,
  _mouseAttractionRange: {
    min: 0,
    max: 4096,
    step: 1
  },
  bounceEdges: false,
  drawTrails: true,
  canvas: {
    "Reset Canvas (r)": resetSketch,
    resolutionScale: 1,
    _resolutionScale: { min: 0 },
    trueResolution: "1024 x 1024",
    width: 1024,
    _width: { min: 1, max: 8192, step: 1 },
    height: 1024,
    _height: { min: 1, max: 8192, step: 1 },
    translateCenterX: 0,
    translateCenterY: 0,
    rotateCanvas: "0"
  },
  velocitySettings: {
    lockAxis: {
      xAxis: false,
      yAxis: false
    },
    maxVelocity: 1,
    _maxVelocity: { min: 0, max: 100, step: 0.01 },
    startingVelocity: {
      minX: -1,
      maxX: 1,
      minY: -1,
      maxY: 1,
      _all: { min: -100, max: 100, step: 0.01 }
    },
    changeForceChance: 0.001,
    _changeForceChance: { min: 0, max: 1, step: 0.0001 },
    changeMagnitudeChance: 1,
    _changeMagnitudeChance: { min: 0, max: 1, step: 0.0001 },
    magnitudeBoundaries: {
      min: 1,
      max: 2,
      _all: { min: -10, max: 10, step: 0.001 }
    },
    changeDirectionChance: 1,
    _changeDirectionChance: { min: 0, max: 1, step: 0.0001 },
    rotationBoundaries: {
      min: -360,
      max: 360,
      _all: { min: -360, max: 360, step: 0.01 }
    },
    _rotationBoundaries: { name: "rotationBoundaries (in degrees)" },
    randomForceChance: 0.001,
    _randomForceChance: { min: 0, max: 1, step: 0.0001 },
    randomForce: {
      minX: -1,
      maxX: 1,
      minY: -1,
      maxY: 1,
      _all: { min: -10, max: 10, step: 0.01 }
    }
  },
  colors: {
    showParticles: true,
    _showParticles: {},
    particleSettings: {
      particleWidth: 1,
      particleHeight: 1,
      drawOutline: false,
      strokeWeight: 1,
      _strokeWeight: { min: 0.1, max: 50, step: 0.1 },
      particleOutlineColor: "#ffffff",
      particleOutlineAlpha: 255,
      _particleOutlineAlpha: { min: 0, max: 255, step: 1 },
      _all: { min: 1, max: 250, step: 1 }
    },
    _particleSettings: {},
    backgroundColor: "#ffffff",
    _backgroundColor: { type: "color" },
    backgroundAlpha: 255,
    _backgroundAlpha: { min: 0, max: 255, step: 1 },
    particleColorType: "randomRGBA",
    _particleColorType: {
      type: "select",
      options: ["randomRGBA", "randomHSLA", "gradient", "image"]
    },
    randomRGBA: {
      redMin: 0,
      redMax: 255,
      greenMin: 0,
      greenMax: 255,
      blueMin: 0,
      blueMax: 255,
      alphaMin: 0,
      alphaMax: 255,
      _all: { min: 0, max: 255, step: 1 }
    },
    _randomRGBA: { openFolder: true },
    randomHSLA: {
      hueMin: 0,
      hueMax: 255,
      saturationMin: 0,
      saturationMax: 255,
      lightnessMin: 0,
      lightnessMax: 255,
      alphaMin: 0,
      alphaMax: 255,
      boostRed: false,
      _all: { min: 0, max: 255, step: 1 }
    },
    gradient: {
      firstColor: "#ffffff",
      secondColor: "#000000",
      alphaMin: 0,
      alphaMax: 255,
      _all: { type: "color", min: 0, max: 255, step: 1 }
    },
    image: {
      "Open File": importImage,
      initColor: "#000000",
      alphaMin: 0,
      alphaMax: 255,
      updateAtStart: true,
      updateColorChance: 1,
      _updateColorChance: { min: 0, max: 1, step: 0.0001 },
      _all: { min: 0, max: 255, step: 1 }
    },
    _all: { openFolder: true, hide: true }
  },
  lines: {
    strokeWeight: 1,
    _strokeWeight: { min: 0.1, max: 50, step: 0.1 },
    connectPoints: true,
    changeSpeedConnected: true,
    changeSpeedChance: 0.1,
    _changeSpeedChance: { min: 0, max: 1, step: 0.0001 },
    changeSpeedBy: 0.97,
    _changeSpeedBy: { min: -4, max: 4, step: 0.01 },
    maxLineDist: 35,
    _maxLineDist: { min: 1, max: 512, step: 1 },
    lerpValue: 0.5,
    _lerpValue: { min: 0, max: 1, step: 0.01 }
  },
  nodeSettings: {
    __show: false,
    resetNodes,
    showNodes: false,
    overallChance: 1,
    _overallChance: { min: 0, max: 1, step: 0.001 },
    nodes: {},
    _nodes: { openFolder: true }
  },
  _nodeSettings: { openFolder: true }
};
let particles = [];
let nodes = [];
let canvas;
let qtree;
let gui;
let pageIsLoaded = false;
let listenForKeys = true;
let listenForMouse = true;
let showAllGUIs = false;
let sampledImg;
let showCodeArea = false;
let userDrawCode, userSetupCode;
let useCustomCode = false;
let t = 0;
const e = Math.E;
let doLoop = true;
let end = false;

let uiCanvas = new p5(function(p) {
  let size;

  p.setup = function() {
    p.angleMode(DEGREES);
    p.createCanvas(settings.canvas.width, settings.canvas.height).parent(
      "canvas-container"
    );
  };

  p.draw = function() {
    p.translate(
      p.width / 2 + settings.canvas.translateCenterX,
      p.height / 2 + settings.canvas.translateCenterY
    );
    try {
      p.rotate(eval(settings.canvas.rotateCanvas));
    } catch (e) {
      console.error(e.message);
    }
    size = Math.ceil(
      Math.pow(Math.pow(p.width, 2) + Math.pow(p.height, 2), 0.5) * 0.005
    );
    p.clear();
    if (
      showAllGUIs ||
      settings.__showTimeScale ||
      settings.captureFrames.__doCapture
    ) {
      p.push();
      p.strokeWeight(1);
      p.stroke(0);
      p.textSize(size * 3);
      p.text(
        "frameRate = " + Math.round(frameRate()),
        size * 2 - p.width / 2,
        p.height / 2 - size * 10
      );
      p.text(
        "frameCount = " + frameCount,
        size * 2 - p.width / 2,
        p.height / 2 - size * 6
      );
      p.text(
        "t = " + t.toFixed(1),
        size * 2 - p.width / 2,
        p.height / 2 - size * 2
      );
      p.textAlign(RIGHT);
      p.text(
        "Number of Nodes = " + nodes.length,
        p.width / 2 - size * 2,
        p.height / 2 - size * 6
      );
      p.text(
        "Number of Particles = " + particles.length,
        p.width / 2 - size * 2,
        p.height / 2 - size * 2
      );
      p.pop();
    }
    if (
      showAllGUIs ||
      settings.nodeSettings.showNodes ||
      settings.nodeSettings.__show
    ) {
      p.push();
      for (let a = 0; a < nodes.length; a++) {
        if (settings.nodeSettings.__show) {
          p.noFill();
          if (nodes[a].__active) {
            p.stroke(0, 255, 255);
          } else {
            p.stroke(0);
          }
          p.strokeWeight(size * 0.2);
          p.ellipse(
            nodes[a].x,
            nodes[a].y,
            size * 5 * Math.abs(nodes[a].forceMultiplier)
          );
          if (nodes[a].forceMultiplier >= 0) {
            p.fill(0, 255, 0);
          } else {
            p.fill(255, 0, 0);
          }
        } else {
          p.fill(0);
        }
        p.noStroke();
        p.ellipse(nodes[a].x, nodes[a].y, size);
        if (nodes[a].__active) {
          if (nodes[a].constantForceChance > 0) {
            p.fill(0, 255, 255, nodes[a].constantForceChance * 204);
            p.ellipse(
              nodes[a].x,
              nodes[a].y,
              2 * nodes[a].constantForceRadius * settings.canvas.resolutionScale
            );
            p.fill(0);
            p.textSize(size * 2);
            p.textAlign(CENTER);
            p.strokeWeight(1);
            p.stroke(0);
            p.text(
              "inside : chance = " + nodes[a].insideChance,
              0,
              p.height / 2 - size * 12.5
            );
            p.text(
              "extra (inside) : chance = " + nodes[a].extraChance,
              0,
              p.height / 2 - size * 7.5
            );
            p.text(
              "outside : chance = " + nodes[a].outsideChance,
              0,
              p.height / 2 - size * 2.5
            );
            p.strokeWeight(size);
            p.stroke(0, 255, 0);
            p.line(
              nodes[a].insideMin * settings.canvas.resolutionScale * 10,
              p.height / 2 - size * 11,
              nodes[a].insideMax * settings.canvas.resolutionScale * 10,
              p.height / 2 - size * 11
            );
            p.stroke(255, 128, 0);
            p.line(
              nodes[a].extraMin * settings.canvas.resolutionScale * 10,
              p.height / 2 - size * 6,
              nodes[a].extraMax * settings.canvas.resolutionScale * 10,
              p.height / 2 - size * 6
            );
            p.stroke(255, 0, 0);
            p.line(
              nodes[a].outsideMin * settings.canvas.resolutionScale * 10,
              p.height / 2 - size * 1,
              nodes[a].outsideMax * settings.canvas.resolutionScale * 10,
              p.height / 2 - size * 1
            );
          }
          if (nodes[a].spawnParticles) {
            let radiusDifference =
              nodes[a].spawnRadiusMax * settings.canvas.resolutionScale -
              nodes[a].spawnRadiusMin * settings.canvas.resolutionScale;
            p.noFill();
            p.stroke(255, 0, 255, 51);
            p.strokeWeight(radiusDifference);
            p.ellipse(
              nodes[a].x,
              nodes[a].y,
              2 *
                (nodes[a].spawnRadiusMin * settings.canvas.resolutionScale +
                  radiusDifference / 2)
            );
          }
        }
      }
      p.pop();
    }
  };
});

function setup() {
  angleMode(DEGREES);
  settings.canvas.width = screen.width;
  settings.canvas.height = screen.height;
  canvas = createCanvas(settings.canvas.width, settings.canvas.height).parent(
    "canvas-container"
  );
  resetSketch();
}

function draw() {
  translate(
    width / 2 + settings.canvas.translateCenterX,
    height / 2 + settings.canvas.translateCenterY
  );
  try {
    rotate(eval(settings.canvas.rotateCanvas));
  } catch (e) {
    console.error(e.message);
  }

  if (useCustomCode) {
    try {
      eval(userDrawCode);
    } catch (e) {
      console.error(e.message);
    }
  }

  if (
    settings.captureFrames.__doCapture &&
    frameCount - settings.captureFrames.__startFrame <
      settings.captureFrames.captureLength
  ) {
    capturer.capture(canvas.canvas);
  } else if (
    settings.captureFrames.__doCapture &&
    frameCount - settings.captureFrames.__startFrame ===
      settings.captureFrames.captureLength
  ) {
    settings.captureFrames.__doCapture = false;
    capturer.stop();
    capturer.save();
  }

  t = frameCount * settings.timeScale;

  qtree.clear();
  for (let particle of particles) {
    qtree.insert(particle);
    particle.checked = false;
  }

  if (!settings.drawTrails) {
    colorMode(RGB, 255);
    let bgColor = color(settings.colors.backgroundColor);
    bgColor.setAlpha(settings.colors.backgroundAlpha);
    background(bgColor);
  }

  if (
    nodes.length > 0 &&
    (settings.nodeSettings.overallChance === 1 ||
      random() < settings.nodeSettings.overallChance)
  ) {
    for (let i = 0; i < nodes.length; i++) {
      let node = nodes[i];
      if (node.useEquations) {
        try {
          let x = node.x;
          let y = node.y;
          node.x =
            (eval(node.xEquation) + node.initX) *
            settings.canvas.resolutionScale;
          node.y =
            (-eval(node.yEquation) + node.initY) *
            settings.canvas.resolutionScale;
        } catch (e) {
          console.error(e.message);
        }
      } else {
        node.x = node.initX * settings.canvas.resolutionScale;
        node.y = node.initY * settings.canvas.resolutionScale;
      }
      if (
        (node.spawnParticles && !node.spawnOnlyAtStart) ||
        (node.spawnOnlyAtStart && frameCount === 1)
      ) {
        if (random() < node.spawnChance) {
          for (let j = 0; j < 1; j++) {
            for (let c = 0; c < node.spawnCount; c++) {
              let r =
                Math.pow(random(), 0.5) *
                  (node.spawnRadiusMax - node.spawnRadiusMin) +
                node.spawnRadiusMin;
              let a = random(360);
              let x = r * Math.sin(a) + node.x;
              let y = r * Math.cos(a) + node.y;
              particles.push(
                createParticle(
                  createVector(x, y),
                  generateColor(),
                  node.particleLifetime
                )
              );
            }
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        let r = dist(particles[i].pos.x, particles[i].pos.y, node.x, node.y);

        if (node.gravityChance > 0 && random() < node.gravityChance) {
          let f = createVector(node.x, node.y);
          f.sub(particles[i].pos);
          f.setMag(
            (node.forceMultiplier * settings.canvas.resolutionScale) /
              (1 + r / settings.canvas.resolutionScale)
          );
          particles[i].applyForce(f);
        }

        if (
          node.constantForceChance > 0 &&
          random() < node.constantForceChance
        ) {
          let f = createVector(node.x, node.y);
          f.sub(particles[i].pos);
          if (r <= node.constantForceRadius * settings.canvas.resolutionScale) {
            f.setMag(
              random(
                node.insideMin * settings.canvas.resolutionScale,
                node.insideMax * settings.canvas.resolutionScale
              )
            );
          } else {
            f.setMag(
              random(
                node.outsideMin * settings.canvas.resolutionScale,
                node.outsideMax * settings.canvas.resolutionScale
              )
            );
          }
          particles[i].applyForce(f);
        }

        if (
          node.deleteParticles &&
          r <= node.deleteRadius * settings.canvas.resolutionScale &&
          random() < node.deleteChance
        ) {
          particles.splice(i, 1);
        }
      }
    }
  }

  for (let i = 0; i < particles.length; i++) {
    if (random() <= settings.colors.image.updateColorChance) {
      updateParticleColorFromImage(particles[i]);
    }

    if (settings.colors.showParticles) {
      strokeWeight(
        settings.colors.particleSettings.strokeWeight *
          settings.canvas.resolutionScale
      );
      particles[i].show(
        settings.colors.particleSettings.particleWidth *
          settings.canvas.resolutionScale,
        settings.colors.particleSettings.particleHeight *
          settings.canvas.resolutionScale,
        settings.colors.particleSettings.drawOutline,
        settings.colors.particleSettings.particleOutlineColor,
        settings.colors.particleSettings.particleOutlineAlpha
      );
    }

    if (settings.bounceEdges) {
      particles[i].bounceCanvasEdge();
    }

    if (settings.mouseAttractsParticles) {
      particles[i].mouseAttract(
        settings.mouseAttractionRange * settings.canvas.resolutionScale
      );
    }

    if (random() < settings.velocitySettings.changeForceChance) {
      if (random() < settings.velocitySettings.changeDirectionChance) {
        particles[i].vel.rotate(
          random(
            settings.velocitySettings.rotationBoundaries.min,
            settings.velocitySettings.rotationBoundaries.max
          )
        );
      }
      if (random() < settings.velocitySettings.changeMagnitudeChance) {
        particles[i].vel.setMag(
          particles[i].vel.mag() *
            random(
              settings.velocitySettings.magnitudeBoundaries.min *
                settings.canvas.resolutionScale,
              settings.velocitySettings.magnitudeBoundaries.max *
                settings.canvas.resolutionScale
            )
        );
      }
      if (random() < settings.velocitySettings.randomForceChance) {
        particles[i].applyForce(
          createVector(
            random(
              settings.velocitySettings.randomForce.minX *
                settings.canvas.resolutionScale,
              settings.velocitySettings.randomForce.maxX *
                settings.canvas.resolutionScale
            ),
            random(
              settings.velocitySettings.randomForce.minY *
                settings.canvas.resolutionScale,
              settings.velocitySettings.randomForce.maxY *
                settings.canvas.resolutionScale
            )
          )
        );
      }
    }

    if (settings.lines.connectPoints) {
      let points = qtree.query(
        new Circle(
          particles[i].pos.x,
          particles[i].pos.y,
          settings.lines.maxLineDist * settings.canvas.resolutionScale
        )
      );
      for (let point of points) {
        if (particles[i] != point) {
          stroke(
            lerpColor(particles[i].color, point.color, settings.lines.lerpValue)
          );
          strokeWeight(
            settings.lines.strokeWeight * settings.canvas.resolutionScale
          );
          line(
            particles[i].pos.x,
            particles[i].pos.y,
            point.pos.x,
            point.pos.y
          );
          if (
            settings.lines.changeSpeedConnected &&
            random() < settings.lines.changeSpeedChance
          ) {
            point.vel.mult(settings.lines.changeSpeedBy);
          }
        } else {
          point.checked = true;
        }
      }
    }

    particles[i].capVel(
      settings.velocitySettings.maxVelocity * settings.canvas.resolutionScale,
      settings.velocitySettings.lockAxis.xAxis,
      settings.velocitySettings.lockAxis.yAxis
    );

    particles[i].update();

    if (particles[i].lifetime !== 0 || end) {
      particles[i].age += 1;
      let alpha = particles[i].color._getAlpha();
      if ((particles[i].age >= particles[i].lifetime && !end) || alpha <= 0) {
        particles.splice(i, 1);
      } else if (
        particles[i].age >=
        particles[i].lifetime - alpha / settings.particleDeathSpeed
      ) {
        particles[i].color.setAlpha(alpha - settings.particleDeathSpeed);
      }
    }
  }
}

function toggleLoop() {
  doLoop = !doLoop;
  if (doLoop) {
    loop();
    gui.controllers["settings.Pause (Space)"].name("Pause (Space)");
  } else {
    noLoop();
    gui.controllers["settings.Pause (Space)"].name("Play (Space)");
  }
}

function importImage() {
  let imgInput = createFileInput(handleFile);
  imgInput.elt.style.display = "none";
  imgInput.elt.click();
}

function handleFile(file) {
  sampledImg = loadImage(file.data);
  //real good solution to the image load time here.
  setTimeout(function() {
    settings.canvas.height = sampledImg.height;
    settings.canvas.width = sampledImg.width;
    settings.canvas.resolutionScale = 1;
    resetSketch();
  }, 500);
}

function updateParticleColorFromImage(particle) {
  if (
    sampledImg !== undefined &&
    settings.colors.particleColorType === "image"
  ) {
    let c = sampledImg.get(particle.pos.x, particle.pos.y);
    c[3] = alpha(particle.color);
    particle.color = color(...c);
  }
}

function generateColor() {
  let colorType = settings.colors.particleColorType;
  let c;
  if (colorType === "randomRGBA") {
    colorMode(RGB, 255);
    c = color(
      random(
        settings.colors.randomRGBA.redMin,
        settings.colors.randomRGBA.redMax
      ),
      random(
        settings.colors.randomRGBA.greenMin,
        settings.colors.randomRGBA.greenMax
      ),
      random(
        settings.colors.randomRGBA.blueMin,
        settings.colors.randomRGBA.blueMax
      ),
      random(
        settings.colors.randomRGBA.alphaMin,
        settings.colors.randomRGBA.alphaMax
      )
    );
  } else if (colorType === "randomHSLA") {
    colorMode(HSL, 255);
    let hue = random(
      settings.colors.randomHSLA.hueMin,
      settings.colors.randomHSLA.hueMax
    );
    if (settings.colors.randomHSLA.boostRed) {
      hue = Math.pow(hue, 2) / 255;
    }
    c = color(
      hue,
      random(
        settings.colors.randomHSLA.saturationMin,
        settings.colors.randomHSLA.saturationMax
      ),
      random(
        settings.colors.randomHSLA.lightnessMin,
        settings.colors.randomHSLA.lightnessMax
      ),
      random(
        settings.colors.randomHSLA.alphaMin,
        settings.colors.randomHSLA.alphaMax
      )
    );
  } else if (colorType === "gradient") {
    colorMode(RGB, 255);
    c = lerpColor(
      color(settings.colors.gradient.firstColor),
      color(settings.colors.gradient.secondColor),
      random()
    );
    c.setAlpha(
      random(
        settings.colors.gradient.alphaMin,
        settings.colors.gradient.alphaMax
      )
    );
  } else {
    colorMode(RGB, 255);
    c = color(settings.colors.image.initColor);
    c.setAlpha(
      random(settings.colors.image.alphaMin, settings.colors.image.alphaMax)
    );
  }
  return c;
}

function createParticle(origin, color, lifetime) {
  let particle = new Particle(origin, color);
  particle.applyForce(
    createVector(
      random(
        settings.velocitySettings.startingVelocity.minX *
          settings.canvas.resolutionScale,
        settings.velocitySettings.startingVelocity.maxX *
          settings.canvas.resolutionScale
      ),
      random(
        settings.velocitySettings.startingVelocity.minY *
          settings.canvas.resolutionScale,
        settings.velocitySettings.startingVelocity.maxY *
          settings.canvas.resolutionScale
      )
    )
  );
  if (settings.colors.image.updateAtStart) {
    updateParticleColorFromImage(particle);
  }
  particle.age = 0;
  particle.lifetime = lifetime;
  return particle;
}

function resetSketch() {
  if (settings.useCustomSeed) {
    randomSeed(settings.seed);
  } else {
    const newSeed = parseInt(Math.random() * 1000000000000000);
    randomSeed(newSeed);
    settings.seed = newSeed;
  }

  end = false;
  frameCount = -1;
  particles = [];

  userSetupCode = document.getElementById("setup-code-area").value;
  userDrawCode = document.getElementById("draw-code-area").value;

  resizeCanvas(
    settings.canvas.width * settings.canvas.resolutionScale,
    settings.canvas.height * settings.canvas.resolutionScale
  );
  uiCanvas.resizeCanvas(
    settings.canvas.width * settings.canvas.resolutionScale,
    settings.canvas.height * settings.canvas.resolutionScale
  );

  let canvasElems = document.getElementsByClassName("p5Canvas");
  for (let elem of canvasElems) {
    elem.style.width = "";
    elem.style.height = "";
  }

  colorMode(RGB, 255);
  let bgColor = color(settings.colors.backgroundColor);
  bgColor.setAlpha(settings.colors.backgroundAlpha);
  background(bgColor);

  if (
    sampledImg === undefined &&
    settings.colors.particleColorType === "image"
  ) {
    alert("Please select an image.");
    importImage();
  }

  qtree = new QuadTree(new Rectangle(0, 0, width / 2, height / 2), 1);

  if (pageIsLoaded) {
    if (width > height) {
      gui.controllers["settings.velocitySettings.maxVelocity"].__max =
        settings.canvas.width * 0.04 * settings.canvas.resolutionScale;
      gui.controllers["settings.lines.maxLineDist"].__max =
        settings.canvas.width * 0.25 * settings.canvas.resolutionScale;
    } else {
      gui.controllers["settings.velocitySettings.maxVelocity"].__max =
        settings.canvas.height * 0.04 * settings.canvas.resolutionScale;
      gui.controllers["settings.lines.maxLineDist"].__max =
        settings.canvas.height * 0.25 * settings.canvas.resolutionScale;
    }
    gui.controllers["settings.canvas.trueResolution"].setValue(
      parseInt(settings.canvas.width * settings.canvas.resolutionScale) +
        " x " +
        parseInt(settings.canvas.height * settings.canvas.resolutionScale)
    );
    gui.updateAllDisplays();
  }

  if (useCustomCode) {
    try {
      eval(userSetupCode);
    } catch (e) {
      console.error(e.message);
    }
  }
}

function toggleCodeArea() {
  let codeAreaElement = document.getElementById("code-area-container");
  showCodeArea = !showCodeArea;
  if (showCodeArea) {
    codeAreaElement.style.display = "block";
    if (innerWidth >= 1000) {
      codeAreaElement.children[2].cols = 60;
      codeAreaElement.children[5].cols = 60;
    } else {
      codeAreaElement.children[2].cols = 30;
      codeAreaElement.children[5].cols = 30;
    }
  } else {
    codeAreaElement.style.display = "none";
  }
}

function getEncodedSettingsString() {
  let changedSettings = {};
  let sameAsPreset = true;

  if (
    defaultPresets.hasOwnProperty(gui.controllers.presetSelector.getValue())
  ) {
    let preset = defaultPresets[gui.controllers.presetSelector.getValue()];

    if (preset._other !== undefined) {
      if (
        (preset._other.userDrawCode !== undefined &&
          userDrawCode !== preset._other.userDrawCode) ||
        (preset._other.userSetupCode !== undefined &&
          userSetupCode !== preset._other.userSetupCode)
      ) {
        sameAsPreset = false;
      } else {
        if (nodes.length === preset._other.nodes.length) {
          for (let i of preset._other.nodes) {
            for (let k in preset._other.nodes[i]) {
              if (nodes[i][k] !== preset._other.nodes[i][k]) {
                sameAsPreset = false;
                break;
              }
            }
          }
        } else {
          sameAsPreset = false;
        }
      }
    }

    if (sameAsPreset) {
      for (let i in gui.controllers) {
        if (
          ![
            "presetSave",
            "presetSelector",
            "settings.seed",
            "settings.canvas.trueResolution"
          ].includes(i) &&
          gui.controllers[i].hasOwnProperty("__li")
        ) {
          let c = gui.controllers[i];
          if (typeof c.getValue() === "number") {
            if (
              defaultPresets[
                gui.controllers.presetSelector.getValue()
              ].hasOwnProperty(i)
            ) {
              if (c.getValue().toFixed(6) !== preset[i].toFixed(6)) {
                sameAsPreset = false;
                break;
              }
            } else if (c.getValue().toFixed(6) !== c.initialValue.toFixed(6)) {
              sameAsPreset = false;
              break;
            }
          } else {
            if (
              defaultPresets[
                gui.controllers.presetSelector.getValue()
              ].hasOwnProperty(i)
            ) {
              if (c.getValue() !== preset[i]) {
                sameAsPreset = false;
                break;
              }
            } else if (c.getValue() !== c.initialValue) {
              sameAsPreset = false;
              break;
            }
          }
        }
      }
    }
  } else {
    sameAsPreset = false;
  }

  if (sameAsPreset) {
    changedSettings[
      "presetSelector"
    ] = gui.controllers.presetSelector.getValue();
    return btoa(JSON.stringify(changedSettings));
  } else {
    let otherSettings = {};
    if (userDrawCode !== "") {
      otherSettings.userDrawCode = userDrawCode;
    }
    if (userSetupCode !== "") {
      otherSettings.userSetupCode = userSetupCode;
    }
    if (nodes.length > 0) {
      otherSettings.nodes = exportNodes();
    }
    if (Object.keys(otherSettings).length > 0) {
      changedSettings = {
        _other: otherSettings
      };
    }

    for (let i in gui.controllers) {
      let controller = gui.controllers[i];
      if (
        ![
          "presetSelector",
          "presetSave",
          "settings.seed",
          "settings.canvas.trueResolution"
        ].includes(i) &&
        controller.hasOwnProperty("__li") &&
        controller.getValue() !== controller.initialValue
      ) {
        changedSettings[i] = controller.getValue();
      } else if (i === "settings.seed" && settings.useCustomSeed) {
        changedSettings[i] = controller.getValue();
      }
    }

    if (Object.keys(changedSettings).length > 0) {
      return btoa(JSON.stringify(changedSettings));
    } else {
      return "";
    }
  }
}

function share() {
  let textArea = document.createElement("textarea");
  let URL =
    window.location.origin +
    window.location.pathname +
    "#!" +
    getEncodedSettingsString();
  textArea.value = URL;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  alert("Link has been copied to your clipboard.\n" + URL.substring(0, 150));
}

function updateSettingsFromURL() {
  if (window.location.hash.length > 2) {
    let URLSettings = JSON.parse(atob(window.location.hash.substr(2)));
    if (URLSettings.hasOwnProperty("presetSelector")) {
      gui.controllers.presetSelector.setValue(URLSettings.presetSelector);
    } else {
      for (let i in gui.controllers) {
        let controller = gui.controllers[i];
        if (controller.hasOwnProperty("__li")) {
          if (URLSettings.hasOwnProperty(i)) {
            controller.setValue(URLSettings[i]);
          }
        }
      }
      if (URLSettings._other !== undefined) {
        if (
          URLSettings._other.userDrawCode !== undefined ||
          URLSettings._other.userSetupCode !== undefined
        ) {
          alert(
            "Custom user code has been set. \nTo enable this, press C and enable the checkbox."
          );
          if (URLSettings._other.userDrawCode !== undefined) {
            document.getElementById("draw-code-area").value =
              URLSettings._other.userDrawCode;
          }
          if (URLSettings._other.userSetupCode !== undefined) {
            document.getElementById("setup-code-area").value =
              URLSettings._other.userSetupCode;
          }
          showCodeArea = false;
          toggleCodeArea();
        }
        if (URLSettings._other.nodes !== undefined) {
          nodes = [];
          for (let i = 0; i < URLSettings._other.nodes.length; i++) {
            nodes[i] = Object.assign({}, defaultNode);
            for (let k in URLSettings._other.nodes[i]) {
              nodes[i][k] = URLSettings._other.nodes[i][k];
            }
          }
          refreshNodesGUI();
        }
      }
    }
  }
}

function addNode(x, y) {
  let newNode = Object.assign({}, defaultNode);
  newNode.removeNode = () => {
    nodes.splice(nodes.length, 1);
    refreshNodesGUI();
  };
  newNode.duplicateNode = () => {
    nodes.splice(nodes.length, 0, Object.assign({}, newNode));
    refreshNodesGUI();
  };
  newNode.initX = x / settings.canvas.resolutionScale;
  newNode.initY = y / settings.canvas.resolutionScale;

  nodes.push(newNode);
  refreshNodesGUI();
}

function resetNodes() {
  nodes = [];
  refreshNodesGUI();
}

function exportNodes() {
  let nodesExport = [];
  for (let i = 0; i < nodes.length; i++) {
    nodesExport[i] = Object.assign({}, nodes[i]);
  }
  for (let node of nodesExport) {
    delete node.removeNode;
    delete node.__active;
    delete node.x;
    delete node.y;
    for (let i in node) {
      if (node[i] === defaultNode[i]) {
        delete node[i];
      }
    }
  }
  return nodesExport;
}

function refreshNodesGUI() {
  for (let folder in gui.controllers["settings.nodeSettings.nodes"].__folders) {
    gui.controllers["settings.nodeSettings.nodes"].removeFolder(
      gui.controllers["settings.nodeSettings.nodes"].__folders[folder]
    );
  }
  for (let node of nodes) {
    let nodeFolder = gui.controllers["settings.nodeSettings.nodes"].addFolder(
      Object.keys(gui.controllers["settings.nodeSettings.nodes"].__folders)
        .length
    );
    node.folder = nodeFolder;

    nodeFolder.add(node, "removeNode");
    nodeFolder.add(node, "duplicateNode");

    let gravityForceFolder = nodeFolder.addFolder("force / distance");
    gravityForceFolder.open();
    gravityForceFolder.add(node, "gravityChance", 0, 1, 0.0001);
    gravityForceFolder.add(node, "forceMultiplier", undefined, undefined, 0.01);

    let constantForceFolder = nodeFolder.addFolder(
      "Inside/Outside Radius, Random Constant Force"
    );
    constantForceFolder.add(node, "constantForceChance", 0, 1, 0.0001);
    constantForceFolder.add(node, "constantForceRadius", 0);
    let inside = constantForceFolder.addFolder("inside");
    inside.open();
    inside.add(node, "insideChance", 0, 1, 0.001);
    inside.add(node, "insideMin", undefined, undefined, 0.001);
    inside.add(node, "insideMax", undefined, undefined, 0.001);
    let extra = inside.addFolder("extra");
    extra.add(node, "extraChance", 0, 1, 0.001);
    extra.add(node, "extraMin", undefined, undefined, 0.001);
    extra.add(node, "extraMax", undefined, undefined, 0.001);
    let outside = constantForceFolder.addFolder("outside");
    outside.open();
    outside.add(node, "outsideChance", 0, 1, 0.001);
    outside.add(node, "outsideMin", undefined, undefined, 0.001);
    outside.add(node, "outsideMax", undefined, undefined, 0.001);

    let positioning = nodeFolder.addFolder("positioning");
    positioning.open();
    positioning.add(node, "initX").step(1);
    positioning.add(node, "initY").step(1);
    positioning.add(node, "useEquations");
    positioning
      .add(node, "xEquation")
      .name(
        "(xEquation) <span style='float:right;transform:translateX(-2ch);'>x =</span>"
      );
    positioning
      .add(node, "yEquation")
      .name(
        "(yEquation) <span style='float:right;transform:translateX(-2ch);'>y =</span>"
      );

    let spawning = nodeFolder.addFolder("spawning");
    spawning.add(node, "spawnParticles");
    spawning.add(node, "spawnOnlyAtStart");
    spawning.add(node, "spawnChance", 0, 1, 0.001);
    spawning.add(node, "spawnCount", 0, undefined, 1);
    spawning.add(node, "spawnRadiusMin", 0, undefined, 1);
    spawning.add(node, "spawnRadiusMax", 0, undefined, 1);
    spawning
      .add(node, "particleLifetime", 0, undefined, 1)
      .name("particleLifetime (frames, 0 = \u221E)");

    let deleting = nodeFolder.addFolder("deleting");
    deleting.add(node, "deleteParticles");
    deleting.add(node, "deleteChance", 0, 1, 0.001);
    deleting.add(node, "deleteRadius", 0, undefined, 1);

    for (let i in nodeFolder.__controllers) {
      addControllerKeyListenToggle(nodeFolder.__controllers[i]);
    }

    if (nodes.indexOf(node) === nodes.length - 1) {
      nodeFolder.open();
    }

    nodeFolder.domElement.onmouseenter = () => {
      node.__active = true;
    };

    nodeFolder.domElement.onmouseleave = () => {
      node.__active = false;
    };
  }
}

function addControllerKeyListenToggle(controller) {
  if (controller.domElement.firstChild.tagName === "INPUT") {
    controller.domElement.firstChild.onfocus = () => {
      listenForKeys = false;
    };
    controller.domElement.firstChild.onblur = () => {
      listenForKeys = true;
    };
  } else if (
    controller.domElement.firstChild.firstChild !== null &&
    controller.domElement.firstChild.firstChild.tagName === "INPUT"
  ) {
    controller.domElement.firstChild.firstChild.onfocus = () => {
      listenForKeys = false;
    };
    controller.domElement.firstChild.firstChild.onblur = () => {
      listenForKeys = true;
    };
  }
}

window.onload = () => {
  document.onkeypress = function(e) {
    e = e || window.event;
    if (listenForKeys) {
      if (e.key === "r") {
        resetSketch();
      } else if (e.key === "s") {
        saveCanvas(canvas, "central-vibrance", "png");
      } else if (e.key === "e") {
        end = true;
      } else if (e.key === "c") {
        toggleCodeArea();
      } else if (e.key === "g") {
        showAllGUIs = !showAllGUIs;
      } else if (e.key === "h") {
        gui.isHidden = !gui.isHidden;
        document.getElementById("canvas-container").style.width =
          gui.closed || gui.isHidden ? "100vw" : "calc(100vw - 450px)";
        document.getElementById("canvas-container").style.left =
          gui.closed || gui.isHidden ? "0" : "50px";
        if (gui.isHidden) {
          gui.domElement.style.display = "none";
          uiCanvas.canvas.style.display = "none";
          uiCanvas.noLoop();
        } else {
          gui.domElement.style.display = "";
          uiCanvas.canvas.style.display = "";
          uiCanvas.loop();
        }
      } else if (e.key === " ") {
        toggleLoop();
      } else if (e.key === ".") {
        if (!doLoop) {
          draw();
        }
      }
    }
  };

  document.onmousedown = function(e) {
    e = e || window.event;
    if (listenForMouse) {
      if (e.ctrlKey && e.button === 0) {
        addNode(
          parseInt(mouseX - width / 2 - settings.canvas.translateCenterX),
          parseInt(mouseY - height / 2 - settings.canvas.translateCenterY)
        );
      } else if (e.shiftKey && e.button === 0) {
        particles.push(
          createParticle(
            createVector(
              mouseX - width / 2 - settings.canvas.translateCenterX,
              mouseY - height / 2 - settings.canvas.translateCenterY
            ),
            generateColor(),
            settings.particleLifetime
          )
        );
      }
    }
  };

  gui = new AutoGUI({ width: 350, hideable: false });
  gui.isHidden = false;
  gui.enablePresets(defaultPresets, "centralVibrance.userPresets");
  gui.autoAdd(settings, "settings");
  gui.presetControllers.presetSave = () => {
    let otherSettings = {};

    if (userDrawCode !== "") {
      otherSettings.userDrawCode = userDrawCode;
    }

    if (userSetupCode !== "") {
      otherSettings.userSetupCode = userSetupCode;
    }

    if (nodes.length > 0) {
      otherSettings.nodes = exportNodes();
    }

    if (Object.keys(otherSettings).length > 0) {
      gui.savePreset(otherSettings);
    } else {
      gui.savePreset();
    }
  };

  gui.sticky("settings.Reset Canvas (r)");
  gui.sticky("settings.Save As PNG (s)");
  gui.sticky("settings.Show Code Area (c)");
  gui.sticky("settings.Collapse All Folders");
  gui.addMenuFolderSwitch(
    "settings.colors.particleColorType",
    "settings.colors",
    ["particleSettings"]
  );
  gui.presetsChanged = value => {
    sampledImg = undefined;
    document.getElementById("draw-code-area").value = "";
    document.getElementById("setup-code-area").value = "";
    resetNodes();
    if (
      value !== "Default" &&
      gui.presets[gui.controllers.presetSelector.getValue()]._other !==
        undefined
    ) {
      let other = gui.presets[gui.controllers.presetSelector.getValue()]._other;
      if (
        other.userDrawCode !== undefined ||
        other.userSetupCode !== undefined
      ) {
        if (other.userDrawCode !== undefined) {
          document.getElementById("draw-code-area").value =
            gui.presets[
              gui.controllers.presetSelector.getValue()
            ]._other.userDrawCode;
        }

        if (other.userSetupCode !== undefined) {
          document.getElementById("setup-code-area").value =
            gui.presets[
              gui.controllers.presetSelector.getValue()
            ]._other.userSetupCode;
        }

        document.getElementById("use-custom-code-checkbox").checked = true;
        useCustomCode = true;
      }
      if (other.nodes !== undefined) {
        nodes = [];
        for (let i = 0; i < other.nodes.length; i++) {
          nodes[i] = Object.assign({}, defaultNode);
          for (let k in other.nodes[i]) {
            nodes[i][k] = other.nodes[i][k];
          }
        }
        refreshNodesGUI();
      }
    }
    loop();
    resetSketch();
    let fragment = getEncodedSettingsString();
    if (
      fragment.length > 2 &&
      JSON.parse(atob(fragment)).hasOwnProperty("presetSelector")
    ) {
      window.location.replace("#!" + fragment);
    } else {
      window.location.replace("#!");
    }
  };

  if (windowWidth < 700) {
    gui.width = windowWidth;
    gui.__closeButton.click();
  } else {
    gui.width = 350;
  }

  for (let i in gui.controllers) {
    let controller = gui.controllers[i];
    if (
      !["presetSave", "presetSelector"].includes(i) &&
      controller.hasOwnProperty("__li")
    ) {
      addControllerKeyListenToggle(controller);
    }
  }

  pageIsLoaded = true;

  gui.__closeButton.onclick = () => {
    document.getElementById("canvas-container").style.width = gui.closed
      ? "100vw"
      : "calc(100vw - 450px)";
    document.getElementById("canvas-container").style.left = gui.closed
      ? "0"
      : "50px";
  };

  gui.domElement.style.marginRight = 0;

  gui.domElement.onmouseenter = () => {
    listenForMouse = false;
  };

  gui.domElement.onmouseleave = () => {
    listenForMouse = true;
  };

  gui.controllers["settings.timeScale"].__li.onmouseenter = () => {
    settings.__showTimeScale = true;
  };

  gui.controllers["settings.timeScale"].__li.onmouseleave = () => {
    settings.__showTimeScale = false;
  };

  gui.controllers["settings.nodeSettings"].domElement.onmouseenter = () => {
    settings.nodeSettings.__show = true;
  };

  gui.controllers["settings.nodeSettings"].domElement.onmouseleave = () => {
    settings.nodeSettings.__show = false;
  };

  gui.controllers["settings.particleDeathSpeed"].onFinishChange(value => {
    gui.controllers["settings.particleLifetime"].min(255 / value);
    currentLifetime = gui.controllers["settings.particleLifetime"].getValue();
    if (currentLifetime > 0 && currentLifetime < 255 / value) {
      gui.controllers["settings.particleLifetime"].setValue(255 / value);
    }
  });

  gui.controllers["settings.canvas.trueResolution"].onFinishChange(value => {
    valueArray = split(value, " ");
    if (
      gui.controllers["settings.canvas.width"].getValue() !==
      valueArray[0] / settings.canvas.resolutionScale
    ) {
      gui.controllers["settings.canvas.width"].setValue(
        valueArray[0] / settings.canvas.resolutionScale
      );
    }
    if (
      gui.controllers["settings.canvas.height"].getValue() !==
      valueArray[2] / settings.canvas.resolutionScale
    ) {
      gui.controllers["settings.canvas.height"].setValue(
        valueArray[2] / settings.canvas.resolutionScale
      );
    }
  });

  let updateTrueRes = () => {
    gui.controllers["settings.canvas.trueResolution"].setValue(
      parseInt(settings.canvas.width * settings.canvas.resolutionScale) +
        " x " +
        parseInt(settings.canvas.height * settings.canvas.resolutionScale)
    );
  };
  gui.controllers["settings.canvas.width"].onFinishChange(updateTrueRes);
  gui.controllers["settings.canvas.height"].onFinishChange(updateTrueRes);
  gui.controllers["settings.canvas.resolutionScale"].onFinishChange(() => {
    updateTrueRes();
    resetSketch();
  });

  document.getElementById("use-custom-code-checkbox").onchange = e => {
    useCustomCode = e.srcElement.checked;
  };

  let drawCodeArea = document.getElementById("draw-code-area");

  drawCodeArea.oninput = () => {
    userDrawCode = drawCodeArea.value;
  };

  drawCodeArea.onfocus = () => {
    listenForKeys = false;
  };

  drawCodeArea.onblur = () => {
    listenForKeys = true;
  };

  let startCodeArea = document.getElementById("setup-code-area");

  startCodeArea.oninput = () => {
    userSetupCode = startCodeArea.value;
  };

  startCodeArea.onfocus = () => {
    listenForKeys = false;
  };

  startCodeArea.onblur = () => {
    listenForKeys = true;
  };

  addNode(0, 0);
  updateSettingsFromURL();
  resetSketch();
};

const defaultPresets = {
  Butterfly: {
    _other: {
      nodes: [
        {
          gravityChance: 1,
          forceMultiplier: 2,
          initX: 0,
          initY: 0,
          useEquations: true,
          xEquation:
            "100 * sin(t) * (pow(e,cos(t)) - 2 * cos (4 * t) - pow(sin (t / 12),5))",
          yEquation:
            "-50 + 100 * cos(t) * (pow(e,cos(t)) - 2 * cos (4 * t) - pow(sin (t / 12),5))"
        },
        {
          gravityChance: 1,
          forceMultiplier: 2,
          initX: 0,
          initY: 0,
          useEquations: true,
          xEquation: "300 * sin(3 * t)",
          yEquation: "300 * cos(3 * t)"
        }
      ]
    },
    "settings.timeScale": 0.3,
    "settings.particleCount": 173,
    "settings.canvas.width": 1000,
    "settings.canvas.height": 1000,
    "settings.originRadius.max": 42,
    "settings.velocitySettings.maxVelocity": 2,
    "settings.velocitySettings.changeForceChance": 0,
    "settings.velocitySettings.randomForceChance": 0,
    "settings.colors.showParticles": true,
    "settings.colors.particleSettings.particleWidth": 2,
    "settings.colors.particleSettings.particleHeight": 2,
    "settings.colors.particleColorType": "randomHSLA",
    "settings.colors.randomHSLA.boostRed": true,
    "settings.lines.changeSpeedConnected": false,
    "settings.lines.changeSpeedBy": 1.61,
    "settings.centerAttractionForce.attractParticlesToCenter": false
  },
  "Line Dot Turn": {
    _other: {
      userDrawCode:
        "if (random() < 0.4) {\n  for (let i = 0; i < particles.length; i++) {\n    particles[i].color = generateColor()\n  }\n}\n\nif (frameCount == 20) {\n  settings.colors.showParticles = false\n  settings.lines.connectPoints = false\n}\n\nif (frameCount == 60) {\n  settings.seed += 1\n  settings.velocitySettings.rotationBoundaries.min = Math.sin(settings.seed * 0.19625 + 1.57) * 90\n  settings.velocitySettings.rotationBoundaries.max = Math.sin(settings.seed * 0.19625 + 1.57) * 90\n  resetSketch()\n}",
      userSetupCode:
        "setFrameRate(60)\nsettings.colors.showParticles = true\nsettings.lines.connectPoints = true"
    },
    "settings.seed": -1,
    "settings.useCustomSeed": true,
    "settings.canvas.width": 1080,
    "settings.canvas.height": 1080,
    "settings.originRadius.max": 400,
    "settings.particleCount": 40,
    "settings.velocitySettings.maxVelocity": 20,
    "settings.velocitySettings.changeForceChance": 1,
    "settings.velocitySettings.magnitudeBoundaries.min": 10,
    "settings.velocitySettings.magnitudeBoundaries.max": 10,
    "settings.velocitySettings.changeDirectionChance": 0.23,
    "settings.velocitySettings.rotationBoundaries.min": 0,
    "settings.velocitySettings.rotationBoundaries.max": 0,
    "settings.velocitySettings.randomForceChance": 0,
    "settings.colors.particleSettings.particleWidth": 16,
    "settings.colors.particleSettings.particleHeight": 16,
    "settings.colors.particleSettings.drawOutline": false,
    "settings.colors.particleColorType": "randomHSLA",
    "settings.colors.randomHSLA.hueMin": 109,
    "settings.colors.randomHSLA.hueMax": 226,
    "settings.colors.randomHSLA.saturationMin": 109,
    "settings.colors.randomHSLA.saturationMax": 123,
    "settings.colors.randomHSLA.lightnessMin": 55,
    "settings.lines.strokeWeight": 4,
    "settings.lines.changeSpeedConnected": false,
    "settings.lines.maxLineDist": 70,
    "settings.centerAttractionForce.attractParticlesToCenter": false,
    "settings.centerAttractionForce.chance": 0.05
  },
  Smoke: {
    "settings.originRadius.max": 300,
    "settings.bounceEdges": true,
    "settings.velocitySettings.startingVelocity.minX": -2,
    "settings.velocitySettings.startingVelocity.minY": -2,
    "settings.velocitySettings.startingVelocity.maxX": 2,
    "settings.velocitySettings.startingVelocity.maxY": 2,
    "settings.velocitySettings.maxVelocity": 2.3,
    "settings.mouseAttractsParticles": true,
    "settings.colors.showParticles": true,
    "settings.colors.particleSettings.particleWidth": 2,
    "settings.colors.particleSettings.particleHeight": 2,
    "settings.colors.particleSettings.drawOutline": false,
    "settings.colors.particleSettings.particleOutlineColor": "#000000",
    "settings.colors.backgroundColor": "#81848a",
    "settings.colors.particleColorType": "gradient",
    "settings.colors.gradient.alphaMin": 5,
    "settings.colors.gradient.alphaMax": 45,
    "settings.lines.slowWhenConnected": false,
    "settings.centerAttractionForce.radius": 250,
    "settings.centerAttractionForce.outside.max": 10,
    "settings.centerAttractionForce.inside.min": 0,
    "settings.centerAttractionForce.inside.max": 5,
    "settings.centerAttractionForce.extra.chance": 0.6,
    "settings.centerAttractionForce.extra.max": 0
  },
  Monochrome: {
    "settings.originRadius.max": 400,
    "settings.bounceEdges": true,
    "settings.velocitySettings.startingVelocity.minX": -2,
    "settings.velocitySettings.startingVelocity.minY": -2,
    "settings.velocitySettings.startingVelocity.maxX": 2,
    "settings.velocitySettings.startingVelocity.maxY": 2,
    "settings.velocitySettings.maxVelocity": 3,
    "settings.colors.showParticles": true,
    "settings.colors.particleSettings.particleWidth": 2,
    "settings.colors.particleSettings.particleHeight": 2,
    "settings.colors.particleSettings.drawOutline": false,
    "settings.colors.particleSettings.particleOutlineColor": "#000000",
    "settings.colors.backgroundColor": "#3557a8",
    "settings.colors.particleColorType": "gradient",
    "settings.colors.gradient.alphaMin": 5,
    "settings.colors.gradient.alphaMax": 45,
    "settings.lines.slowWhenConnected": false,
    "settings.centerAttractionForce.radius": 1,
    "settings.centerAttractionForce.outside.max": 5,
    "settings.centerAttractionForce.inside.min": -1,
    "settings.centerAttractionForce.inside.max": 1,
    "settings.centerAttractionForce.extra.chance": 0.1,
    "settings.centerAttractionForce.extra.max": 1,
    "settings.particleCount": 200,
    "settings.velocitySettings.lockAxis.yAxis": true,
    "settings.colors.gradient.firstColor": "#bbf3ff",
    "settings.colors.gradient.secondColor": "#98b6ff",
    "settings.lines.maxLineDist": 20,
    "settings.centerAttractionForce.outside.min": -4,
    "settings.centerAttractionForce.extra.min": -1
  },
  Points: {
    "settings.originRadius.ignoreRadius": true,
    "settings.originRadius.max": 400,
    "settings.particleCount": 200,
    "settings.mouseAttractsParticles": true,
    "settings.mouseAttractionRange": 150,
    "settings.bounceEdges": true,
    "settings.drawTrails": false,
    "settings.velocitySettings.startingVelocity.minX": -2,
    "settings.velocitySettings.startingVelocity.minY": -2,
    "settings.velocitySettings.startingVelocity.maxX": 2,
    "settings.velocitySettings.startingVelocity.maxY": 2,
    "settings.velocitySettings.maxVelocity": 10,
    "settings.colors.showParticles": true,
    "settings.colors.particleSettings.particleWidth": 10,
    "settings.colors.particleSettings.particleHeight": 10,
    "settings.colors.particleSettings.drawOutline": false,
    "settings.colors.particleSettings.particleOutlineColor": "#000000",
    "settings.colors.backgroundColor": "#ffffff",
    "settings.colors.particleColorType": "gradient",
    "settings.colors.gradient.firstColor": "#000000",
    "settings.colors.gradient.alphaMin": 37,
    "settings.colors.gradient.alphaMax": 236,
    "settings.lines.changeSpeedConnected": false,
    "settings.lines.changeSpeedBy": 1,
    "settings.centerAttractionForce.attractParticlesToCenter": false,
    "settings.centerAttractionForce.chance": 0.1,
    "settings.centerAttractionForce.radius": 210,
    "settings.centerAttractionForce.outside.min": 0,
    "settings.centerAttractionForce.outside.max": 0,
    "settings.centerAttractionForce.extra.chance": 0.1,
    "settings.centerAttractionForce.extra.min": -10,
    "settings.centerAttractionForce.extra.max": 0
  },
  Neon: {
    "settings.originRadius.max": 480,
    "settings.particleCount": 400,
    "settings.mouseAttractsParticles": true,
    "settings.mouseAttractionRange": 150,
    "settings.bounceEdges": true,
    "settings.drawTrails": true,
    "settings.velocitySettings.startingVelocity.minX": -2,
    "settings.velocitySettings.startingVelocity.minY": -2,
    "settings.velocitySettings.startingVelocity.maxX": 2,
    "settings.velocitySettings.startingVelocity.maxY": 2,
    "settings.velocitySettings.maxVelocity": 4,
    "settings.colors.showParticles": true,
    "settings.colors.particleSettings.particleWidth": 1,
    "settings.colors.particleSettings.particleHeight": 1,
    "settings.colors.particleSettings.drawOutline": false,
    "settings.colors.particleSettings.particleOutlineColor": "#000000",
    "settings.colors.backgroundColor": "#2d0f28",
    "settings.colors.particleColorType": "randomHSLA",
    "settings.colors.randomHSLA.saturationMin": 160,
    "settings.colors.randomHSLA.lightnessMin": 140,
    "settings.colors.gradient.firstColor": "#4179ff",
    "settings.colors.gradient.alphaMin": 8,
    "settings.colors.gradient.alphaMax": 236,
    "settings.lines.changeSpeedConnected": false,
    "settings.lines.changeSpeedBy": 1.1,
    "settings.centerAttractionForce.attractParticlesToCenter": false,
    "settings.centerAttractionForce.chance": 0.1052,
    "settings.centerAttractionForce.radius": 209,
    "settings.centerAttractionForce.outside.min": 0,
    "settings.centerAttractionForce.outside.max": 3,
    "settings.centerAttractionForce.extra.chance": 0.5,
    "settings.centerAttractionForce.extra.min": -10,
    "settings.centerAttractionForce.extra.max": 0,
    "settings.originRadius.min": 263,
    "settings.velocitySettings.lockAxis.xAxis": true,
    "settings.colors.particleSettings.particleOutlineAlpha": 20,
    "settings.colors.randomHSLA.hueMin": 244,
    "settings.colors.randomHSLA.hueMax": 63,
    "settings.colors.randomHSLA.lightnessMax": 189,
    "settings.colors.randomHSLA.alphaMax": 35,
    "settings.colors.gradient.secondColor": "#ff9232"
  },
  Fusion: {
    "settings.originRadius.max": 350,
    "settings.particleCount": 400,
    "settings.mouseAttractionRange": 240,
    "settings.drawTrails": false,
    "settings.velocitySettings.startingVelocity.minX": -2.2,
    "settings.velocitySettings.startingVelocity.minY": -2.2,
    "settings.velocitySettings.startingVelocity.maxX": 2.2,
    "settings.velocitySettings.startingVelocity.maxY": 2.2,
    "settings.velocitySettings.maxVelocity": 12,
    "settings.colors.showParticles": true,
    "settings.colors.particleSettings.particleWidth": 13,
    "settings.colors.particleSettings.particleHeight": 13,
    "settings.colors.particleSettings.drawOutline": false,
    "settings.colors.backgroundColor": "#212121",
    "settings.colors.backgroundAlpha": 71,
    "settings.colors.particleColorType": "gradient",
    "settings.colors.randomHSLA.hueMin": 41,
    "settings.colors.randomHSLA.saturationMin": 110,
    "settings.colors.randomHSLA.lightnessMin": 117,
    "settings.colors.randomHSLA.lightnessMax": 170,
    "settings.colors.randomHSLA.alphaMin": 119,
    "settings.colors.gradient.firstColor": "#ffe9a2",
    "settings.colors.gradient.secondColor": "#1e436e",
    "settings.colors.gradient.alphaMin": 127,
    "settings.lines.connectPoints": false,
    "settings.lines.changeSpeedConnected": false,
    "settings.lines.maxLineDist": 6,
    "settings.centerAttractionForce.chance": 0.66,
    "settings.centerAttractionForce.radius": 0,
    "settings.centerAttractionForce.outside.max": 4,
    "settings.centerAttractionForce.inside.min": -7,
    "settings.centerAttractionForce.extra.chance": 0.55
  },
  Phase: {
    "settings.originRadius.ignoreRadius": true,
    "settings.originRadius.max": 267,
    "settings.particleCount": 400,
    "settings.mouseAttractsParticles": true,
    "settings.mouseAttractionRange": 400,
    "settings.bounceEdges": true,
    "settings.drawTrails": false,
    "settings.velocitySettings.startingVelocity.minX": -2,
    "settings.velocitySettings.startingVelocity.minY": -2,
    "settings.velocitySettings.startingVelocity.maxX": 2,
    "settings.velocitySettings.startingVelocity.maxY": 2,
    "settings.velocitySettings.maxVelocity": 5,
    "settings.colors.particleSettings.particleWidth": 10,
    "settings.colors.particleSettings.particleHeight": 10,
    "settings.colors.particleSettings.drawOutline": false,
    "settings.colors.particleSettings.particleOutlineColor": "#000000",
    "settings.colors.backgroundColor": "#ffffff",
    "settings.colors.backgroundAlpha": 30,
    "settings.colors.gradient.firstColor": "#2899ff",
    "settings.colors.gradient.secondColor": "#fffe22",
    "settings.colors.gradient.alphaMin": 37,
    "settings.colors.gradient.alphaMax": 236,
    "settings.lines.changeSpeedChance": 1,
    "settings.lines.changeSpeedBy": -0.5,
    "settings.centerAttractionForce.attractParticlesToCenter": false,
    "settings.centerAttractionForce.radius": 210,
    "settings.centerAttractionForce.outside.min": 0,
    "settings.centerAttractionForce.outside.max": 0,
    "settings.centerAttractionForce.extra.chance": 0.1,
    "settings.centerAttractionForce.extra.min": -10,
    "settings.centerAttractionForce.extra.max": 0
  },
  "Draw From Image": {
    "settings.originRadius.ignoreRadius": true,
    "settings.particleCount": 200,
    "settings.bounceEdges": true,
    "settings.velocitySettings.startingVelocity.minX": -5,
    "settings.velocitySettings.startingVelocity.minY": -5,
    "settings.velocitySettings.startingVelocity.maxX": 5,
    "settings.velocitySettings.startingVelocity.maxY": 5,
    "settings.velocitySettings.maxVelocity": 3.5,
    "settings.colors.backgroundColor": "#ffffff",
    "settings.colors.particleColorType": "image",
    "settings.lines.changeSpeedConnected": false,
    "settings.lines.changeSpeedChance": 0,
    "settings.lines.maxLineDist": 75,
    "settings.centerAttractionForce.attractParticlesToCenter": false,
    "settings.centerAttractionForce.chance": 0.5328,
    "settings.centerAttractionForce.radius": 1472
  }
};
