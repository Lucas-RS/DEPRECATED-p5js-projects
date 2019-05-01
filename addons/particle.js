//Add scale, so larger display resolutions function the sane
class Particle {

    constructor(origin, c = color(0)){
        this.pos = origin
        this.x = this.pos.x
        this.y = this.pos.y
        this.vel = createVector(0,0)
        this.acc = createVector(0,0)
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
        fill(this.color)
        if(showStroke){
            colorMode(RGB,255)
            stroke(red(strokeColor),green(strokeColor),blue(strokeColor),strokeAlpha)
        } else {
            noStroke()
        }
        ellipse(this.pos.x, this.pos.y, sizeX, sizeY)
    }

    wrap() {
        if(this.pos.x > width) this.pos.x = 0
        if(this.pos.x < 0) this.pos.x = width
        if(this.pos.y > height) this.pos.y = 0
        if(this.pos.y < 0) this.pos.y = height
    }

    bounceCanvasEdge() {
        if(this.pos.x > width) this.vel.mult(-1)
        if(this.pos.x < 0) this.vel.mult(-1)
        if(this.pos.y > height) this.vel.mult(-1)
        if(this.pos.y < 0) this.vel.mult(-1)
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

    mouseAttract(trackDist = width * 0.1) {
        if(dist(this.pos.x, this.pos.y, mouseX, mouseY) < trackDist) {
            let f = createVector(mouseX, mouseY)
            f.sub(this.pos)
            f.setMag(dist(this.pos.x, this.pos.y, mouseX, mouseY) / (width * 0.1))
            this.applyForce(f)
        }
    }
}