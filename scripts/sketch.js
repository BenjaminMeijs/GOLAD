//TODO: AUTOMATIC RESCALING OF GAME (E.G: ON WINDOW RESIZE)


var dms = {
  w: 600,
  h: 600
}
let col = {
  blue: "#1e88e5",
  red: "#e53935",
  death: "#555555",
  gridlines: "#1f1f1f",
  background: '#e8e8e8'
}



let boardSize = 11;
let blockSize = Math.floor(dms.h / boardSize);

function setup() {
  var canvas = createCanvas(dms.w, dms.h);
  canvas.parent('canvas-holder');
  UIstyling();
}

let game = new gameCreator()




function draw() {
  translate(2, 2);
  background(color(col.background))
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      game.grid[i][j].updateNBinfo()
      game.grid[i][j].iteratepredict()
      //      grid[i][j].iterate()
      game.grid[i][j].display()
    }
  }
  
  game.tileInfo()

}
