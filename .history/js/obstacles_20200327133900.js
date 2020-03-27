class ObstaclePipes {
    constructor(game) {
      this.game = game;
      this.ctx = game.ctx;
  
      this.height = 452;
      this.height = 452;
      this.height = 452;
      this.width = 471;

      this.speed = 3;
  
      this.position = [];
  
      this.image = new Image();
      this.image.src = "./images/corona.png";
    }
    drawObstacle() {
      console.log(this.destX, this.destY)
      this.ctx.drawImage(this.image, this.x,this.y,this.width,this.height);
    }
    update() {
      this.destX -= this.speed;
    }
  }
  