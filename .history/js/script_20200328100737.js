window.onload = function() {
  const canvas = document.querySelector("canvas");
  const game = new Game(canvas);

  document.getElementById("start-button").onclick = function() {
    event.preventDefault();
    let f = new FontFace('Sen', 'url(https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap)');
    f.load().then(function() {
    game.start();
    game.resizeCanvas();
    
  };

  



};
