function gameCreator(){
  this.grid = giveGrid();
  this.redtiles = undefined;
  this.bluetiles = undefined;
  this.blueturn = true;
  this.tileInfo = function(){
    this.redtiles = 0;
    this.bluetiles = 0;
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        let cell = this.grid[i][j]
        if(cell.alive &&  cell.blue){this.bluetiles++}
        if(cell.alive && !cell.blue){this.redtiles++}
      }
    }
    document.getElementById("redtilesdisplay").innerHTML = this.redtiles
    document.getElementById("bluetilesdisplay").innerHTML = this.bluetiles
  }
}


function giveGrid(){
  grid = []
    for(let i = 0; i < boardSize; i++){
  grid[i]= []
    for(let j = 0; j < boardSize; j++){
      grid[i][j] = new block(i,j)
    }
    }
  //add the NBs to all elements
  //loop through the entire grid
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      //for each element of the grid, look at its NBs
      //a and b are the offsets in relation to the element
      //thus a and b are relative position of NBs
      for (let a = -1; a <= 1; a++) {
        for (let b = -1; b <= 1; b++) {
          //dont look at itself (a=0, b=0)
          if (!(a == 0 && b == 0)) {
            //x and y are the absolute position of the NBs
            let x = i + a
            let y = j + b
            //only if NBs exist, add them to list
            if (x >= 0 && y >= 0 && x < boardSize && y < boardSize) {
              grid[i][j].NBs.push(grid[x][y])
            }
          }
        }
      }
    }
  }
  return grid
}