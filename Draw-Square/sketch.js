let rectangles = []
let gui
let settings = {
    cleanseChance: 0.1,
    _cleanseChance: {min:0,max:1,step:0.0001}
}

class autoRect {
    constructor( x, y, c ) {
        this.x = x
        this.y = y
        this.w = 0
        this.h = 0
        this.color = c
    }

    expand( min, max ) {
        this.w += Math.random() * Math.abs(max - min) + min
        this.h += Math.random() * Math.abs(max - min) + min
    }

    intersects(other, padding) {
        return !( other.x > this.x + this.w + padding || 
            this.x > other.x + other.w + padding || 
            other.y > this.y + this.h + padding || 
            this.y > other.y + other.h + padding )
    }

    // contains( x, y, padding ) {
    //     return (x >= this.x + padding &&
    //         x <= this.x + this.w + padding &&
    //         y >= this.y + padding &&
    //         y <= this.y + this.h + padding )
    // }

}

function setup() {
    createCanvas(800, 800)
    colorMode(HSL, 255)
}

function draw () {
    background(255)
    noStroke()

    if ( Math.random() < 1 ) {
        rectangles[rectangles.length] = new autoRect ( random( width ), random( height ), color( random( 0, 255 ), 128, 128 ) )
    }

    for ( let rectangle of rectangles ) {
        let doesIntersect = false
        for ( let other of rectangles ) {
            if ( rectangle !== other ) {
                if (rectangle.intersects(other, 10)) {
                    doesIntersect = true
                    break
                } else {
                    doesIntersect = false
                }
            }
        }
        if ( !doesIntersect ) {
            rectangle.expand(0,10)
        }
        fill(rectangle.color)
        rect(rectangle.x, rectangle.y, rectangle.w, rectangle.h)
    }

    for ( let i in rectangles ) {
        if ( Math.random() < settings.cleanseChance && rectangles[i].w <= 0 || rectangles[i].h <= 0 ) {
            rectangles.splice(i, 1)
        }
    }
}

window.onload = function () {
    gui = new AutoGUI()
    gui.autoAdd(settings, 'settings')
}