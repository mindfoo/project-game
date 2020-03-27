class ObstaclePipes {
    constructor(game) {
      this.game = game;
      this.ctx = game.ctx;
  
      this.height = 452;
      this.width = 471;

      this.x = window.innerWidth;
      this.y = Math.floor((Math.random() * (window.innerHeight-this.height)));
  
      this.detailW = 100;
      this.detailH = 100;

      this.speed = 3;
  
      this.position = [];
  
      this.image = new Image();
      this.image.src = "./images/virus-sprite.png";
    }
    drawObstacle() {
      console.log(this.y, this.x)
      this.ctx.drawImage(this.image, srcX,srcY,srcW,srcH,destX,destY,destW,destH);
    }
    update() {
      this.detailW -= this.speed;
    }
  }
  