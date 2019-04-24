let qt
function setup() {
    createCanvas(400, 400)
    background(0)

    let boundary = new Rectangle(200,200,200,200)
    qt = new QuadTree(boundary, 4)

    for(let i = 0; i < 100; i++) {
        let p = new Point(random(width),random(height))
        qt.insert(p)
    }
    qt.show()

    window.range = new Rectangle(250, 250, 107, 75)
    noFill()
    stroke(255,0,0)
    rect(range.x, range.y, range.w*2, range.h*2)
    window.points = []
    qt.query(range, points)
    console.log(points)
    for (let p of points) {
        stroke(0,255,0)
        circle(p.x,p.y,5)
    }
}

function draw () {
    if(mouseIsPressed) {
        qt.insert(new Point(mouseX, mouseY))
        qt.show()
    }
}
