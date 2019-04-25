let qt
function setup() {
    createCanvas(400, 400)

    let boundary = new Rectangle(200,200,200,200)
    qt = new QuadTree(boundary, 4)

    for(let i = 0; i < 100; i++) {
        let p = new Point(random(width),random(height))
        qt.insert(p)
    }

}

function draw () {
    background(255)

    if(mouseIsPressed) {
        qt.insert(new Point(mouseX, mouseY))
    }
    
    window.yeet = new Circle(mouseX, mouseY, 50, 50)
    fill(255,0,0)
    ellipse(yeet.x, yeet.y, yeet.r*2)

    window.points = qt.query(yeet)
    for (let p of points) {
        fill(0)
        ellipse(p.x,p.y,5)
    }
}
