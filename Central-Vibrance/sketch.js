let particles = []
let gui
let attractCenterForce
let mouseForce
let endSim = false

let settings = {
  'Reset Canvas (R)': resetSketch,
  'End Simulation (E)': function(){endSim=true},
  'Save As PNG (S)': function(){saveCanvas(canvas, 'central-vibrance', 'png')},
  canvas: {
    width: 1024,
    _width: {min:1,max:8192,step:1},
    height: 1024,
    _height: {min:1,max:8192,step:1}
  },
  _canvas: {openFolder:true,name:'Canvas Size'},
  originRadius: {
    min: 0,
    max: 192,
    _all: {min:0,max:8192,step:1}
  },
  showParticles: false,
  particleCount: 100,
  _particleCount: {min:1,max:400,step:1,name:'Particle Count (High Numbers Get Laggy)'},
  bounceEdges: false,
  drawTrails: true,
  maxStartingVelocity: 1,
  _maxStartingVelocity: {min:0,max:100,step:0.01},
  mouseAttractsParticles: false,
  mouseAttractionRange: 100,
  _mouseAttractionRange: {min:0,max:4096,step:1,name:'Mouse Attraction Range',hide:true},
  maxVelocity: 1,
  _maxVelocity: {min:0,max:100,step:0.01},
  lockAxis: {
    xAxis: false,
    yAxis: false
  },
  colors: {
    backgroundColor: {r:21,g:21,b:21},
    _backgroundColor: {name:'Background Color',type:'color'},
    backgroundAlpha: 255,
    _backgroundAlpha: {min:0,max:255,step:1,name:'Background Alpha'},
    particleColorType: 'randomRGBA',
    _particleColorType: {type:'dropmenu',name:'Particle Color Type',options:['randomRGBA','randomHSLA','gradient']},
    randomRGBA: {
      redMin: 0,
      redMax: 255,
      greenMin: 0,
      greenMax: 255,
      blueMin: 0,
      blueMax: 255,
      alphaMin: 0,
      alphaMax: 255,
      _all: {min:0,max:255,step:1}
    },
    _randomRGBA: {openFolder:true},
    randomHSLA: {
      hueMin: 0,
      hueMax: 255,
      saturationMin: 0,
      saturationMax: 255,
      lightnessMin: 0,
      lightnessMax: 255,
      alphaMin: 0,
      alphaMax: 255,
      _all: {min:0,max:255,step:1}
    },
    gradient: {
      firstColor: '#ffffff',
      secondColor: '#000000',
      alphaMin: 0,
      alphaMax: 255,
      _all: {type:'color',min:0,max:255,step:1}
    },
    image:{
      'Open File': function() {console.log('this code needs writing')},
      alphaMin: 0,
      alphaMax: 255,
      _all: {min:0,max:255,step:1}
    },
    _all: {openFolder:true,hide:true}
  },
  lines: {
    connectPoints: true,
    slowWhenConnected: true,
    maxLineDist: 25,
    _maxLineDist: {min:1,max:512,step:1}
  },
  'Attract Particles to Center': true,
  centerAttractionForce: {
    chance: 0.1,
    _chance: {min:0,max:1,step:0.0001,name:'Chance of Forces'},
    radius: 128,
    _radius: {min:0,max:8192,step:1},
    outside:{
      min: -1,
      max: 1,
      _all: {min:-100,max:100,step:0.01}
    },
    _outside: {openFolder:true,name:"Force Outside Of Center"},
    inside:{
      min: -2,
      max: 2,
      _all: {min:-100,max:100,step:0.01}
    },
    _inside: {openFolder:true,name:"Force Inside Center"},
    extra: {
      chance: 0.005,
      _chance: {min:0,max:1,step:0.0001},
      min: -5,
      max: 5,
      _all: {min:-100,max:100,step:0.01}
    },
    _extra: {openFolder:true,name:'Extra Force Inside Center'}
  },
  _centerAttractionForce: {name:'Central Attraction Force'}
}

function setup() {
  let ratio = windowWidth / windowHeight
  if(ratio > 1) {
    settings['canvas']['width'] = 1920
    settings['canvas']['height'] = 1920 / ratio
  } else {
    settings['canvas']['width'] = 1920 * ratio
    settings['canvas']['height'] = 1920
  }
  canvas = createCanvas(settings['canvas']['width'], settings['canvas']['height']).parent("canvas-container")
  resetSketch()
}

