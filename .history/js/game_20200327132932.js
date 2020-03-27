class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.width = document.innerWidth;
    this.height = window.innerHeight;

    this.background = new infiniteBackground(this);
    //this.obstacle = new ObstaclePipes(this);
    this.animationId;

    this.player = new Player(this);
    this.player.setControls();

    this.frame = 0;
    this.obstaclesArray = [];
    this.scoreArray = [];
    //Helper for obstacle creation
    this.frame = 0;

    this.gameStatus = "game";
  }

  resizeCanvas() {
    if (this.canvas.width < window.innerWidth) {
      this.canvas.width = window.innerWidth;
    }

    if (this.canvas.height < window.innerHeight) {
      this.canvas.height = window.innerHeight;
    }
  }

  start() {
    //console.log("I started the game");
    if (this.gameStatus === "game") {
      this.animation();
    }
  }
  draw() {
    //console.log("I draw the game");
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.background.drawBackground();
    this.player.drawPlayer();

    //Iterate over the obstacles
    for (let obstacle of this.obstaclesArray) {
      obstacle.drawObstacle();
    }
  }

  obstaclesExistence() {
    for (let obstacle of this.obstaclesArray) {
      obstacle.update();

      if (this.checkCollision(this.player, obstacle)) {
        this.gameStatus = "game-over";
      }

      if (obstacle.x + obstacle.width < 0) {
        this.obstaclesArray.shift();
        this.scoreArray.push(1);
        console.log(this.scoreArray);
      }
    }
  }

  checkCollision(player, object) {
    if (object) {
      return (
        player.x < object.destX + object.destW / 2 &&
        player.x + player.width > object.destX + object.destW / 2 &&
        player.y < object.destY + object.destH / 2 &&
        player.y + player.height > object.destY
      );
    }
  }

  gameOver() {
    this.ctx.save();
    this.ctx.fillStyle = "rgba(255, 165, 0, 0.5)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "#222222";
    this.ctx.font = "italic small-caps bold 12px Sen";

    this.ctx.fillText(`GAME OVER!`, this.canvas.width / 2, this.canvasheight - 80);
    this.ctx.fillText(
      `YOU AVOIDED ${this.scoreArray.length} OBSTACLE(S)`,
      this.width / 8,
      100
    );

    this.ctx.restore();
    //this.player.carCrashAudio.play();
  }

  animation() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.save();
    this.draw();
    this.update();
    this.animationId = window.requestAnimationFrame(() => {
      if (this.gameStatus === "game") {
        document.querySelector('body').classList.remove("over");
        document.querySelector('body').classList.add("gameOn");
        this.animation();
      }
      if (this.gameStatus === "game-over") {
        window.cancelAnimationFrame(this.animationId);
        document.querySelector('body').classList.remove("gameOn");
        document.querySelector('body').classList.add("over");
        this.gameOver();
      }
    });

    this.ctx.restore();
  }

  update() {
    this.frame++;
    //console.log("I updated");
    this.player.update();
    //Append obstacles being created into array
    if (this.frame % 120 === 0) {
      this.obstaclesArray.push(new ObstaclePipes(this));
    }
    this.obstaclesExistence();
  }
}
