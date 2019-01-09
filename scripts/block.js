function block(x, y){
  this.xpos = x;
  this.ypos = y;
  this.size = blockSize;
  this.alive = rantruefalse();
  this.blue = rantruefalse();
  this.NBs = [];
  this.redNBs = undefined;
  this.blueNBs = undefined;
  this.aliveNBs = undefined;
  this.almostDead = false;
  this.almostAlive= false;
  this.die = function(){
    this.alive = false
  }
  this.born = function(){
    this.alive = true
  }
  this.onclick = function(){
    this.alive = rantruefalse();
  }
  this.display = function(){
    //set colour
    if (this.alive){
      this.blue ? fill(col.blue) : fill(col.red);
    } 
    else{
      fill(col.death)
    }
    //set stroke
    strokeWeight(3);
    stroke(col.gridlines);
    //draw big square
    let x = this.xpos * this.size;
    let y = this.ypos * this.size;
    let s = this.size 
    rect(x, y, s, s)
    
    //Creating the inner squares
    //these decide how big the inner rect is
    let fac = 0.39
    let fic = 1- (2 * fac)
    if(this.alive && this.almostDead){
      noStroke()
      fill(col.death)
      rect(x+ fac*s, y + fac*s, fic*s, fic*s)
    }
    if(!this.alive && this.almostAlive){
      noStroke()
      this.blue ? fill(col.blue) : fill(col.red);
      rect(x+ fac*s, y + fac*s, fic*s, fic*s)
    }
  }
  this.updateNBinfo = function(){
    this.redNBs = 0;
    this.blueNBs = 0;
    this.aliveNBs = 0;
    for(let i = 0; i<this.NBs.length; i++){
      if(this.NBs[i].alive){
        if(this.NBs[i].blue){
          this.blueNBs++;
          this.aliveNBs++;
        }else{
          this.redNBs++;
          this.aliveNBs++;
        }
      }
    }
  }
  this.iteratepredict = function(){
    if((this.aliveNBs<=1) || (this.aliveNBs >= 4)){
      this.almostDead = true
    }else{
      this.almostDead = false
    }
    
    if(!this.alive && (this.aliveNBs == 3)){
        this.blue = (this.blueNBs>this.redNBs)
        this.almostAlive = true
    }else{
      this.almostAlive = false
    }
  }
  this.iterate = function(){
    if((this.aliveNBs<=1) || (this.aliveNBs >= 4)){
      this.die()
    }
    if(!this.alive && (this.aliveNBs == 3)){
        this.blue = (this.blueNBs>this.redNBs)
        this.born();
    }
  }
}

function rantruefalse(){
  if (Math.random()>0.5){
    return true
  } else{
    return false
  }
}