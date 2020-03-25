class ObstaclePipes {
    constructor(game) {
      this.game = game;
      this.ctx = game.ctx;
  
      this.x = this.game.width;
      this.y = Math.floor(Math.random() * this.game.height);
  
      //if (this.y < 20) this.x += 20;
      //if (this.x > this.game.width - 20) this.x -= 30;
      this.height = 2177/5;
      this.width = 1587/5;
  
      this.speed = 3;
  
      this.position = [];
  
      this.image = new Image();
      this.image.src = "./images/virus-sprite.png";
    }
    drawObstacle() {
      this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height, 100, 100, 100, 100);
    }
    update() {
      this.x -= this.speed;
    }
  }
  