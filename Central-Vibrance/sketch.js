const defaultPresets = {
  Butterfly: {
    _other: {
      nodes: [
        {
          gravityChance: 1,
          forceMultiplier: 2,
          useEquations: true,
          xEquation:
            "100 * sin(t) * (pow(e,cos(t)) - 2 * cos (4 * t) - pow(sin (t / 12),5))",
          yEquation:
            "-50 + 100 * cos(t) * (pow(e,cos(t)) - 2 * cos (4 * t) - pow(sin (t / 12),5))"
        },
        {
          gravityChance: 1,
          forceMultiplier: 2,
          useEquations: true,
          xEquation: "300 * sin(t)",
          yEquation: "300 * cos(t)",
          spawnParticles: false
        }
      ]
    },
    "settings.canvas.width": 1000,
    "settings.canvas.height": 1000,
    "settings.velocitySettings.maxVelocity": 2,
    "settings.velocitySettings.changeVelocityChance": 0,
    "settings.velocitySettings.randomForceChance": 0,
    "settings.colors.particleSettings.particleWidth": 2,
    "settings.colors.particleSettings.particleHeight": 2,
    "settings.colors.particleColorType": "randomHSLA",
    "settings.lines.changeSpeedConnected": false,
    "settings.lines.changeSpeedBy": 1.61
  },
  Smoke: {
    _other: {
      nodes: [
        {
          gravityChance: 0,
          forceMultiplier: 0,
          constantForceRadius: 250,
          insideMin: 0,
          insideMax: 5,
          outsideMin: -5,
          outsideMax: 10,
          extraChance: 0.6,
          extraMax: 0,
          spawnRadiusMax: 300
        }
      ]
    },
    "settings.velocitySettings.maxVelocity": 2.3000000000000003,
    "settings.velocitySettings.startingVelocity.minX": -2,
    "settings.velocitySettings.startingVelocity.maxX": 2,
    "settings.velocitySettings.startingVelocity.minY": -2,
    "settings.velocitySettings.startingVelocity.maxY": 2,
    "settings.colors.particleSettings.particleWidth": 2,
    "settings.colors.particleSettings.particleHeight": 2,
    "settings.colors.particleSettings.particleOutlineColor": "#000000",
    "settings.colors.backgroundColor": "#81848a",
    "settings.colors.particleColorType": "gradient",
    "settings.colors.gradient.alphaMin": 5,
    "settings.colors.gradient.alphaMax": 45
  },
  Monochrome: {
    _other: {
      nodes: [
        {
          forceMultiplier: 0,
          constantForceRadius: 0,
          outsideMin: -4,
          outsideMax: 5,
          spawnOnlyOnce: false,
          spawnCount: 1,
          spawnRadiusMax: 400,
          particleLifetime: 120
        }
      ]
    },
    "settings.canvas.rotateCanvas": "Math.abs(sin(t)*10)",
    "settings.velocitySettings.lockAxis.yAxis": true,
    "settings.velocitySettings.maxVelocity": 3,
    "settings.velocitySettings.startingVelocity.minX": -2,
    "settings.velocitySettings.startingVelocity.maxX": 2,
    "settings.velocitySettings.startingVelocity.minY": -2,
    "settings.velocitySettings.startingVelocity.maxY": 2,
    "settings.velocitySettings.changeVelocityChance": 0,
    "settings.velocitySettings.randomForceChance": 0,
    "settings.colors.particleSettings.particleWidth": 2,
    "settings.colors.particleSettings.particleHeight": 2,
    "settings.colors.particleSettings.particleOutlineColor": "#000000",
    "settings.colors.backgroundColor": "#3557a8",
    "settings.colors.particleColorType": "gradient",
    "settings.colors.gradient.firstColor": "#bbf3ff",
    "settings.colors.gradient.secondColor": "#98b6ff",
    "settings.colors.gradient.alphaMin": 5,
    "settings.colors.gradient.alphaMax": 45,
    "settings.lines.maxLineDist": 20
  },
  Points: {
    _other: {
      nodes: [{ constantForceChance: 0, spawnCount: 250, spawnRadiusMax: 520 }]
    },
    "settings.mouseAttractsParticles": true,
    "settings.mouseAttractionRange": 150,
    "settings.bounceEdges": true,
    "settings.drawTrails": false,
    "settings.velocitySettings.maxVelocity": 10,
    "settings.velocitySettings.startingVelocity.minX": -2,
    "settings.velocitySettings.startingVelocity.maxX": 2,
    "settings.velocitySettings.startingVelocity.minY": -2,
    "settings.velocitySettings.startingVelocity.maxY": 2,
    "settings.velocitySettings.changeVelocityChance": 0,
    "settings.velocitySettings.randomForceChance": 0,
    "settings.colors.particleSettings.particleWidth": 10,
    "settings.colors.particleSettings.particleHeight": 10,
    "settings.colors.particleSettings.particleOutlineColor": "#000000",
    "settings.colors.particleColorType": "gradient",
    "settings.colors.gradient.firstColor": "#000000",
    "settings.colors.gradient.alphaMin": 37,
    "settings.colors.gradient.alphaMax": 236,
    "settings.lines.changeSpeedConnected": false,
    "settings.lines.changeSpeedBy": 1
  },
  Neon: {
    _other: {
      nodes: [{ constantForceChance: 0, spawnCount: 300, spawnRadiusMax: 500 }]
    },
    "settings.mouseAttractsParticles": true,
    "settings.mouseAttractionRange": 150,
    "settings.bounceEdges": true,
    "settings.canvas.width": 1080,
    "settings.velocitySettings.lockAxis.xAxis": true,
    "settings.velocitySettings.maxVelocity": 4,
    "settings.velocitySettings.startingVelocity.minX": -2,
    "settings.velocitySettings.startingVelocity.maxX": 2,
    "settings.velocitySettings.startingVelocity.minY": -2,
    "settings.velocitySettings.startingVelocity.maxY": 2,
    "settings.colors.particleSettings.particleOutlineColor": "#000000",
    "settings.colors.particleSettings.particleOutlineAlpha": 20,
    "settings.colors.backgroundColor": "#2d0f28",
    "settings.colors.particleColorType": "randomHSLA",
    "settings.colors.randomHSLA.hueMin": 244,
    "settings.colors.randomHSLA.hueMax": 63,
    "settings.colors.randomHSLA.saturationMin": 160,
    "settings.colors.randomHSLA.lightnessMin": 140,
    "settings.colors.randomHSLA.lightnessMax": 189,
    "settings.colors.randomHSLA.alphaMax": 35,
    "settings.colors.gradient.firstColor": "#4179ff",
    "settings.colors.gradient.secondColor": "#ff9232",
    "settings.colors.gradient.alphaMin": 8,
    "settings.colors.gradient.alphaMax": 236,
    "settings.lines.changeSpeedConnected": false,
    "settings.lines.changeSpeedBy": 1.1
  },
  Fusion: {
    _other: {
      nodes: [
        {
          constantForceChance: 0.66,
          constantForceRadius: 5,
          outsideMax: 4,
          spawnCount: 400,
          spawnRadiusMax: 350
        }
      ]
    },
    "settings.mouseAttractionRange": 240,
    "settings.bounceEdges": true,
    "settings.drawTrails": false,
    "settings.velocitySettings.maxVelocity": 12,
    "settings.velocitySettings.startingVelocity.minX": -2.2,
    "settings.velocitySettings.startingVelocity.maxX": 2.2,
    "settings.velocitySettings.startingVelocity.minY": -2.2,
    "settings.velocitySettings.startingVelocity.maxY": 2.2,
    "settings.velocitySettings.changeVelocityChance": 0,
    "settings.velocitySettings.randomForceChance": 0,
    "settings.colors.particleSettings.particleWidth": 13,
    "settings.colors.particleSettings.particleHeight": 13,
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
    "settings.lines.maxLineDist": 6
  },
  Phase: {
    _other: {
      nodes: [{ constantForceChance: 0, spawnCount: 400, spawnRadiusMax: 520 }]
    },
    "settings.mouseAttractsParticles": true,
    "settings.mouseAttractionRange": 400,
    "settings.bounceEdges": true,
    "settings.drawTrails": false,
    "settings.velocitySettings.maxVelocity": 5,
    "settings.velocitySettings.startingVelocity.minX": -2,
    "settings.velocitySettings.startingVelocity.maxX": 2,
    "settings.velocitySettings.startingVelocity.minY": -2,
    "settings.velocitySettings.startingVelocity.maxY": 2,
    "settings.colors.showParticles": false,
    "settings.colors.particleSettings.particleWidth": 10,
    "settings.colors.particleSettings.particleHeight": 10,
    "settings.colors.particleSettings.particleOutlineColor": "#000000",
    "settings.colors.backgroundAlpha": 30,
    "settings.colors.gradient.firstColor": "#2899ff",
    "settings.colors.gradient.secondColor": "#fffe22",
    "settings.colors.gradient.alphaMin": 37,
    "settings.colors.gradient.alphaMax": 236,
    "settings.lines.changeSpeedChance": 1,
    "settings.lines.changeSpeedBy": -0.5
  }
};
const defaultNode = {
  __active: false,
  maxAffectRadius: 0,
  gravityChance: 0,
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
  xEquation: "Math.sin(t) * 100",
  yEquation: "Math.cos(t) * 100",
  spawnParticles: true,
  spawnOnlyOnce: true,
  spawnFrame: 0,
  spawnChance: 1,
  spawnCount: 140,
  spawnRadiusMin: 0,
  spawnRadiusMax: 192,
  radiusAngleMin: -Math.PI,
  radiusAngleMax: Math.PI,
  particleLifetime: 0,
  particleDeathSpeed: 0.5,
  deleteParticles: false,
  deleteChance: 0.5,
  deleteRadius: 2
};
let capturer;
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
    mainCanvas.save("central-vibrance");
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
  timeScale: 0.01,
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
    width: 1024,
    _width: { min: 1, max: 8192, step: 1 },
    height: 1024,
    _height: { min: 1, max: 8192, step: 1 },
    translateCanvasX: "0",
    translateCanvasY: "0",
    scaleCanvas: "1",
    rotateCanvas: "0"
  },
  velocitySettings: {
    lockAxis: {
      xAxis: false,
      yAxis: false
    },
    maxVelocity: 1,
    _maxVelocity: { min: 0, step: 0.01 },
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
      min: -Math.PI,
      max: Math.PI,
      _all: { min: -Math.PI, max: Math.PI, step: 0.001 }
    },
    _rotationBoundaries: { name: "rotationBoundaries" },
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
    _maxLineDist: { min: 1, step: 1 },
    lerpValue: 0.5,
    _lerpValue: { min: 0, max: 1, step: 0.01 }
  },
  nodeSettings: {
    __show: false,
    resetNodes,
    showNodes: true,
    overallChance: 1,
    _overallChance: { min: 0, max: 1, step: 0.001 },
    nodes: {},
    _nodes: { openFolder: true }
  },
  _nodeSettings: { openFolder: true }
};
let particles = [];
let nodes = [];
let canvas, mainCanvas, uiCanvas;
let qtree;
let gui;
let listenForKeys = true;
let listenForMouse = true;
let showAllGUIs = false;
let sampledImg;
let showCodeArea = false;
let userDrawCode, userSetupCode;
let useCustomCode = false;
let doLoop = true;
let end = false;

