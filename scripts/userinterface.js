function mouseClicked(){
  let x = mouseX-20
  let y = mouseY-10
  if ((x>=0 && x<= boardSize*blockSize) && (y>=0 && y<= boardSize*blockSize)){
    let xindex = Math.floor(x/blockSize);
    let yindex = Math.floor(y/blockSize);
    game.grid[xindex][yindex].onclick();
  } 
}

function finishmove(){
  alert("ja")
}

function UIstyling(){
  document.getElementById("canvas-holder").style.width = (dms.w+"px");
  document.getElementById("gamename").style.backgroundColor = col.background;
  document.getElementById("redzone").style.backgroundColor = col.red;
  document.getElementById("bluezone").style.backgroundColor = col.blue;
  document.getElementById("buttonzone").style.backgroundColor = col.background;
}