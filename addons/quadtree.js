class Point {
    constructor(x,y) {
        this.x = x
        this.y = y
    }
}

class Rectangle {
    constructor(x,y,w,h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    contains(point) {
        return(point.x >= this.x - this.w &&
            point.x <= this.x + this.w &&
            point.y >= this.y - this.h &&
            point.y <= this.y + this.h)
    }

    intersects(range) {
        return !(range.x - range.w > this.x + this.w ||
            range.x + range.w < this.x - this.w ||
            range.y - range.h > this.y + this.h ||
            range.y + range.h < this.y - this.h)
    }
}

class QuadTree {
    constructor(boundary, capacity = 1) {
        this.boundary = boundary
        this.capacity = capacity
        this.points = []
        this.divided = false
    }

    subdivide() {
        let x = this.boundary.x
        let y = this.boundary.y
        let w = this.boundary.w
        let h = this.boundary.h

        let tl = new Rectangle(x - w / 2, y - h / 2, w / 2, h / 2)
        this.topleft = new QuadTree(tl, this.capacity)
        let tr = new Rectangle(x + w / 2, y - h / 2, w / 2, h / 2)
        this.topright = new QuadTree(tr, this.capacity)
        let bl = new Rectangle(x - w / 2, y + h / 2, w / 2, h / 2)
        this.bottomleft = new QuadTree(bl, this.capacity)
        let br = new Rectangle(x + w / 2, y + h / 2, w / 2, h / 2)
        this.bottomright = new QuadTree(br, this.capacity)
        this.divided = true
    }

    insert(point) {
        if (!this.boundary.contains(point)) {
            return false
        }

        if (this.points.length < this.capacity) {
            this.points.push(point)
            return true
        } else {
            if(!this.divided) {
                this.subdivide()
            }
            if (this.topleft.insert(point) || 
            this.topright.insert(point) || 
            this.bottomleft.insert(point) || 
            this.bottomright.insert(point)) {
                return true
            } 
        }
    }

    query(range, found) {
        if (!this.boundary.intersects(range)) {
            return found
        } else {
            for (let p of this.points) {
                if (range.contains(p)) {
                    found.push(p)
                }
            }

            if (this.divided) {
                this.topleft.query(range, found)
                this.topright.query(range, found)
                this.bottomleft.query(range, found)
                this.bottomright.query(range, found)
            }
        }
    }

    show() {
        stroke(255)
        strokeWeight(3)
        noFill()
        rectMode(CENTER)
        rect(this.boundary.x, this.boundary.y, this.boundary.w * 2, this.boundary.h * 2)
        if (this.divided) {
            this.topleft.show()
            this.topright.show()
            this.bottomleft.show()
            this.bottomright.show()
        }
        for(let p of this.points) {
            point(p.x, p.y)
        }
    }
}