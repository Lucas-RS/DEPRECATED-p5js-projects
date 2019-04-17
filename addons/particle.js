function Particle(origin) {
    this.pos = origin
    this.vel = createVector(0,0)
    this.acc = createVector(0,0)
    this.color = color(random(0,255),random(0,255),random(0,255),random(0,255))

    this.update = function() {
        this.pos.add(this.vel)
        this.vel.add(this.acc)
        this.acc.mult(0)
    }

    this.applyForce = function(force) {
        this.acc.add(force)
    }

    this.show = function(sizeX = 5, sizeY = sizeX) {
        fill(this.color)
        circle(this.pos.x, this.pos.y, sizeX, sizeY)
    }

    this.wrap = function() {
        if(this.pos.x > width) this.pos.x = 0
        if(this.pos.x < 0) this.pos.x = width
        if(this.pos.y > height) this.pos.y = 0
        if(this.pos.y < 0) this.pos.y = height
    }

    this.capVel = function(capX, capY) {
        // if(capY == ""){
        if(this.vel.mag() > capX) {
            this.vel.setMag(0)
            }
        // } 
        
        // if(this.vel.x > capX ) {
        //     this.vel.x = capX
        // } else if(this.vel.x < -capX ) {
        //     this.vel.x = -capX
        // }
        // if(this.vel.y > capY ) {
        //     this.vel.y = capY
        // } else if(this.vel.y < -capY ) {
        //     this.vel.y = -capY
        // }
    }

    this.mouseAttract = function(trackDist = width * 0.1, magMultiplier = 1){
        let f
        if(dist(this.pos.x, this.pos.y, mouseX, mouseY) < trackDist) {
            f = createVector(mouseX, mouseY)
            f.sub(this.pos)
            f.setMag(dist(this.pos.x, this.pos.y, mouseX, mouseY) / trackDist * magMultiplier)
            this.applyForce(f)
        }
    }
}