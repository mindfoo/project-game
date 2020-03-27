class ObstaclePipes {
    constructor(game) {
      this.game = game;
      this.ctx = game.ctx;
  
      this.height = 452/5;
      this.width = 471/5;

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
      this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height, this.detailW, this.detailH, 100, 100);
    }
    update() {
      this.detailW -= this.speed;
    }
  }
  