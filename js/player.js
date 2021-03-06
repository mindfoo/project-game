class Player {
  constructor(game) {
    this.game = game;
    this.ctx = game.ctx;
    this.width = 40;
    this.height = 35;

    this.x = 20;
    this.y = this.game.height - this.height;

    this.speedY = 0;
    this.speedX = 0;
    this.gravity = -5;
    this.gravitySpeed = 0;

    this.image = new Image();
    this.image.src = "./images/playa.png";
  }
  // only draws the player
  drawPlayer() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    //console.log(this.speedY , this.speedX);
  }

  update() {
    //console.log(this.y);
    //console.log(this.x , this.y);
    this.y += this.speedY;
    this.x += this.speedX;

    if (this.y <= 0) {
      this.y = 80;
    }
    if (this.x < 0) {
      this.speedX = 1;
      this.x = 0;
    }
    if (this.y >= this.game.height - this.height) {
      this.speedY = 1;
      this.y = this.game.height - this.height;
    }
    if (this.x >= canvas.width) {
      this.speedX = 1;
      this.x = canvas.width - 10 - this.width;
    }
  }

  setControls() {
    
    window.addEventListener("keydown", event => {
      /*
      if (event.keyCode === 38) {
        this.speedY = -1;
      }
      if (event.keyCode === 40) {
        this.speedY = 1;
      }
      */
      if (event.keyCode === 37) {
        this.speedX = -5;
      }
      if (event.keyCode === 39) {
        this.speedX = 10;
      }

      if (event.keyCode === 38) {
        event.preventDefault();
        //console.log("pressed");
        this.update();
        if (this.y <= 0) {
          this.y = this.height;
        }

        this.speedY = -5;
      }
    });

    window.addEventListener("keyup", event => {
      //space bar is 32
      if (event.keyCode === 38) {
        event.preventDefault();
        this.speedY = -1 * this.gravity;
      }

      if (event.keyCode === 37) {
        this.speedX = 0;
      }
      if (event.keyCode === 39) {
        this.speedX = 0;
      }
    });
  }

  // sets gravity on the position????
  newPos() {
    this.gravitySpeed += this.gravity;
    this.y += this.speedY - this.gravitySpeed;
  }
}
