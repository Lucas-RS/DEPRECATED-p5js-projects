class Point {
    constructor(x,y,data) {
        this.x = x
        this.y = y
        this.data = data
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

class Circle {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.rSquared = this.r * this.r;
    }
  
    contains(point) {
      let d = Math.pow((point.x - this.x), 2) + Math.pow((point.y - this.y), 2);
      return d <= this.rSquared;
    }
  
    intersects(range) {
  
      let xDist = Math.abs(range.x - this.x);
      let yDist = Math.abs(range.y - this.y);
  
      let r = this.r;
  
      let w = range.w;
      let h = range.h;
  
      let edges = (xDist - w) ** 2 + (yDist - h) ** 2;
  
      if (xDist > (r + w) || yDist > (r + h))
        return false;
  
      if (xDist <= w || yDist <= h)
        return true;
  
      return edges <= this.rSquared;
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

    query(range, found = []) {
        if (!this.boundary.intersects(range)) {
            return found
        } else {
            for (let p of this.points) {
                if (!p.checked && range.contains(p)) {
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
        return found
    }

    clear() {
        delete this.topleft
        delete this.topright
        delete this.bottomleft
        delete this.bottomright
        this.points = []
        this.divided = false
    }

    p5show() {
        noFill()
        stroke(255)
        rectMode(CENTER)
        rect(this.boundary.x, this.boundary.y, this.boundary.w * 2, this.boundary.h * 2)
        if(this.divided) {
            this.topleft.p5show()
            this.topright.p5show()
            this.bottomleft.p5show()
            this.bottomright.p5show()
        }
    }
}