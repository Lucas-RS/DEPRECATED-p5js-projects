const sketch = function(p) {
  const seed = (new Date()).getTime()
  console.log(seed)
  const simplex = new SimplexNoise(seed.toString())
  const size = 20
  const noiseScale = 400
  
  p.setup = () => {
    let canvas = p.createCanvas(840, 1180, p.SVG)
    canvas.elt.wrapper.style.boxShadow = "0 0 5pt black"
    p.noFill()
    p.stroke(0)
    p.randomSeed(seed)
    p.noLoop()
  }
  
  p.draw = () => {
    for (let x = 0; x < p.width; x += p.width / size) {
      for (let y = 0; y < p.height; y += p.width / size) {
        const n = Math.ceil((simplex.noise2D(x / noiseScale, y / noiseScale) + 1) * 5)
        const stump = new TreeRings(
          (x, y, z) => {return (simplex.noise3D(x, y, z) + 1) * 0.5}, 
          p.width, 
          p.height, 
          x + p.width / size * 0.5, 
          y + p.width / size * 0.5, 
          25, 
          p.random() < 0.2 ? n : p.random() < 0.8 ? n * 2 : n * 3, 
          n,
          0.25, 
          0.25, 
          1, 
          4 / size
        )
        for (let j = 0; j < stump.ringCount; j++) {
          p.beginShape()
          for (let i = 0; i < stump.res; i++) {
            p.curveVertex(stump.rings[j][i][0], stump.rings[j][i][1])
          }
          p.curveVertex(stump.rings[j][0][0], stump.rings[j][0][1])
          p.curveVertex(stump.rings[j][1][0], stump.rings[j][1][1])
          p.curveVertex(stump.rings[j][2][0], stump.rings[j][2][1])
          p.endShape()
        }
      }
    }
  }
};

let myp5 = new p5(sketch)