let qt
function setup() {
    createCanvas(400, 400)

    let boundary = new Rectangle(200,200,200,200)
    qt = new QuadTree(boundary, 4)

    for(let i = 0; i < 10000; i++) {
        let p = new Point(random(width),random(height))
        qt.insert(p)
    }

}

function draw () {
    background(255)

    if(mouseIsPressed) {
        qt.insert(new Point(mouseX, mouseY))
    }
    
    window.range = new Rectangle(mouseX, mouseY, 50, 50)
    fill(255,0,0)
    circle(range.x, range.y, range.w*2, range.h*2)

    window.points = qt.query(range)
    for (let p of points) {
        fill(0)
        circle(p.x,p.y,5)
    }
}
