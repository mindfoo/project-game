window.onload = function() {
  const canvas = document.querySelector("canvas");
  const game = new Game(canvas);

  document.getElementById("start-button").onclick = function() {
    event.preventDefault();

    WebFont.load({
      google: {
        families: ['Open Sans', 'Open Sans:bold']
      },
      active: function() {
        displayText();
      }
    });
    
    game.start();
    game.resizeCanvas();
  };

  



};
