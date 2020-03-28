class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.width = document.innerWidth;
    this.height = window.innerHeight;

    this.background = new infiniteBackground(this);
    this.obstacle = new Obstacles(this);
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

  sound(src) {
    this.sound = document.createElement("audio");
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.setAttribute("volume", 0.2);
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.sound.src = src;
  }


  start() {
    //console.log("I started the game");
    if (this.gameStatus === "game") {
      this.animation();

      this.sound('./sounds/game.mp3');
      this.sound.play();

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
        //console.log(this.scoreArray);
      }
    }
  }

  checkCollision(player, object) {
    if (object) {
      return (
        player.x < object.x + object.width &&
        player.x + player.width > object.x + 100 &&
        player.y < object.y + object.height - 200 &&
        player.y + player.height > object.y + 100
      );
    }
  }


  gameOver() {
    this.sound.pause();
    
    this.ctx.save();
    this.ctx.fillStyle = "rgba(255, 165, 0, 0.5)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "#222222";

    this.ctx.font = '2rem Sen';
    this.ctx.textAlign = 'center';

    this.ctx.fillText(`- GAME OVER -`, this.canvas.width / 2, this.canvas.height/2 + 60);
    this.ctx.fillText(
      `You escaped ${this.scoreArray.length} virus`,
      this.canvas.width / 2,
      this.canvas.height / 2
    );

    this.ctx.restore();
  }

  restart(){
    if (this.gameStatus === "game-over") {
      this.gameStatus === "game";
    }
    this.start();
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
      this.obstaclesArray.push(new Obstacles(this));
    }
    this.obstaclesExistence();
  }

}