function draw() {
  if (!settings['drawTrails']) {
    background(settings['colors']['backgroundColor']['r'],settings['colors']['backgroundColor']['g'],settings['colors']['backgroundColor']['b'],settings['colors']['backgroundAlpha'])
  }
  for (var i = 0; i < particles.length; i++) {
    particles[i].update()
    particles[i].capVel(settings['maxVelocity'], settings['lockAxis']['xAxis'], settings['lockAxis']['yAxis'])
    if(settings['showParticles']) {
      particles[i].show(0.0075*((settings['canvas']['width']**2 + settings['canvas']['height']**2)**0.5))
    }
    if(settings['bounceEdges']) {
      particles[i].bounceCanvasEdge()
    }
    if(settings['mouseAttractsParticles']) {
      particles[i].mouseAttract(settings['mouseAttractionRange'])
    }

    if(Math.random() < settings['centerAttractionForce']['chance'] && settings['Attract Particles to Center']) {
      attractCenterForce = createVector(width/2, height/2)
      attractCenterForce.sub(particles[i].pos)
      if(dist(particles[i].pos.x, particles[i].pos.y, width/2, height/2) > settings['centerAttractionForce']['radius']) {
        if(Math.random() < 0.5) {
          attractCenterForce.setMag(random(settings['centerAttractionForce']['outside']['min'], settings['centerAttractionForce']['outside']['max']))
        } else {
          attractCenterForce.setMag(0)
        }
      } else {
        if(Math.random() < settings['centerAttractionForce']['extra']['chance']) {
          attractCenterForce.setMag(random(settings['centerAttractionForce']['extra']['min'], settings['centerAttractionForce']['extra']['max']))
        } else {
          attractCenterForce.setMag(random(settings['centerAttractionForce']['inside']['min'], settings['centerAttractionForce']['inside']['max']))
        }
      }
      particles[i].applyForce(attractCenterForce);
    } else if(Math.random() < 0.002){
      particles[i].applyForce(createVector(random(-settings['maxStartingVelocity'],settings['maxStartingVelocity']), random(-settings['maxStartingVelocity'],settings['maxStartingVelocity'])))
    }

    if(settings['lines']['connectPoints']){
      for(var j = 0; j < particles.length; j++) {
        if(dist(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y) < settings['lines']['maxLineDist']){
          if(Math.random() < 0.1 && settings['lines']['slowWhenConnected']) {
            particles[i].vel.mult(0.97)
          }
          stroke(lerpColor(particles[i].color, particles[j].color, 0.5))
          if(i !== j) {
            line(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y)
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

function windowResized() {
  updateCanvasSize()
}

window.onload = function()  {
  updateCanvasSize()
  gui = new autoGUI({width: 325});
  gui.autoAdd(settings)
  gui.addToggleDisplayEvent('Attract Particles to Center','centerAttractionForce')
  gui.addToggleDisplayEvent('mouseAttractsParticles','mouseAttractionRange')
  gui.addMenuFolderSwitch('particleColorType', 'colors')
}

function updateCanvasSize() {
  let canvasElem = document.getElementById("defaultCanvas0")
  if(windowHeight < windowWidth) {
    canvasElem.style.width = "auto";
    canvasElem.style.height = "auto";
  } else {
    canvasElem.style.width = "auto";
    canvasElem.style.height = "auto";
  }
}

function generateColor() {
  let colorType = settings['colors']['particleColorType']
  let c
  if (colorType === 'randomRGBA') {
    colorMode(RGB, 255)
    c = color(random(settings['colors']['randomRGBA']['redMin'],settings['colors']['randomRGBA']['redMax']),random(settings['colors']['randomRGBA']['greenMin'],settings['colors']['randomRGBA']['greenMax']),random(settings['colors']['randomRGBA']['blueMin'],settings['colors']['randomRGBA']['blueMax']),random(settings['colors']['randomRGBA']['alphaMin'],settings['colors']['randomRGBA']['alphaMax']))
  } else if (colorType === 'randomHSLA') {
    colorMode(HSL, 255)
    c = color(random(settings['colors']['randomHSLA']['hueMin'],settings['colors']['randomHSLA']['hueMax']),random(settings['colors']['randomHSLA']['saturationMin'],settings['colors']['randomHSLA']['saturationMax']),random(settings['colors']['randomHSLA']['lightnessMin'],settings['colors']['randomHSLA']['lightnessMax']),random(settings['colors']['randomHSLA']['alphaMin'],settings['colors']['randomHSLA']['alphaMax']))
  } else if (colorType === 'gradient') {
    colorMode(RGB, 255)
    c = lerpColor(color(settings['colors']['gradient']['firstColor']),color(settings['colors']['gradient']['secondColor']),random())
    c.setAlpha(random(settings['colors']['gradient']['alphaMin'],settings['colors']['gradient']['alphaMax']))
  }
  return c
}

function resetSketch() {
  endSim = false
  resizeCanvas(settings['canvas']['width'], settings['canvas']['height'])
  background(settings['colors']['backgroundColor']['r'],settings['colors']['backgroundColor']['g'],settings['colors']['backgroundColor']['b'],settings['colors']['backgroundAlpha'])
  updateCanvasSize()
  particles = []
  for (var i = 0; i < settings['particleCount'];) {
    let origin = createVector(random(width), random(height))
    if(dist(origin.x, origin.y, width/2, height/2) < settings['originRadius']['max'] && dist(origin.x, origin.y, width/2, height/2) > settings['originRadius']['min']) {
      
      particles[i] = new Particle(origin, generateColor());
      particles[i].applyForce(createVector(random(-settings['maxStartingVelocity'],settings['maxStartingVelocity']), random(-settings['maxStartingVelocity'],settings['maxStartingVelocity'])))
      i++
    }
  }
}