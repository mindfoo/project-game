window.onload = function() {


  // load google font == Monoton
  WebFontConfig = {
    google:{ families: ['Sen'] },
    active: function(){start();},
  };
  (function(){
    var wf = document.createElement("script");
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.5.10/webfont.js';
    wf.async = 'true';
    document.head.appendChild(wf);
  })();

  const canvas = document.querySelector("canvas");
  const game = new Game(canvas);

  document.getElementById("start-button").onclick = function() {
    event.preventDefault();
    game.start();
    game.resizeCanvas();
  };

  



};
