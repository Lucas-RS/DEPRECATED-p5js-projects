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
  xEquation: "sin(t) * 100",
  yEquation: "cos(t) * 100",
  spawnParticles: true,
  spawnOnlyAtStart: true,
  spawnChance: 1,
  spawnCount: 140,
  spawnRadiusMin: 0,
  spawnRadiusMax: 192,
  particleLifetime: 0,
  particleDeathSpeed: 0.5,
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
  "end (e)": () => {
    end = true;
  },
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
    changeVelocityChance: 0.002,
    _changeVelocityChance: { min: 0, max: 1, step: 0.0001 },
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
let doLoop = true;
let end = false;
let t = 0;
const e = Math.E;

let mainSketch = function(s) {
  s.setup = function() {
    s.angleMode(s.DEGREES);
    settings.canvas.width = screen.width;
    settings.canvas.height = screen.height;
    canvas = s
      .createCanvas(settings.canvas.width, settings.canvas.height)
      .parent("canvas-container");
    resetSketch();
  };

  s.draw = function() {
    s.translate(
      s.width / 2 + settings.canvas.translateCenterX,
      s.height / 2 + settings.canvas.translateCenterY
    );
    try {
      s.rotate(eval(settings.canvas.rotateCanvas));
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

    t = s.frameCount * settings.timeScale;

    qtree.clear();
    for (let particle of particles) {
      qtree.insert(particle);
      particle.checked = false;
    }

    if (!settings.drawTrails) {
      s.colorMode(s.RGB, 255);
      let bgColor = s.color(settings.colors.backgroundColor);
      bgColor.setAlpha(settings.colors.backgroundAlpha);
      s.background(bgColor);
    }

    if (
      nodes.length > 0 &&
      (settings.nodeSettings.overallChance === 1 ||
        s.random() < settings.nodeSettings.overallChance)
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
          (node.spawnOnlyAtStart && s.frameCount === 1)
        ) {
          if (s.random() < node.spawnChance) {
            for (let j = 0; j < 1; j++) {
              for (let c = 0; c < node.spawnCount; c++) {
                let r =
                  Math.pow(s.random(), 0.5) *
                    (node.spawnRadiusMax - node.spawnRadiusMin) +
                  node.spawnRadiusMin;
                let a = s.random(360);
                let x = r * Math.sin(a) + node.x;
                let y = r * Math.cos(a) + node.y;
                particles.push(
                  createParticle(
                    s.createVector(x, y),
                    generateColor(),
                    node.particleLifetime,
                    node.particleDeathSpeed
                  )
                );
              }
            }
          }
        }

        for (let i = 0; i < particles.length; i++) {
          let r = s.dist(
            particles[i].pos.x,
            particles[i].pos.y,
            node.x,
            node.y
          );

          if (node.gravityChance > 0 && s.random() < node.gravityChance) {
            let f = s.createVector(node.x, node.y);
            f.sub(particles[i].pos);
            f.setMag(
              (node.forceMultiplier * settings.canvas.resolutionScale) /
                (1 + r / settings.canvas.resolutionScale)
            );
            particles[i].applyForce(f);
          }

          if (
            node.constantForceChance > 0 &&
            s.random() < node.constantForceChance
          ) {
            let f = s.createVector(node.x, node.y);
            f.sub(particles[i].pos);
            if (
              r <=
              node.constantForceRadius * settings.canvas.resolutionScale
            ) {
              f.setMag(
                s.random(
                  node.insideMin * settings.canvas.resolutionScale,
                  node.insideMax * settings.canvas.resolutionScale
                )
              );
            } else {
              f.setMag(
                s.random(
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
            s.random() < node.deleteChance
          ) {
            particles.splice(i, 1);
          }
        }
      }
    }

    for (let i = 0; i < particles.length; i++) {
      if (s.random() <= settings.colors.image.updateColorChance) {
        updateParticleColorFromImage(particles[i]);
      }

      if (settings.colors.showParticles) {
        s.strokeWeight(
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

      if (s.random() < settings.velocitySettings.changeVelocityChance) {
        if (s.random() < settings.velocitySettings.changeDirectionChance) {
          particles[i].vel.rotate(
            s.random(
              settings.velocitySettings.rotationBoundaries.min,
              settings.velocitySettings.rotationBoundaries.max
            )
          );
        }
        if (s.random() < settings.velocitySettings.changeMagnitudeChance) {
          particles[i].vel.setMag(
            particles[i].vel.mag() *
              s.random(
                settings.velocitySettings.magnitudeBoundaries.min *
                  settings.canvas.resolutionScale,
                settings.velocitySettings.magnitudeBoundaries.max *
                  settings.canvas.resolutionScale
              )
          );
        }
        if (s.random() < settings.velocitySettings.randomForceChance) {
          particles[i].applyForce(
            s.createVector(
              s.random(
                settings.velocitySettings.randomForce.minX *
                  settings.canvas.resolutionScale,
                settings.velocitySettings.randomForce.maxX *
                  settings.canvas.resolutionScale
              ),
              s.random(
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
            s.stroke(
              s.lerpColor(
                particles[i].color,
                point.color,
                settings.lines.lerpValue
              )
            );
            s.strokeWeight(
              settings.lines.strokeWeight * settings.canvas.resolutionScale
            );
            s.line(
              particles[i].pos.x,
              particles[i].pos.y,
              point.pos.x,
              point.pos.y
            );
            if (
              settings.lines.changeSpeedConnected &&
              s.random() < settings.lines.changeSpeedChance
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
        if (alpha <= 0) {
          particles.splice(i, 1);
        } else if (particles[i].age >= particles[i].lifetime) {
          particles[i].color.setAlpha(alpha - particles[i].deathSpeed);
        }
      }
    }
  };
};

let uiSketch = function(s) {
  let size;

  s.setup = function() {
    s.angleMode(s.DEGREES);
    s.createCanvas(settings.canvas.width, settings.canvas.height).parent(
      "canvas-container"
    );
  };

  s.draw = function() {
    s.translate(
      s.width / 2 + settings.canvas.translateCenterX,
      s.height / 2 + settings.canvas.translateCenterY
    );
    try {
      s.rotate(eval(settings.canvas.rotateCanvas));
    } catch (e) {
      console.error(e.message);
    }
    size = Math.ceil(
      Math.pow(Math.pow(s.width, 2) + Math.pow(s.height, 2), 0.5) * 0.005
    );
    s.clear();
    if (
      showAllGUIs ||
      settings.__showTimeScale ||
      settings.captureFrames.__doCapture
    ) {
      s.push();
      s.strokeWeight(1);
      s.stroke(0);
      s.textSize(size * 3);
      s.text(
        "frameRate = " + Math.round(mainCanvas.frameRate()),
        size * 2 - s.width / 2,
        s.height / 2 - size * 10
      );
      s.text(
        "frameCount = " + mainCanvas.frameCount,
        size * 2 - s.width / 2,
        s.height / 2 - size * 6
      );
      s.text(
        "t = " + t.toFixed(1),
        size * 2 - s.width / 2,
        s.height / 2 - size * 2
      );
      s.textAlign(s.RIGHT);
      s.text(
        "Number of Nodes = " + nodes.length,
        s.width / 2 - size * 2,
        s.height / 2 - size * 6
      );
      s.text(
        "Number of Particles = " + particles.length,
        s.width / 2 - size * 2,
        s.height / 2 - size * 2
      );
      s.pop();
    }
    if (
      showAllGUIs ||
      settings.nodeSettings.showNodes ||
      settings.nodeSettings.__show
    ) {
      s.push();
      for (let a = 0; a < nodes.length; a++) {
        if (nodes[a].__active) {
          if (nodes[a].constantForceChance > 0) {
            s.noFill();
            s.stroke(0, 255, 255);
            s.strokeWeight(nodes[a].constantForceChance * size);
            s.ellipse(
              nodes[a].x,
              nodes[a].y,
              2 * nodes[a].constantForceRadius * settings.canvas.resolutionScale
            );
            s.fill(0);
            s.textSize(size * 2);
            s.textAlign(s.CENTER);
            s.strokeWeight(1);
            s.stroke(0);
            s.text(
              "inside : chance = " + nodes[a].insideChance,
              0,
              s.height / 2 - size * 12.5
            );
            s.text(
              "extra (inside) : chance = " + nodes[a].extraChance,
              0,
              s.height / 2 - size * 7.5
            );
            s.text(
              "outside : chance = " + nodes[a].outsideChance,
              0,
              s.height / 2 - size * 2.5
            );
            s.strokeWeight(size);
            s.stroke(0, 255, 0);
            s.line(
              nodes[a].insideMin * settings.canvas.resolutionScale * 10,
              s.height / 2 - size * 11,
              nodes[a].insideMax * settings.canvas.resolutionScale * 10,
              s.height / 2 - size * 11
            );
            s.stroke(255, 128, 0);
            s.line(
              nodes[a].extraMin * settings.canvas.resolutionScale * 10,
              s.height / 2 - size * 6,
              nodes[a].extraMax * settings.canvas.resolutionScale * 10,
              s.height / 2 - size * 6
            );
            s.stroke(255, 0, 0);
            s.line(
              nodes[a].outsideMin * settings.canvas.resolutionScale * 10,
              s.height / 2 - size * 1,
              nodes[a].outsideMax * settings.canvas.resolutionScale * 10,
              s.height / 2 - size * 1
            );
          }
          if (nodes[a].spawnParticles) {
            s.noFill();
            s.stroke(255, 0, 255);
            s.strokeWeight(nodes[a].spawnChance * size);
            s.ellipse(nodes[a].x, nodes[a].y, 2 * nodes[a].spawnRadiusMin);
            s.ellipse(nodes[a].x, nodes[a].y, 2 * nodes[a].spawnRadiusMax);
          }
          if (nodes[a].deleteParticles) {
            s.stroke(255, 0, 0);
            s.ellipse(nodes[a].x, nodes[a].y, nodes[a].deleteRadius);
          }
        }
        if (settings.nodeSettings.__show) {
          s.noFill();
          if (nodes[a].__active) {
            s.stroke(0, 255, 255);
          } else {
            s.stroke(0);
          }
          s.strokeWeight(nodes[a].gravityChance * 0.5 * size);
          s.ellipse(
            nodes[a].x,
            nodes[a].y,
            size * 5 * Math.abs(nodes[a].forceMultiplier)
          );
          if (nodes[a].forceMultiplier >= 0) {
            s.fill(0, 255, 0);
          } else {
            s.fill(255, 0, 0);
          }
        } else {
          s.fill(0);
        }
        s.noStroke();
        s.ellipse(nodes[a].x, nodes[a].y, size);
      }
      s.pop();
    }
  };
};

let mainCanvas = new p5(mainSketch);

let uiCanvas = new p5(uiSketch);

function toggleLoop() {
  doLoop = !doLoop;
  if (doLoop) {
    mainCanvas.loop();
    gui.controllers["settings.Pause (Space)"].name("Pause (Space)");
  } else {
    mainCanvas.noLoop();
    gui.controllers["settings.Pause (Space)"].name("Play (Space)");
  }
}

function importImage() {
  let imgInput = mainCanvas.createFileInput(handleFile);
  imgInput.elt.style.display = "none";
  imgInput.elt.click();
}

function handleFile(file) {
  sampledImg = mainCanvas.loadImage(file.data);
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
    let c = sampledImg.get(
      particle.pos.x + mainCanvas.width / 2,
      particle.pos.y + mainCanvas.height / 2
    );
    c[3] = mainCanvas.alpha(particle.color);
    particle.color = mainCanvas.color(...c);
  }
}

function generateColor() {
  let colorType = settings.colors.particleColorType;
  let c;
  if (colorType === "randomRGBA") {
    mainCanvas.colorMode(mainCanvas.RGB, 255);
    c = mainCanvas.color(
      mainCanvas.random(
        settings.colors.randomRGBA.redMin,
        settings.colors.randomRGBA.redMax
      ),
      mainCanvas.random(
        settings.colors.randomRGBA.greenMin,
        settings.colors.randomRGBA.greenMax
      ),
      mainCanvas.random(
        settings.colors.randomRGBA.blueMin,
        settings.colors.randomRGBA.blueMax
      ),
      mainCanvas.random(
        settings.colors.randomRGBA.alphaMin,
        settings.colors.randomRGBA.alphaMax
      )
    );
  } else if (colorType === "randomHSLA") {
    mainCanvas.colorMode(mainCanvas.HSL, 255);
    let hue = mainCanvas.random(
      settings.colors.randomHSLA.hueMin,
      settings.colors.randomHSLA.hueMax
    );
    if (settings.colors.randomHSLA.boostRed) {
      hue = Math.pow(hue, 2) / 255;
    }
    c = mainCanvas.color(
      hue,
      mainCanvas.random(
        settings.colors.randomHSLA.saturationMin,
        settings.colors.randomHSLA.saturationMax
      ),
      mainCanvas.random(
        settings.colors.randomHSLA.lightnessMin,
        settings.colors.randomHSLA.lightnessMax
      ),
      mainCanvas.random(
        settings.colors.randomHSLA.alphaMin,
        settings.colors.randomHSLA.alphaMax
      )
    );
  } else if (colorType === "gradient") {
    mainCanvas.colorMode(mainCanvas.RGB, 255);
    c = mainCanvas.lerpColor(
      mainCanvas.color(settings.colors.gradient.firstColor),
      mainCanvas.color(settings.colors.gradient.secondColor),
      mainCanvas.random()
    );
    c.setAlpha(
      mainCanvas.random(
        settings.colors.gradient.alphaMin,
        settings.colors.gradient.alphaMax
      )
    );
  } else {
    mainCanvas.colorMode(mainCanvas.RGB, 255);
    c = mainCanvas.color(settings.colors.image.initColor);
    c.setAlpha(
      mainCanvas.random(
        settings.colors.image.alphaMin,
        settings.colors.image.alphaMax
      )
    );
  }
  return c;
}

function createParticle(origin, color, lifetime, deathSpeed) {
  let particle = new Particle(mainCanvas, origin, color);
  particle.applyForce(
    mainCanvas.createVector(
      mainCanvas.random(
        settings.velocitySettings.startingVelocity.minX *
          settings.canvas.resolutionScale,
        settings.velocitySettings.startingVelocity.maxX *
          settings.canvas.resolutionScale
      ),
      mainCanvas.random(
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
  particle.deathSpeed = deathSpeed;
  return particle;
}

function resetSketch() {
  if (settings.useCustomSeed) {
    mainCanvas.randomSeed(settings.seed);
  } else {
    const newSeed = parseInt(Math.random() * 1000000000000000);
    mainCanvas.randomSeed(newSeed);
    settings.seed = newSeed;
  }

  end = false;
  mainCanvas.frameCount = -1;
  particles = [];

  userSetupCode = document.getElementById("setup-code-area").value;
  userDrawCode = document.getElementById("draw-code-area").value;

  mainCanvas.resizeCanvas(
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

  mainCanvas.colorMode(mainCanvas.RGB, 255);
  let bgColor = mainCanvas.color(settings.colors.backgroundColor);
  bgColor.setAlpha(settings.colors.backgroundAlpha);
  mainCanvas.background(bgColor);

  if (
    sampledImg === undefined &&
    settings.colors.particleColorType === "image"
  ) {
    alert("Please select an image.");
    importImage();
  }

  qtree = new QuadTree(
    new Rectangle(0, 0, mainCanvas.width / 2, mainCanvas.height / 2),
    1
  );

  if (pageIsLoaded) {
    if (mainCanvas.width > mainCanvas.height) {
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

function createNode(x, y) {
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
    spawning.add(node, "particleDeathSpeed", 0.1, 255, 0.1);
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
        e.preventDefault();
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
        createNode(
          parseInt(
            mainCanvas.mouseX -
              mainCanvas.width / 2 -
              settings.canvas.translateCenterX
          ),
          parseInt(
            mainCanvas.mouseY -
              mainCanvas.height / 2 -
              settings.canvas.translateCenterY
          )
        );
      } else if (e.shiftKey && e.button === 0) {
        particles.push(
          createParticle(
            mainCanvas.createVector(
              mainCanvas.mouseX -
                mainCanvas.width / 2 -
                settings.canvas.translateCenterX,
              mainCanvas.mouseY -
                mainCanvas.height / 2 -
                settings.canvas.translateCenterY
            ),
            generateColor(),
            settings.particleLifetime,
            settings.particleDeathSpeed
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

  if (innerWidth < 700) {
    gui.width = innerWidth;
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

  gui.controllers["settings.particleLifetime"].onFinishChange(value => {
    defaultNode.particleLifetime = value;
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

  createNode(0, 0);
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
    "settings.velocitySettings.changeVelocityChance": 0,
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
    "settings.velocitySettings.changeVelocityChance": 1,
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
