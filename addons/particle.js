class Particle {

    constructor(s, origin, c = color(0)){
        this.s = s
        this.pos = origin
        this.x = this.pos.x
        this.y = this.pos.y
        this.vel = this.s.createVector(0,0)
        this.acc = this.s.createVector(0,0)
        this.color = c
        this.checked = false
    }

    update() {
        this.pos.add(this.vel)
        this.x = this.pos.x
        this.y = this.pos.y
        this.vel.add(this.acc)
        this.acc.mult(0)
    }

    applyForce(force) {
        this.acc.add(force)
    }

    show(sizeX = 10, sizeY = sizeX, showStroke = false, strokeColor = color(0), strokeAlpha = 255) {
        this.s.fill(this.color)
        if(showStroke){
            this.s.colorMode(this.s.RGB,255)
            this.s.stroke(red(strokeColor),this.s.green(strokeColor),this.s.blue(strokeColor),strokeAlpha)
        } else {
            this.s.noStroke()
        }
        this.s.ellipse(this.pos.x, this.pos.y, sizeX, sizeY)
    }

    wrap() {
        if(this.pos.x > this.s.width) this.pos.x = 0
        if(this.pos.x < 0) this.pos.x = this.s.width
        if(this.pos.y > this.s.height) this.pos.y = 0
        if(this.pos.y < 0) this.pos.y = this.s.height
    }

    bounceCanvasEdge() {
        if(this.pos.x > this.s.width / 2) this.vel.x *= -1
        if(this.pos.x < -this.s.width / 2) this.vel.x *= -1
        if(this.pos.y > this.s.height / 2) this.vel.y *= -1
        if(this.pos.y < -this.s.height / 2) this.vel.y *= -1
    }

    capVel(cap, restrictX, restrictY) {
        if(this.vel.mag() > cap) {
            this.vel.setMag(cap)
        }
        if(restrictX){
            this.vel.x = 0
        }
        if(restrictY){
            this.vel.y = 0
        }
    }

    mouseAttract(trackDist = this.s.width * 0.1) {
        if(this.s.dist(this.pos.x, this.pos.y, this.s.mouseX, this.s.mouseY) < trackDist) {
            let f = this.s.createVector(this.s.mouseX, this.s.mouseY)
            f.sub(this.pos)
            f.setMag(this.s.dist(this.pos.x, this.pos.y, this.s.mouseX, this.s.mouseY) / (this.s.width * 0.1))
            this.applyForce(f)
        }
    }
}