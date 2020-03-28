window.onload = function() {
  const canvas = document.querySelector("canvas");
  const game = new Game(canvas);

  document.getElementById("start-button").onclick = function() {
    event.preventDefault();
    WebFont.load({
      google: {
        families: ['Sen', 'Sen:bold']
      },
      active: function() {
        gameOver();
      }
    });

    game.start();
    game.resizeCanvas();
  };

  



};
