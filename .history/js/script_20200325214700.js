window.onload = function() {
  const canvas = document.querySelector("canvas");
  const game = new Game(canvas);

  document.getElementById("start-button").onclick = function() {
    event.preventDefault();
    game.start();
  };

  function resize_canvas(){
    canvas = document.getElementById("canvas");
    if (canvas.width  < window.innerWidth)
    {
        canvas.width  = window.innerWidth;
    }

    if (canvas.height < window.innerHeight)
    {
        canvas.height = window.innerHeight;
    }
}




};
