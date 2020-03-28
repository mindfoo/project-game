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
    this.gravity = 0.05;
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
    console.log(this.x , this.y);
    this.y += this.speedY;
    this.x += this.speedX;

    if (this.y < 0 ) {
      this.speedY = 10;
      this.y = 0;
    }
    if (this.x < 0) {
      this.speedX = 1;
      this.x = 0;
    }
    if (this.y >= this.game.height - this.height) {
      this.y = this.height
      this.speedY = 1;
      this.y = this.game.height - this.height;
    }
    if (this.x >= this.game.width) {
      this.speedX = 0;
      this.x = 0;
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
        this.speedX = -10;
      }
      if (event.keyCode === 39) {
        this.speedX = 10;
      }

      if (event.keyCode === 32) {
        event.preventDefault();
        //console.log("pressed");

        this.speedY = -10;
        this.gravity = -5;
        this.update();
      }
    });

    window.addEventListener("keyup", event => {
      if (event.keyCode === 32) {
        event.preventDefault();
        this.speedY *= -1;
      }

      if (event.keyCode === 37) {
        this.speedX =0;
      }
      if (event.keyCode === 39) {
        this.speedX =0;
      }
    });
  }

  // sets gravity on the position????
  newPos() {
    this.gravitySpeed += this.gravity;
    this.y += this.speedY - this.gravitySpeed;
  }
}
