window.onload = function() {
  const canvas = document.querySelector("canvas");
  const game = new Game(canvas);

  document.getElementById("start-button").onclick = function() {
    event.preventDefault();


    game.start();
    game.resizeCanvas();
  };

  



};
