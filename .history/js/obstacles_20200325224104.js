class ObstaclePipes {
    constructor(game) {
      this.game = game;
      this.ctx = game.ctx;
  
      this.srcH = 2177;
      this.srcW = 1587/;

      this.srcX = 0;
      this.destW = 300;
      this.destH = 100;
  
      this.destX = Math.floor(Math.random() * window.innerHeight);
      this.destY = Math.floor(Math.random() * window.innerHeight) - this.destH;

      this.srcY = Math.floor(Math.random() * window.innerHeight) - this.destH;

      this.speed = 3;
  
      this.position = [];
  
      this.image = new Image();
      this.image.src = "./images/virus-sprite.png";
    }
    drawObstacle() {
      console.log(this.destX, this.destY)
      this.ctx.drawImage(this.image, this.srcX,this.srcY,this.srcW,this.srcH,this.destX,this.destY,this.destW,this.destH);
    }
    update() {
      this.destX -= this.speed;
    }
  }
  