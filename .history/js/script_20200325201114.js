window.onload = function() {
  const canvas = document.querySelector("canvas");
  const game = new Game(canvas);

  document.getElementById("start-button").onclick = function() {
    event.preventDefault();
    game.start();
  };



  function pauseBtn() {
    document.getElementById("#pauseButton").text("Pause").data("paused", false).click(function () {
        this).data("paused", !$(this).data("paused"));
        if ($(this).data("paused")) {
            $(this).text("Resume");
            game.paused = true;
        } else {
            $(this).text("Pause");
            game.paused = false;
        }
    })
  };

  pauseBtn();


};
