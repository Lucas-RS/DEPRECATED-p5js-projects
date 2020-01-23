let settings = {
  name: "Config",
  children: {
    firstChild: "hello world",
    __firstChild: {
      type: "string",
      children: {
        thirdChild: true,
        __thirdChild: {
          name: "epicness",
          type: "boolean"
        }
      }
    },
    secondChild: 10,
    __secondChild: {
      name: "Second Child",
      type: "number",
      min: 0,
      step: 1
    }
  }
};
let mainCanvas;
let listenForInput = false;
let gui;

let mainSketch = function(s) {
  s.setup = function() {
    s.createCanvas(1024, 1024).parent("canvas-container");
    s.noLoop();
  };

  s.draw = function() {
    s.background(255);
    s.ellipse(
      850 + mouseParallax(100, "h"),
      150 + mouseParallax(100, "v"),
      150,
      150
    );
  };

  mouseParallax = (zDepth, direction) => {
    if (listenForInput) {
      if (direction === "h") {
        return (s.mouseX / s.width) * -zDepth + zDepth * 0.5;
      } else if (direction === "v") {
        return (s.mouseY / s.height) * -zDepth + zDepth * 0.5;
      }
    } else {
      return 0;
    }
  };
};

window.onload = () => {
  document.body.style.background =
    "hsl(" +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 25) +
    "%," +
    Math.round(Math.random() * 25 + 25) +
    "%)";

  gui = new GUI();
  gui.add(settings);
  
  mainCanvas = new p5(mainSketch);

  document.getElementById("defaultCanvas0").onmouseenter = () => {
    listenForInput = true;
    mainCanvas.loop();
  };

  document.getElementById("defaultCanvas0").onmouseleave = () => {
    listenForInput = false;
    mainCanvas.noLoop();
  };

  document.onkeypress = e => {
    e = e || window.event;
    if (listenForInput) {
    }
  };

  document.onmousedown = e => {
    e = e || window.event;
    if (listenForInput) {
    }
  };
};
