let settings = {
  reset: resetSketch,
  smoothMap: smoothMap,
  canvasWidth: 800,
  canvasHeight: 800,
  cellSize: 20,
  threshold: 0.5,
  _threshold: {step: 0.001},
  encourageEdges: true,
  smoothIterations: 7,
  smoothRange: 2,
  minWallCountSubtract: 0,
  _all: {min: 0, step: 1}
}

let grid = []

function setup() {
  createCanvas(settings.canvasWidth, settings.canvasHeight)

  resetSketch()
}

function draw() {
  noStroke()
  for( let i = 0; i < grid.length; i++ ) {
    for( let j = 0; j < grid[i].length; j++ ) {
      if ( grid[i][j] === true ) {
        fill(0)
      } else {
        fill(255)
      }
      rect( i * settings.cellSize, j * settings.cellSize, settings.cellSize, settings.cellSize)  
    }
  }
}

function keyPressed() {
  if (key === "r") {
    resetSketch()
  }
}

function smoothMap() {
  let newGrid = []
  for( let i = 0; i < grid.length; i++ ) {
    newGrid[i] = []
    for( let j = 0; j < grid[i].length; j++ ) {
      let neighbourWallTiles = getSurroundingWallCount(i, j)

      if ( neighbourWallTiles > int(Math.pow(settings.smoothRange * 2 + 1, 2) / 2 ) - settings.minWallCountSubtract ) {
        newGrid[i][j] = true
      } else if ( neighbourWallTiles < int(Math.pow(settings.smoothRange * 2 + 1, 2) / 2 ) - settings.minWallCountSubtract ) {
        newGrid[i][j] = false
      } else {
        newGrid[i][j] = grid[i][j]
      }
    }
  }

  for( let i = 0; i < newGrid.length; i++ ) {
    for( let j = 0; j < newGrid[i].length; j++ ) {
      grid[i][j] = newGrid[i][j]
    }
  }
}

function getSurroundingWallCount(gridX, gridY) {
  let count = 0
  for( let neighbourX = gridX - settings.smoothRange; neighbourX <= gridX + settings.smoothRange; neighbourX++ ) {
    for( let neighbourY = gridY - settings.smoothRange; neighbourY <= gridY + settings.smoothRange; neighbourY++ ) {
      if ( neighbourX >= 0 && neighbourX < grid.length && neighbourY >= 0 && neighbourY < grid[neighbourX].length ) {
        if ( neighbourX !== gridX || neighbourY != gridY ) {
          if ( grid[neighbourX][neighbourY] ) {
            count++
          }
        }
      } else if ( settings.encourageEdges ) {
        count += 4
      }
    }
  }

  return count
}

function resetSketch() {
  grid = []
  resizeCanvas(settings.canvasWidth, settings.canvasHeight)

  for( let i = 0; i < width / settings.cellSize; i++ ) {
    grid[i] = []
    for( let j = 0; j < height / settings.cellSize; j++ ) {
      if ( Math.random() < settings.threshold ) {
        grid[i][j] = true
      } else {
        grid[i][j] = false
      }
    }
  }

  for ( let h = 0; h < settings.smoothIterations; h++ ) {
    smoothMap()
  }
}

window.onload = () => {
  let gui = new AutoGUI()
  gui.autoAdd(settings, "settings")
}