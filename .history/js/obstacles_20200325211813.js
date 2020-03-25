class ObstaclePipes {
    constructor(game) {
      this.game = game;
      this.ctx = game.ctx;
  
      this.height = 452/5;
      this.width = 471/5;

      this.x = this.game.width;
      this.y = Math.floor((Math.random() * this.game.height-this));
  
      this.speed = 3;
  
      this.position = [];
  
      this.image = new Image();
      this.image.src = "./images/corona.png";
    }
    drawObstacle() {
      console.log(this.y)
      this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    update() {
      this.x -= this.speed;
    }
  }
  