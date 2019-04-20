function Particle(origin, color) {
    this.pos = origin
    this.vel = createVector(0,0)
    this.acc = createVector(0,0)
    this.color = color

    this.update = function() {
        this.pos.add(this.vel)
        this.vel.add(this.acc)
        this.acc.mult(0)
    }

    this.applyForce = function(force) {
        this.acc.add(force)
    }

    this.show = function(sizeX = 5, sizeY = sizeX, showStroke = true) {
        fill(this.color)
        if(showStroke){
            stroke(color(255 - red(this.color), 255 - green(this.color), 255 - blue(this.color)))
        } else {
            noStroke()
        }
        circle(this.pos.x, this.pos.y, sizeX, sizeY)
    }

    this.wrap = function() {
        if(this.pos.x > width) this.pos.x = 0
        if(this.pos.x < 0) this.pos.x = width
        if(this.pos.y > height) this.pos.y = 0
        if(this.pos.y < 0) this.pos.y = height
    }

    this.bounceCanvasEdge = function() {
        if(this.pos.x > width) this.vel.mult(-1)
        if(this.pos.x < 0) this.vel.mult(-1)
        if(this.pos.y > height) this.vel.mult(-1)
        if(this.pos.y < 0) this.vel.mult(-1)
    }

    this.capVel = function(cap, restrictX, restrictY) {
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
    this.mouseAttract = function(trackDist = width * 0.1){
        if(dist(this.pos.x, this.pos.y, mouseX, mouseY) < trackDist) {
            let f = createVector(mouseX, mouseY)
            f.sub(this.pos)
            f.setMag(dist(this.pos.x, this.pos.y, mouseX, mouseY) / (width * 0.1))
            this.applyForce(f)
        }
    }
}