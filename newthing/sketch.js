let myp5, gui
let settings = {
  canvas: {
    height: 500,
    width: 500
  },
  _canvas: {openFolder:true}
}

let s = function(p) {
  let particles = []

  p.setup = () => {
    p.createCanvas(settings.canvas.width, settings.canvas.height)
    p.reset()
  }
  
  p.draw = () => {
    p.background(0)
    for ( particle of particles ) {
      p.stroke(particle.color)
      p.ellipse(particle.x, particle.y, 5, 5)
    }
  }

  p.reset = () => {
    p.resizeCanvas(settings.canvas.width, settings.canvas.height)
    for ( let i = 0; i < 100; i++ ) {
      particles[i] = new Particle( p.createVector( p.random(p.width), p.random(p.height) ), p.color(255) )
    }
  }

  p.keyPressed = () => {
    if ( key = "r" ) {
      p.reset()
    }
  }
}

window.onload = () => {
  myp5 = new p5(s)
  gui = new AutoGUI()
  gui.autoAdd(settings, 'settings')
}