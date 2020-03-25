class Player {
  constructor(game) {
    this.game = game;
    this.ctx = game.ctx;
    this.x = 20;
    this.y = this.game.height / 2;
    this.width = 40;
    this.height = 35;

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
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.y += this.speedY;
    this.x += this.speedX;

    if (this.y < 0 || this.x < 0) {
      this.speedY = 1;
      this.y = 0;
      this.speedX = 1;
      this.x = 0;
    }
    if (this.y >= this.game.height - this.height || this.x >= this.game.width - this.width) {
      this.speedY = 0;
      this.speedX = 0;
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
        this.speedX = -1;
      }
      if (event.keyCode === 39) {
        this.speedX = 1;
      }

      if (event.keyCode === 32) {
        event.preventDefault();
        //console.log("pressed");

        this.speedY = -1;
        this.gravity = -0.2;
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
