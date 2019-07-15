let settings = {
  "Shift + Click to Add Particle | Ctrl + Click to Add Attractor": {},
  Share: share,
  "Pause (Space)": toggleLoop,
  "Step (./Period)": draw,
  "_Step (./Period)": { hide: true },
  "Reset Canvas (r)": resetSketch,
  "Reset Attractors (a)": resetAttractors,
  "Save As PNG (s)": function() {
    saveCanvas(canvas, "central-vibrance", "png");
  },
  "Show Code Area (c)": toggleCodeArea,
  "Collapse All Folders": function() {
    for (let c in gui.controllers) {
      if (
        c !== "presetSave" &&
        c !== "presetSelector" &&
        gui.controllers[c].hasOwnProperty("__ul")
      ) {
        gui.controllers[c].close();
      }
    }
  },
  seed: 0,
  useCustomSeed: false,
  timeScale: 1,
  _timeScale: { step: 0.00001, name: "(timeScale) t = frameCount \u00D7" },
  particleCount: 100,
  _particleCount: { min: 0, max: 1000, step: 1 },
  mouseAttractsParticles: false,
  mouseAttractionRange: 100,
  _mouseAttractionRange: {
    min: 0,
    max: 4096,
    step: 1
  },
  "End Simulation (e)": function() {
    endSim = true;
  },
  endSpeed: 0.5,
  _endSpeed: { min: 0.1, max: 255, step: 0.1 },
  bounceEdges: false,
  drawTrails: true,
  canvas: {
    width: 1024,
    _width: { min: 1, max: 8192, step: 1 },
    height: 1024,
    _height: { min: 1, max: 8192, step: 1 }
  },
  originRadius: {
    __show: false,
    ignoreRadius: false,
    min: 0,
    max: 192,
    _all: { min: 0, max: 8192, step: 1 }
  },
  attractorSettings: {
    __show: false,
    "Reset Attractors (a)": resetAttractors,
    showAttractors: true,
    attractors: {}
  },
  velocitySettings: {
    maxVelocity: 1,
    _maxVelocity: { min: 0, max: 100, step: 0.01 },
    startingVelocity: {
      minX: -1,
      maxX: 1,
      minY: -1,
      maxY: 1,
      _all: { min: -100, max: 100, step: 0.01 }
    },
    changeForceChance: 0.002,
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
    lockAxis: {
      xAxis: false,
      yAxis: false
    },
    randomForce: {
      randomForceChance: 0.001,
      _randomForceChance: { min: 0, max: 1, step: 0.0001 },
      minX: -1,
      maxX: 1,
      minY: -1,
      maxY: 1,
      _all: { min: -10, max: 10, step: 0.01 }
    }
  },
  colors: {
    showParticles: false,
    _showParticles: {},
    particleSettings: {
      particleWidth: 25,
      particleHeight: 25,
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
    _maxLineDist: { min: 1, max: 512, step: 1 }
  },
  centerAttractionForce: {
    __show: false,
    attractParticlesToCenter: true,
    chance: 0.1,
    _chance: { min: 0, max: 1, step: 0.0001 },
    radius: 128,
    _radius: { min: 0, max: 8192, step: 1 },
    outside: {
      min: -1,
      max: 1,
      _all: { min: -100, max: 100, step: 0.01 }
    },
    _outside: { openFolder: true },
    inside: {
      min: -2,
      max: 2,
      _all: { min: -100, max: 100, step: 0.01 }
    },
    _inside: { openFolder: true },
    extra: {
      chance: 0.005,
      _chance: { min: 0, max: 1, step: 0.0001 },
      min: -5,
      max: 5,
      _all: { min: -100, max: 100, step: 0.01 }
    },
    _extra: { openFolder: true, name: "extra (extra force in center)" }
  }
};
let particles = [];
let attractors = [];
let qtree;
let gui;
let endSim = false;
let pageIsLoaded = false;
let listenForKeys = true;
let listenForMouse = true;
let sampledImg;
let showCodeArea = false;
let userDrawCode, userSetupCode;
let useCustomCode = false;
let t = 0;
let e = Math.E;
let doLoop = true;

let uiCanvas = new p5(function(p) {
  let size;

  p.setup = function() {
    p.createCanvas(
      settings["canvas"]["width"],
      settings["canvas"]["height"]
    ).parent("canvas-container");
    size = Math.pow(Math.pow(p.width, 2) + Math.pow(p.height, 2), 0.5) * 0.005;
    p.stroke(0);
    p.strokeWeight(1);
  };

  p.draw = function() {
    p.clear();
    if (settings.attractorSettings.showAttractors) {
      p.push();
      if (settings.attractorSettings.__show) {
        for (let a = 0; a < attractors.length; a++) {
          p.noFill();
          if (attractors[a].active) {
            p.stroke(0, 255, 255);
            p.strokeWeight(2);
          }
          p.ellipse(
            attractors[a].x,
            attractors[a].y,
            20 + size * 2 * Math.abs(attractors[a].forceMultiplier)
          );
          p.stroke(0);
          p.strokeWeight(1);
        }
      }
      for (let a = 0; a < attractors.length; a++) {
        if (settings.attractorSettings.__show) {
          if (attractors[a].forceMultiplier > 0) {
            p.fill(0, 255, 0);
          } else {
            p.fill(255, 0, 0);
          }
        } else {
          p.fill(0);
        }
        p.ellipse(attractors[a].x, attractors[a].y, size);
      }
      p.pop();
    }
    if (
      settings.centerAttractionForce.__show &&
      settings.centerAttractionForce.attractParticlesToCenter
    ) {
      let s = settings.centerAttractionForce;
      p.push();
      p.noStroke();
      p.fill(0, 255, 255, Math.pow(s.chance, 0.25) * 204);
      p.ellipse(width / 2, height / 2, 2 * s.radius);
      p.strokeWeight(size * 0.5);
      p.stroke(255, 0, 0);
      p.line(
        width / 2 - s.radius - s.outside.min * 10,
        height / 2,
        width / 2 - s.radius - s.outside.max * 10,
        height / 2
      );
      p.stroke(0, 255, 0);
      p.line(
        width / 2 + s.radius + s.inside.min * 10,
        height / 2 - size * 0.5,
        width / 2 + s.radius + s.inside.max * 10,
        height / 2 - size * 0.5
      );
      p.stroke(255, 128, 0, Math.pow(s.extra.chance, 0.25) * 204);
      p.line(
        width / 2 + s.radius + s.extra.min * 10,
        height / 2 + size * 0.5,
        width / 2 + s.radius + s.extra.max * 10,
        height / 2 + size * 0.5
      );
      p.pop();
    }
    if (settings.originRadius.__show) {
      p.push();
      if (settings.originRadius.ignoreRadius) {
        p.background(255, 0, 255, 51);
      } else {
        let radiusDifference =
          settings.originRadius.max - settings.originRadius.min;
        p.noFill();
        p.stroke(255, 0, 255, 51);
        p.strokeWeight(radiusDifference);
        p.ellipse(
          width / 2,
          height / 2,
          2 * (settings.originRadius.min + radiusDifference / 2)
        );
      }
      p.pop();
    }
  };
});

function setup() {
  angleMode(DEGREES);
  settings["canvas"]["width"] = innerWidth;
  settings["canvas"]["height"] = innerHeight;
  canvas = createCanvas(
    settings["canvas"]["width"],
    settings["canvas"]["height"]
  ).parent("canvas-container");
  resetSketch();
}

function draw() {
  t = frameCount * settings.timeScale;
  qtree.clear();
  for (let particle of particles) {
    qtree.insert(particle);
    particle.checked = false;
  }

  if (!settings["drawTrails"]) {
    colorMode(RGB, 255);
    let bgColor = color(settings["colors"]["backgroundColor"]);
    bgColor.setAlpha(settings["colors"]["backgroundAlpha"]);
    background(bgColor);
  }

  if (useCustomCode) {
    try {
      eval(userDrawCode);
    } catch (e) {
      console.error(e.message);
    }
  }

  for (let i = 0; i < attractors.length; i++) {
    let attractor = attractors[i];
    if (attractor.useEquations) {
      try {
        attractor.x = eval(attractor.xEquation) + attractor.initX + width / 2;
        attractor.y = eval(attractor.yEquation) + attractor.initY + height / 2;
      } catch (e) {
        console.error(e.message);
      }
    } else {
      attractor.x = attractor.initX + width / 2;
      attractor.y = attractor.initY + height / 2;
    }
  }

  for (let i = 0; i < particles.length; i++) {
    if (random() <= settings["colors"]["image"]["updateColorChance"]) {
      updateParticleColorFromImage(particles[i]);
    }

    if (settings["colors"]["showParticles"]) {
      strokeWeight(settings.colors.particleSettings.strokeWeight);
      particles[i].show(
        settings["colors"]["particleSettings"]["particleWidth"],
        settings["colors"]["particleSettings"]["particleHeight"],
        settings["colors"]["particleSettings"]["drawOutline"],
        settings["colors"]["particleSettings"]["particleOutlineColor"],
        settings["colors"]["particleSettings"]["particleOutlineAlpha"]
      );
    }

    if (settings["bounceEdges"]) {
      particles[i].bounceCanvasEdge();
    }

    if (settings["mouseAttractsParticles"]) {
      particles[i].mouseAttract(settings["mouseAttractionRange"]);
    }

    for (let a = 0; a < attractors.length; a++) {
      let attractor = attractors[a];
      if (random() < attractor.attractChance) {
        let f = createVector(attractor.x, attractor.y);
        f.sub(particles[i].pos);
        let r = dist(
          particles[i].pos.x,
          particles[i].pos.y,
          attractor.x,
          attractor.y
        );
        f.setMag(attractor.forceMultiplier / (1 + r));
        particles[i].applyForce(f);
      }
    }

    if (
      random() <= settings["centerAttractionForce"]["chance"] &&
      settings.centerAttractionForce.attractParticlesToCenter
    ) {
      let attractCenterForce = createVector(width / 2, height / 2);
      attractCenterForce.sub(particles[i].pos);
      if (
        dist(particles[i].pos.x, particles[i].pos.y, width / 2, height / 2) >
        settings["centerAttractionForce"]["radius"]
      ) {
        if (random() < 0.5) {
          attractCenterForce.setMag(
            random(
              settings["centerAttractionForce"]["outside"]["min"],
              settings["centerAttractionForce"]["outside"]["max"]
            )
          );
        } else {
          attractCenterForce.setMag(0);
        }
      } else {
        if (random() < settings["centerAttractionForce"]["extra"]["chance"]) {
          attractCenterForce.setMag(
            random(
              settings["centerAttractionForce"]["extra"]["min"],
              settings["centerAttractionForce"]["extra"]["max"]
            )
          );
        } else {
          attractCenterForce.setMag(
            random(
              settings["centerAttractionForce"]["inside"]["min"],
              settings["centerAttractionForce"]["inside"]["max"]
            )
          );
        }
      }
      particles[i].applyForce(attractCenterForce);
    } else if (random() < settings["velocitySettings"]["changeForceChance"]) {
      if (random() < settings["velocitySettings"]["changeDirectionChance"]) {
        particles[i].vel.rotate(
          random(
            settings["velocitySettings"]["rotationBoundaries"]["min"],
            settings["velocitySettings"]["rotationBoundaries"]["max"]
          )
        );
      }
      if (random() < settings["velocitySettings"]["changeMagnitudeChance"]) {
        particles[i].vel.setMag(
          particles[i].vel.mag() *
            random(
              settings["velocitySettings"]["magnitudeBoundaries"]["min"],
              settings["velocitySettings"]["magnitudeBoundaries"]["max"]
            )
        );
      }
    }

    if (random() < settings.velocitySettings.randomForce.randomForceChance) {
      particles[i].applyForce(
        createVector(
          random(
            settings.velocitySettings.randomForce.minX,
            settings.velocitySettings.randomForce.maxX
          ),
          random(
            settings.velocitySettings.randomForce.minY,
            settings.velocitySettings.randomForce.maxY
          )
        )
      );
    }

    if (settings["lines"]["connectPoints"]) {
      let points = qtree.query(
        new Circle(
          particles[i].pos.x,
          particles[i].pos.y,
          settings.lines.maxLineDist
        )
      );
      for (let point of points) {
        if (particles[i] != point) {
          stroke(lerpColor(particles[i].color, point.color, 0.5));
          strokeWeight(settings.lines.strokeWeight);
          line(
            particles[i].pos.x,
            particles[i].pos.y,
            point.pos.x,
            point.pos.y
          );
          if (
            random() < settings.lines.changeSpeedChance &&
            settings.lines.changeSpeedConnected
          ) {
            point.vel.mult(settings.lines.changeSpeedBy);
          }
        } else {
          point.checked = true;
        }
      }
    }

    particles[i].capVel(
      settings["velocitySettings"]["maxVelocity"],
      settings["velocitySettings"]["lockAxis"]["xAxis"],
      settings["velocitySettings"]["lockAxis"]["yAxis"]
    );

    particles[i].update();

    if (endSim) {
      if (alpha(particles[i].color) > 0) {
        particles[i].color.setAlpha(
          alpha(particles[i].color) - settings["endSpeed"]
        );
      } else {
        particles.splice(i, 1);
      }
    }
  }
}

function toggleLoop() {
  doLoop = !doLoop;
  if (doLoop) {
    loop();
    gui.controllers["settings.Pause (Space)"].name("Pause (Space)");
    gui.controllers["settings.Step (./Period)"].__li.style.display = "none";
  } else {
    noLoop();
    gui.controllers["settings.Pause (Space)"].name("Play (Space)");
    gui.controllers["settings.Step (./Period)"].__li.style.display = "";
  }
}

//this will import the image used as a base to pull color from.
function importImage() {
  let imgInput = createFileInput(handleFile);
  imgInput.elt.style.display = "none";
  imgInput.elt.click();
}

function handleFile(file) {
  sampledImg = loadImage(file.data);
  //real good solution to the image load time here.
  setTimeout(function() {
    settings["canvas"]["height"] = sampledImg.height;
    settings["canvas"]["width"] = sampledImg.width;
    resetSketch();
  }, 500);
}

function updateParticleColorFromImage(particle) {
  if (
    sampledImg !== undefined &&
    settings["colors"]["particleColorType"] === "image"
  ) {
    let c = sampledImg.get(particle.pos.x, particle.pos.y);
    c[3] = alpha(particle.color);
    particle.color = color(...c);
  }
}

function generateColor() {
  let colorType = settings["colors"]["particleColorType"];
  let c;
  if (colorType === "randomRGBA") {
    colorMode(RGB, 255);
    c = color(
      random(
        settings["colors"]["randomRGBA"]["redMin"],
        settings["colors"]["randomRGBA"]["redMax"]
      ),
      random(
        settings["colors"]["randomRGBA"]["greenMin"],
        settings["colors"]["randomRGBA"]["greenMax"]
      ),
      random(
        settings["colors"]["randomRGBA"]["blueMin"],
        settings["colors"]["randomRGBA"]["blueMax"]
      ),
      random(
        settings["colors"]["randomRGBA"]["alphaMin"],
        settings["colors"]["randomRGBA"]["alphaMax"]
      )
    );
  } else if (colorType === "randomHSLA") {
    colorMode(HSL, 255);
    let hue = random(
      settings["colors"]["randomHSLA"]["hueMin"],
      settings["colors"]["randomHSLA"]["hueMax"]
    );
    if (settings.colors.randomHSLA.boostRed) {
      hue = Math.pow(hue, 2) / 255;
    }
    c = color(
      hue,
      random(
        settings["colors"]["randomHSLA"]["saturationMin"],
        settings["colors"]["randomHSLA"]["saturationMax"]
      ),
      random(
        settings["colors"]["randomHSLA"]["lightnessMin"],
        settings["colors"]["randomHSLA"]["lightnessMax"]
      ),
      random(
        settings["colors"]["randomHSLA"]["alphaMin"],
        settings["colors"]["randomHSLA"]["alphaMax"]
      )
    );
  } else if (colorType === "gradient") {
    colorMode(RGB, 255);
    c = lerpColor(
      color(settings["colors"]["gradient"]["firstColor"]),
      color(settings["colors"]["gradient"]["secondColor"]),
      random()
    );
    c.setAlpha(
      random(
        settings["colors"]["gradient"]["alphaMin"],
        settings["colors"]["gradient"]["alphaMax"]
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

function resetAttractors() {
  attractors = [];
  refreshAttractorsGUI();
}

function createParticle(origin) {
  let particle = new Particle(origin, generateColor());
  particle.applyForce(
    createVector(
      random(
        settings["velocitySettings"]["startingVelocity"]["minX"],
        settings["velocitySettings"]["startingVelocity"]["maxX"]
      ),
      random(
        settings["velocitySettings"]["startingVelocity"]["minY"],
        settings["velocitySettings"]["startingVelocity"]["maxY"]
      )
    )
  );
  if (settings.colors.image.updateAtStart) {
    updateParticleColorFromImage(particle);
  }
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

  frameCount = 0;
  endSim = false;
  particles = [];

  for (let i = 0; i < attractors.length; i++) {
    let attractor = attractors[i];
    attractor.x = attractor.initX + width / 2;
    attractor.y = attractor.initY + height / 2;
  }

  userSetupCode = document.getElementById("setup-code-area").value;
  userDrawCode = document.getElementById("draw-code-area").value;

  resizeCanvas(settings["canvas"]["width"], settings["canvas"]["height"]);
  uiCanvas.resizeCanvas(
    settings["canvas"]["width"],
    settings["canvas"]["height"]
  );

  let canvasElems = document.getElementsByClassName("p5Canvas");
  for (let elem of canvasElems) {
    elem.style.width = "";
    elem.style.height = "";
  }

  colorMode(RGB, 255);
  let bgColor = color(settings["colors"]["backgroundColor"]);
  bgColor.setAlpha(settings["colors"]["backgroundAlpha"]);
  background(bgColor);

  if (
    sampledImg === undefined &&
    settings["colors"]["particleColorType"] === "image"
  ) {
    alert("Please select an image.");
    importImage();
  }

  qtree = new QuadTree(
    new Rectangle(width / 2, height / 2, width / 2, height / 2),
    1
  );

  for (var i = 0; i < settings["particleCount"]; i++) {
    while (true) {
      let origin = createVector(random(width), random(height));
      if (
        settings.originRadius.ignoreRadius ||
        (dist(origin.x, origin.y, width / 2, height / 2) <
          settings["originRadius"]["max"] &&
          dist(origin.x, origin.y, width / 2, height / 2)) >
          settings["originRadius"]["min"]
      ) {
        particles[i] = createParticle(origin);
        break;
      }
    }
  }

  if (pageIsLoaded) {
    if (width > height) {
      gui.controllers["settings.originRadius.min"].__max =
        settings.canvas.width;
      gui.controllers["settings.originRadius.max"].__max =
        settings.canvas.width;
      gui.controllers["settings.velocitySettings.maxVelocity"].__max =
        settings.canvas.width * 0.04;
      gui.controllers["settings.lines.maxLineDist"].__max =
        settings.canvas.width * 0.25;
    } else {
      gui.controllers["settings.originRadius.min"].__max =
        settings.canvas.height;
      gui.controllers["settings.originRadius.max"].__max =
        settings.canvas.height;
      gui.controllers["settings.velocitySettings.maxVelocity"].__max =
        settings.canvas.height * 0.04;
      gui.controllers["settings.lines.maxLineDist"].__max =
        settings.canvas.height * 0.25;
    }

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
      codeAreaElement.children[1].cols = 60;
    } else {
      codeAreaElement.children[1].cols = 20;
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
    for (let i in gui.controllers) {
      if (
        !["presetSave", "presetSelector", "settings.seed"].includes(i) &&
        gui.controllers[i].hasOwnProperty("__li")
      ) {
        if (
          defaultPresets[
            gui.controllers.presetSelector.getValue()
          ].hasOwnProperty(i)
        ) {
          if (
            gui.controllers[i].getValue() !==
            defaultPresets[gui.controllers.presetSelector.getValue()][i]
          ) {
            sameAsPreset = false;
            break;
          }
        } else if (
          gui.controllers[i].getValue() !== gui.controllers[i]["initialValue"]
        ) {
          sameAsPreset = false;
          break;
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
    if (attractors.length > 0) {
      otherSettings.attractors = attractors;
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
        controller.getValue() !== controller["initialValue"]
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
  if (window.location.hash !== "") {
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
        if (URLSettings._other.attractors !== undefined) {
          attractors = URLSettings._other.attractors;
        }
      }
    }
  }
}

function refreshAttractorsGUI() {
  for (let folder in gui.controllers["settings.attractorSettings.attractors"]
    .__folders) {
    gui.controllers["settings.attractorSettings.attractors"].removeFolder(
      gui.controllers["settings.attractorSettings.attractors"].__folders[folder]
    );
  }
  for (let attractor of attractors) {
    let attractorFolder = gui.controllers[
      "settings.attractorSettings.attractors"
    ].addFolder(
      Object.keys(
        gui.controllers["settings.attractorSettings.attractors"].__folders
      ).length
    );

    attractor.removeAttractor = () => {
      attractors.splice(attractors.indexOf(attractor), 1);
      refreshAttractorsGUI();
    };

    attractorFolder.add(attractor, "removeAttractor");
    attractorFolder.add(attractor, "attractChance", 0, 1, 0.0001);
    attractorFolder.add(attractor, "forceMultiplier", -10, 10, 0.01);
    attractorFolder.add(attractor, "initX");
    attractorFolder.add(attractor, "initY");
    attractorFolder.add(attractor, "useEquations");
    attractorFolder.add(attractor, "xEquation");
    attractorFolder.add(attractor, "yEquation");

    for (let i in attractorFolder.__controllers) {
      addControllerKeyListenToggle(attractorFolder.__controllers[i]);
    }

    attractorFolder.open();

    attractorFolder.domElement.onmouseenter = () => {
      attractor.active = true;
    };

    attractorFolder.domElement.onmouseleave = () => {
      attractor.active = false;
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
        endSim = true;
      } else if (e.key === "c") {
        toggleCodeArea();
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
      } else if (e.key === "a") {
        resetAttractors();
      }
    }
  };

  document.onmousedown = function(e) {
    e = e || window.event;
    if (listenForMouse) {
      if (e.ctrlKey && e.button === 0) {
        let newAttractor = {
          attractChance: 1,
          forceMultiplier: 0.5,
          initX: parseInt(mouseX - width / 2),
          initY: parseInt(mouseY - height / 2),
          useEquations: false,
          xEquation: "0.001 * t",
          yEquation: "0.001 * t"
        };

        newAttractor.x = newAttractor.initX + width / 2;
        newAttractor.y = newAttractor.initY + height / 2;

        attractors.push(newAttractor);
        refreshAttractorsGUI();
      } else if (e.shiftKey && e.button === 0) {
        particles.push(createParticle(createVector(mouseX, mouseY)));
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

    if (attractors.length > 0) {
      otherSettings.attractors = attractors;
      for (let i of otherSettings.attractors) {
        delete i.removeAttractor;
        delete i.active;
        delete i.x;
        delete i.y;
      }
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
    resetAttractors();
    if (
      value !== "Default" &&
      gui.presets[gui.controllers.presetSelector.getValue()]._other !==
        undefined
    ) {
      if (
        gui.presets[gui.controllers.presetSelector.getValue()]._other
          .userDrawCode !== undefined ||
        gui.presets[gui.controllers.presetSelector.getValue()]._other
          .userSetupCode !== undefined
      ) {
        if (
          gui.presets[gui.controllers.presetSelector.getValue()]._other
            .userDrawCode !== undefined
        ) {
          document.getElementById("draw-code-area").value =
            gui.presets[
              gui.controllers.presetSelector.getValue()
            ]._other.userDrawCode;
        }

        if (
          gui.presets[gui.controllers.presetSelector.getValue()]._other
            .userSetupCode !== undefined
        ) {
          document.getElementById("setup-code-area").value =
            gui.presets[
              gui.controllers.presetSelector.getValue()
            ]._other.userSetupCode;
        }

        document.getElementById("use-custom-code-checkbox").checked = true;
        useCustomCode = true;
      }
      if (
        gui.presets[gui.controllers.presetSelector.getValue()]._other
          .attractors !== undefined
      ) {
        attractors =
          gui.presets[gui.controllers.presetSelector.getValue()]._other
            .attractors;
        refreshAttractorsGUI();
      }
    }
    loop();
    resetSketch();
  };

  if (windowWidth < 700) {
    gui.width = windowWidth;
    gui.close();
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

  gui.controllers[
    "settings.attractorSettings"
  ].domElement.onmouseenter = () => {
    settings.attractorSettings.__show = true;
  };

  gui.controllers[
    "settings.attractorSettings"
  ].domElement.onmouseleave = () => {
    settings.attractorSettings.__show = false;
  };

  gui.controllers[
    "settings.centerAttractionForce"
  ].domElement.onmouseenter = () => {
    settings.centerAttractionForce.__show = true;
  };

  gui.controllers[
    "settings.centerAttractionForce"
  ].domElement.onmouseleave = () => {
    settings.centerAttractionForce.__show = false;
  };

  gui.controllers["settings.originRadius"].domElement.onmouseenter = () => {
    settings.originRadius.__show = true;
  };

  gui.controllers["settings.originRadius"].domElement.onmouseleave = () => {
    settings.originRadius.__show = false;
  };

  gui.controllers["settings.originRadius.min"].onChange(value => {
    if (value >= gui.controllers["settings.originRadius.max"].getValue()) {
      gui.controllers["settings.originRadius.min"].setValue(
        gui.controllers["settings.originRadius.max"].getValue() - 1
      );
    }
  });

  gui.controllers["settings.originRadius.max"].onChange(value => {
    if (value <= gui.controllers["settings.originRadius.min"].getValue()) {
      gui.controllers["settings.originRadius.max"].setValue(
        gui.controllers["settings.originRadius.min"].getValue() + 1
      );
    }
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

  updateSettingsFromURL();

  resetSketch();
};

const defaultPresets = {
  Butterfly: {
    _other: {
      attractors: [
        {
          attractChance: 1,
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
          attractChance: 1,
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
    "settings.velocitySettings.randomForce.randomForceChance": 0,
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
    "settings.velocitySettings.randomForce.randomForceChance": 0,
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
