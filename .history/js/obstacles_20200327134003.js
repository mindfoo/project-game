class ObstaclePipes {
    constructor(game) {
      this.game = game;
      this.ctx = game.ctx;
  
      this.x = this.canvas.width;
      this.y = Math.round(Math.random()*this.canvas.height);

      this.height = 452;
      this.width = 471;

      this.speed = 3;
  
      this.position = [];
  
      this.image = new Image();
      this.image.src = "./images/corona.png";
    }
    drawObstacle() {
      console.log(this.x, this.destY)
      this.ctx.drawImage(this.image, this.x,this.y,this.width,this.height);
    }
    update() {
      this.x -= this.speed;
    }
  }
  