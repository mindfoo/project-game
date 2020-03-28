window.onload = function() {

Here's an example of how to use TypeKit's WebFontLoader to allow fonts time to load before using them:

// load google font == Monoton
WebFontConfig = {
  google:{ families: ['Monoton'] },
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
