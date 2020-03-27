class ObstaclePipes {
    constructor(game) {
      this.game = game;
      this.ctx = game.ctx;
  
      this.srcH = 452;
      this.srcW = 471;

      this.srcX = 0;
      this.srcY = 0;
  
      this.detaidestXlW = 100;
      this.detailH = 100;

      this.speed = 3;
  
      this.position = [];
  
      this.image = new Image();
      this.image.src = "./images/virus-sprite.png";
    }
    drawObstacle() {
      console.log(this.y, this.x)
      this.ctx.drawImage(this.image, this.srcX,this.srcY,this.srcW,this.srcH,this.destX,this.destY,this.destW,this.destH);
    }
    update() {
      this.detailW -= this.speed;
    }
  }
  