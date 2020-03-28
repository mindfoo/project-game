window.onload = function() {
  const canvas = document.querySelector("canvas");
  const game = new Game(canvas);

  WebFont.load({
    google: {
      families: ['Open Sans', 'Open Sans:bold']
    },
    active: function() {
      displayText();
    }
  });

  document.getElementById("start-button").onclick = function() {
    event.preventDefault();
    game.start();
    game.resizeCanvas();
  };

  



};