let mainSketch = function(s) {
  let t = 0;
  s.setup = function() {
    qtree = new QuadTree(
      new Rectangle(0, 0, screen.width / 2, screen.height / 2),
      1
    );
    settings.canvas.width = screen.width;
    settings.canvas.height = screen.height;
    canvas = s
      .createCanvas(settings.canvas.width, settings.canvas.height)
      .parent("canvas-container");
  };

  s.draw = function() {
    s.translate(s.width / 2, s.height / 2);
    try {
      s.translate(
        eval(settings.canvas.translateCanvasX),
        eval(settings.canvas.translateCanvasY)
      );
      s.scale(eval(settings.canvas.scaleCanvas));
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
      s.frameCount - settings.captureFrames.__startFrame <
        settings.captureFrames.captureLength
    ) {
      capturer.capture(canvas.canvas);
    } else if (
      settings.captureFrames.__doCapture &&
      s.frameCount - settings.captureFrames.__startFrame ===
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
            node.x = eval(node.xEquation) + node.initX;
            node.y = -eval(node.yEquation) + node.initY;
          } catch (e) {
            console.error(e.message);
          }
        } else {
          node.x = node.initX;
          node.y = node.initY;
        }
        if (
          node.spawnParticles &&
          ((!node.spawnOnlyOnce && s.frameCount >= node.spawnFrame) ||
            (node.spawnOnlyOnce && s.frameCount === node.spawnFrame))
        ) {
          if (s.random() < node.spawnChance) {
            for (let j = 0; j < 1; j++) {
              for (let c = 0; c < node.spawnCount; c++) {
                let r =
                  Math.pow(s.random(), 0.5) *
                    (node.spawnRadiusMax - node.spawnRadiusMin) +
                  node.spawnRadiusMin;
                let a = s.random(node.radiusAngleMin, node.radiusAngleMax);
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
        let particlesInRange;
        if (node.maxAffectRadius > 0) {
          particlesInRange = qtree.query(
            new Circle(node.x, node.y, node.maxAffectRadius)
          );
        } else {
          particlesInRange = particles;
        }
        for (let i = 0; i < particlesInRange.length; i++) {
          let r = s.dist(
            particlesInRange[i].pos.x,
            particlesInRange[i].pos.y,
            node.x,
            node.y
          );

          if (node.gravityChance > 0 && s.random() < node.gravityChance) {
            let f = s.createVector(node.x, node.y);
            f.sub(particlesInRange[i].pos);
            f.setMag(node.forceMultiplier / (1 + r));
            particlesInRange[i].applyForce(f);
          }

          if (
            node.constantForceChance > 0 &&
            s.random() < node.constantForceChance
          ) {
            let f = s.createVector(node.x, node.y);
            f.sub(particlesInRange[i].pos);
            if (r <= node.constantForceRadius) {
              if (s.random() < node.insideChance) {
                if (s.random() < node.extraChance) {
                  f.setMag(s.random(node.extraMin, node.extraMax));
                } else {
                  f.setMag(s.random(node.insideMin, node.insideMax));
                }
              }
            } else {
              if (s.random() < node.outsideChance) {
                f.setMag(s.random(node.outsideMin, node.outsideMax));
              } else {
                f.mult(0);
              }
            }
            particlesInRange[i].applyForce(f);
          }

          if (
            node.deleteParticles &&
            r <= node.deleteRadius &&
            s.random() < node.deleteChance
          ) {
            particles.splice(particles.indexOf(particlesInRange[i]), 1);
          }
        }
      }
    }

    for (let i = 0; i < particles.length; i++) {
      if (s.random() <= settings.colors.image.updateColorChance) {
        updateParticleColorFromImage(particles[i]);
      }

      if (settings.colors.showParticles) {
        s.strokeWeight(settings.colors.particleSettings.strokeWeight);
        particles[i].show(
          settings.colors.particleSettings.particleWidth,
          settings.colors.particleSettings.particleHeight,
          settings.colors.particleSettings.drawOutline,
          settings.colors.particleSettings.particleOutlineColor,
          settings.colors.particleSettings.particleOutlineAlpha
        );
      }

      if (settings.bounceEdges) {
        particles[i].bounceCanvasEdge();
      }

      if (settings.mouseAttractsParticles) {
        particles[i].mouseAttract(settings.mouseAttractionRange);
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
                settings.velocitySettings.magnitudeBoundaries.min,
                settings.velocitySettings.magnitudeBoundaries.max
              )
          );
        }
        if (s.random() < settings.velocitySettings.randomForceChance) {
          particles[i].applyForce(
            s.createVector(
              s.random(
                settings.velocitySettings.randomForce.minX,
                settings.velocitySettings.randomForce.maxX
              ),
              s.random(
                settings.velocitySettings.randomForce.minY,
                settings.velocitySettings.randomForce.maxY
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
            settings.lines.maxLineDist
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
            s.strokeWeight(settings.lines.strokeWeight);
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
        settings.velocitySettings.maxVelocity,
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
    s.createCanvas(settings.canvas.width, settings.canvas.height).parent(
      "canvas-container"
    );
  };

  s.draw = function() {
    s.clear();
    s.translate(s.width / 2, s.height / 2);
    try {
      s.translate(
        eval(settings.canvas.translateCanvasX),
        eval(settings.canvas.translateCanvasY)
      );
    } catch (e) {
      console.error(e.message);
    }

    size = Math.ceil(
      Math.pow(Math.pow(s.width, 2) + Math.pow(s.height, 2), 0.5) * 0.005
    );
    if (
      showAllGUIs ||
      settings.__showTimeScale ||
      settings.captureFrames.__doCapture
    ) {
      s.push();
      s.fill(0);
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
        "t = " + (mainCanvas.frameCount * settings.timeScale).toFixed(5),
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
    try {
      s.scale(eval(settings.canvas.scaleCanvas));
      s.rotate(eval(settings.canvas.rotateCanvas));
    } catch (e) {
      console.error(e.message);
    }
    if (
      showAllGUIs ||
      settings.nodeSettings.showNodes ||
      settings.nodeSettings.__show
    ) {
      for (let a = 0; a < nodes.length; a++) {
        if (nodes[a].__active) {
          if (
            nodes[a].hasOwnProperty("useEquations") &&
            nodes[a].useEquations
          ) {
            s.noFill();
            s.stroke(255, 0, 0);
            s.strokeWeight(size * 0.2);
            for (
              let i = settings.timeScale * 60;
              i < settings.timeScale * 1000;
              i += settings.timeScale * 60
            ) {
              let t = i;
              try {
                let x = eval(nodes[a].xEquation) + nodes[a].initX;
                let y = -eval(nodes[a].yEquation) + nodes[a].initY;
                t -= settings.timeScale * 60;
                let xPrev = eval(nodes[a].xEquation) + nodes[a].initX;
                let yPrev = -eval(nodes[a].yEquation) + nodes[a].initY;
                s.line(xPrev, yPrev, x, y);
              } catch (e) {
                console.error(e)
              }
            }
          }
          if (nodes[a].constantForceChance > 0) {
            s.noFill();
            s.stroke(0, 255, 255);
            s.strokeWeight(nodes[a].constantForceChance * size);
            s.ellipse(nodes[a].x, nodes[a].y, 2 * nodes[a].constantForceRadius);
            s.push();
            try {
              s.rotate(-eval(settings.canvas.rotateCanvas));
              s.rotate(1 / eval(settings.canvas.rotateCanvas));
            } catch (e) {
              console.error(e.message);
            }
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
              nodes[a].insideMin * 10,
              s.height / 2 - size * 11,
              nodes[a].insideMax * 10,
              s.height / 2 - size * 11
            );
            s.stroke(255, 128, 0);
            s.line(
              nodes[a].extraMin * 10,
              s.height / 2 - size * 6,
              nodes[a].extraMax * 10,
              s.height / 2 - size * 6
            );
            s.stroke(255, 0, 0);
            s.line(
              nodes[a].outsideMin * 10,
              s.height / 2 - size * 1,
              nodes[a].outsideMax * 10,
              s.height / 2 - size * 1
            );
            s.pop();
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
            s.ellipse(nodes[a].x, nodes[a].y, 2 * nodes[a].deleteRadius);
          }
          s.stroke(0, 255, 255);
          s.noFill();
          s.strokeWeight(nodes[a].gravityChance * 0.5 * size);
          s.ellipse(
            nodes[a].x,
            nodes[a].y,
            size * 5 * Math.abs(nodes[a].forceMultiplier)
          );
        }
        if (nodes[a].forceMultiplier > 0) {
          s.fill(0, 255, 0);
        } else if (nodes[a].forceMultiplier < 0) {
          s.fill(255, 0, 0);
        } else {
          s.fill(0);
        }
        s.noStroke();
        s.ellipse(nodes[a].x, nodes[a].y, size);
      }
    }
  };
};

//essentially the rest of the sketch setup.
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

  mainCanvas.resizeCanvas(settings.canvas.width, settings.canvas.height);

  uiCanvas.resizeCanvas(settings.canvas.width, settings.canvas.height);

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

  if (useCustomCode) {
    try {
      eval(userSetupCode);
    } catch (e) {
      console.error(e.message);
    }
  }

  gui.updateAllDisplays();
}

//toggles looping of the main canvas.
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

//toggles display of code areas.
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

//image importing
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

//generates a p5 color using params from settings
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

//creates a particle object
function createParticle(origin, color, lifetime, deathSpeed) {
  let particle = new Particle(mainCanvas, origin, color);
  particle.applyForce(
    mainCanvas.createVector(
      mainCanvas.random(
        settings.velocitySettings.startingVelocity.minX,
        settings.velocitySettings.startingVelocity.maxX
      ),
      mainCanvas.random(
        settings.velocitySettings.startingVelocity.minY,
        settings.velocitySettings.startingVelocity.maxY
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

//url & sharing settings stuff
function getEncodedSettingsString() {
  let changedSettings = {};
  let sameAsPreset = true;
  let exportedNodes = exportNodes();

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
        if (exportedNodes.length === preset._other.nodes.length) {
          for (let i in exportedNodes) {
            for (let k in exportedNodes[i]) {
              if (preset._other.nodes[i].hasOwnProperty(k)) {
                if (exportedNodes[i][k] !== preset._other.nodes[i][k]) {
                  sameAsPreset = false;
                  break;
                }
              } else {
                if (exportedNodes[i][k] !== defaultNode[k]) {
                  sameAsPreset = false;
                  break;
                }
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
          !["presetSave", "presetSelector", "settings.seed"].includes(i) &&
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
        !["presetSelector", "presetSave", "settings.seed"].includes(i) &&
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

//nodes stuff
function createNode(x, y) {
  let newNode = Object.assign({}, defaultNode);
  newNode.initX = x;
  newNode.initY = y;
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
    delete node.duplicateNode;
    delete node.__active;
    delete node.x;
    delete node.y;
    delete node.folder;
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
    node.removeNode = () => {
      nodes.splice(nodes.indexOf(node), 1);
      refreshNodesGUI();
    };
    node.duplicateNode = () => {
      nodes.splice(nodes.indexOf(node), 0, Object.assign({}, node));
      refreshNodesGUI();
    };

    let nodeFolder = gui.controllers["settings.nodeSettings.nodes"].addFolder(
      Object.keys(gui.controllers["settings.nodeSettings.nodes"].__folders)
        .length
    );
    node.folder = nodeFolder;

    nodeFolder.add(node, "removeNode");
    nodeFolder.add(node, "duplicateNode");
    nodeFolder.add(node, "maxAffectRadius");

    let gravityForceFolder = nodeFolder.addFolder("force / distance");
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
    spawning.add(node, "spawnOnlyOnce");
    spawning.add(node, "spawnFrame");
    spawning.add(node, "spawnChance", 0, 1, 0.001);
    spawning.add(node, "spawnCount", 0, undefined, 1);
    spawning.add(node, "spawnRadiusMin", 0, undefined, 1);
    spawning.add(node, "spawnRadiusMax", 0, undefined, 1);
    spawning.add(node, "radiusAngleMin", -Math.PI, Math.PI, 0.001);
    spawning.add(node, "radiusAngleMax", -Math.PI, Math.PI, 0.001);
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

//toggling listening for hotkeys when entering into inputs
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

function getCanvasMousePosition(canvas) {
  let canvasX = canvas.mouseX - canvas.width / 2;
  let canvasY = canvas.mouseY - canvas.height / 2;
  try {
    canvasX =
      (canvasX - eval(settings.canvas.translateCanvasX)) /
      eval(settings.canvas.scaleCanvas);
    canvasY =
      (canvasY - eval(settings.canvas.translateCanvasY)) /
      eval(settings.canvas.scaleCanvas);
    let angle = -eval(settings.canvas.rotateCanvas);
    let oldX = canvasX;
    let oldY = canvasY;
    canvasX = oldX * Math.cos(angle) - oldY * Math.sin(angle);
    canvasY = oldX * Math.sin(angle) + oldY * Math.cos(angle);
  } catch (e) {
    console.error(e.message);
  }
  return [parseInt(canvasX), parseInt(canvasY)];
}

window.onload = () => {
  mainCanvas = new p5(mainSketch);
  uiCanvas = new p5(uiSketch);

  document.onkeypress = function(e) {
    e = e || window.event;
    if (listenForKeys) {
      if (e.key === "r") {
        resetSketch();
      } else if (e.key === "s") {
        mainCanvas.save("central-vibrance");
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
      }
    }
  };

  document.onmousedown = function(e) {
    e = e || window.event;
    if (listenForMouse) {
      let canvasMouseCoords = getCanvasMousePosition(mainCanvas);
      if (e.shiftKey && e.ctrlKey && e.button === 0) {
        let newNode = Object.assign({}, nodes[nodes.length - 1]);
        newNode.initX = canvasMouseCoords[0];
        newNode.initY = canvasMouseCoords[1];
        nodes.push(newNode);
        refreshNodesGUI();
      } else if (e.ctrlKey && e.button === 0) {
        try {
          createNode(canvasMouseCoords[0], canvasMouseCoords[1]);
        } catch (e) {
          console.error(e);
        }
      } else if (e.shiftKey && e.button === 0) {
        try {
          particles.push(
            createParticle(
              mainCanvas.createVector(
                canvasMouseCoords[0],
                canvasMouseCoords[1]
              ),
              generateColor(),
              settings.particleLifetime,
              settings.particleDeathSpeed
            )
          );
        } catch (e) {
          console.error(e);
        }
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
      }
    } else {
      createNode(0, 0);
    }
    refreshNodesGUI();
    mainCanvas.loop();
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
