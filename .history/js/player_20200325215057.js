class Player {
  constructor(game) {
    this.game = game;
    this.ctx = game.ctx;
    this.x = 20;
    this.y = this.game.height / 2;
    this.width = 40;
    this.height = 35;

    this.speedY = 0;
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
    this.y += this.speedY;

    if (this.y < 0) {
      this.speedY = 1;
      this.y = 0;
    }
    if (this.y >= this.game.height - this.height) {
      this.speedY = 0;
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
      if (event.keyCode === 32) {
        event.preventDefault();
        //console.log("pressed");

        this.speedY = -1;
        this.gravity = -.2;
        this.update();
      }
    });

    window.addEventListener("keyup", event => {
      if (event.keyCode === 32) {
        event.preventDefault();
        this.speedY *= -1;
      }
    });

  }

  // sets gravity on the position????
  newPos() {
    this.gravitySpeed += this.gravity;
    this.y += this.speedY - this.gravitySpeed;
  }
}
