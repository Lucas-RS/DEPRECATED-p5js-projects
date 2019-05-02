let rectangles = []
let gui
let settings = {
    reset: () => { resetSketch() },
    newRectChance: 1,
    _newRectChance: {min:0,max:1,step:0.01},
    padding: 5,
    _padding: {min:0,max:100,step:1},
    dimensions: {
        minWidth: 10,
        minHeight: 10,
        _all: {min:0,max:100,step:1}
    },
    expandAmount: {
        min: 0,
        max: 10,
        _all: {min:0,max:100,step:1}
    },
    randomMovement: {
        xMin: -1,
        xMax: 1,
        yMin: -1,
        yMax: 1,
        _all: {min:-50,max:50,step:1}
    },
    _all: {openFolder: true}
}

class autoRect {

    constructor( x, y, c ) {
        this.x = x
        this.y = y
        this.w = 0
        this.h = 0
        this.color = c
        this.canExpand = true
    }

    expand( min, max ) {
        this.w += Math.random() * Math.abs(max - min) + min
        this.h += Math.random() * Math.abs(max - min) + min
    }

    intersects( other, padding ) {
        return !( other.x > this.x + this.w + padding || 
            this.x > other.x + other.w + padding || 
            other.y > this.y + this.h + padding || 
            this.y > other.y + other.h + padding )
    }
}

function setup() {
    createCanvas(innerWidth, innerHeight)
    colorMode(HSL, 255)
}

function draw() {
    background(255)
    noStroke()

    for ( let i in rectangles ) {
        if ( ( rectangles[i].w <= settings.dimensions.minWidth || 
            rectangles[i].h <= settings.dimensions.minHeight ) && 
            !rectangles[i].canExpand || 
            rectangles[i].x > width || 
            rectangles[i].x + rectangles[i].w < 0 || 
            rectangles[i].y > height || 
            rectangles[i].y + rectangles[i].h < 0 ) {
            rectangles.splice(i, 1)
        }
    }

    if ( Math.random() < settings.newRectChance ) {
        rectangles[rectangles.length] = new autoRect ( random( width ), random( height ), color( random( 0, 255 ), 127, 127 ) )
    }

    for ( let rectangle of rectangles ) {

        let doesIntersect = false
        for ( let other of rectangles ) {
            if ( rectangle !== other ) {
                if (rectangle.intersects(other, settings.padding)) {
                    doesIntersect = true
                    break
                } else {
                    doesIntersect = false
                }
            }
        }
        if ( rectangle.canExpand ) {
            if ( !doesIntersect ) {
                rectangle.expand( settings.expandAmount.min, settings.expandAmount.max )
            } else {
                rectangle.canExpand = false
            }
        }

        rectangle.x += random( settings.randomMovement.xMin, settings.randomMovement.xMax )
        rectangle.y += random( settings.randomMovement.yMin, settings.randomMovement.yMax )

        fill(rectangle.color)
        rect(rectangle.x, rectangle.y, rectangle.w, rectangle.h)
    }
}

const resetSketch = () => {
    rectangles = []
    resizeCanvas(innerWidth, innerHeight)
    colorMode(HSL, 255)
}

window.onload = function () {
    gui = new AutoGUI()
    gui.autoAdd(settings, 'settings')
}