class ObstaclePipes {
    constructor(game) {
      this.game = game;
      this.ctx = game.ctx;
  
      this.srcH = 452;
      this.srcW = 1587;

      this.srcX = 0;
      this.destW = 300;
      this.destH = 400;
  
      this.speed = 3;
  
      this.position = [];
  
      this.image = new Image();
      this.image.src = "./images/corona.png";
    }
    drawObstacle() {
      console.log(this.destX, this.destY)
      this.ctx.drawImage(this.image, this.srcX,this.srcY,this.srcW,this.srcH,this.destX,this.destY,this.destW,this.destH);
    }
    update() {
      this.destX -= this.speed;
    }
  }
  