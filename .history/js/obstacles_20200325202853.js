class ObstaclePipes {
    constructor(game) {
      this.game = game;
      this.ctx = game.ctx;
  
      this.x = this.game.width;
      this.y = Math.floor(Math.random() * this.game.height);
  
      //if (this.y < 20) this.x += 20;
      //if (this.x > this.game.width - 20) this.x -= 30;
      this.height = Math.floor(Math.random() * 200) + 70;
      this.width = 50;
  
      this.speed = 3;
  
      this.position = [];
  
      this.image = new Image();
      this.image.src = "./images/obstacle_top.png";
      this.image.src = "./images/virus-sprite.png";
    }
    drawObstacle() {
      this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    update() {
      this.x -= this.speed;
    }
  }
  