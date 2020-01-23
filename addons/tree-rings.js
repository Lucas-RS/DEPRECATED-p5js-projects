class TreeRings {
  constructor(noise, width, height, x, y, res = 100, ringCount = Math.pow(Math.round(Math.random() * 100), 2) / 100, grandRingCount = Math.pow(Math.round(Math.random() * 50), 2) / 50, scaleX = 0.25, scaleY = 0.25, scaleZ = 0.25, radiusMult = 1) {
    this.rings = []
    this.res = res
    this.ringCount = ringCount
    this.grandRingCount = grandRingCount
    this.scale = {
      x: scaleX,
      y: scaleY,
      z: scaleZ
    }
    this.pos = [x, y]
    this.radiusMult = radiusMult
    this.generate(noise, width, height)
  }

  generate(noise, width, height) {
    for (let j = 0; j < this.ringCount; j++) {
      this.rings[j] = []
      for (let i = 0; i < this.res; i++) {
        const x = Math.sin(i * Math.PI * 2 / this.res) 
        const y = Math.cos(i * Math.PI * 2 / this.res) 
        const r = 
          (noise((x + this.pos[0]) * this.scale.x, (y + this.pos[1]) * this.scale.y, j * this.scale.z) 
          * 10
          + ((j % this.grandRingCount) * (width < height ? width : height) / this.grandRingCount) / 20)
          * 2
          * this.radiusMult
        
        this.rings[j][i] = [
          x * r + this.pos[0], 
          y * r + this.pos[1]
        ]
      }
    }
  }
}