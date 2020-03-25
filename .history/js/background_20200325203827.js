class infiniteBackground {
    constructor(game){
        this.game = game;
        this.ctx = game.ctx;

        this.x = 0;
        this.y = 0;
        this.width = 225;//900
        this.height = 225;//504
        this.scrollSpeed = 1;

        this.image = new Image();
        
        this.image.src = "./images/cave.jpeg";
    
    }
    drawBackground(){
        let pattern = this.ctx.createPattern(this.image, 'repeat-x');
        thisctx.fillStyle = pattern;
        ctx.fillRect(0, 0, 300, 300);
        //console.log("drawing bg" + this.scrollSpeed)
        // draw image 1 
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        // draw image 2
        this.ctx.drawImage(this.image, this.x + this.game.width, this.y, this.width, this.height);
    
        // update image height 
        this.x -= this.scrollSpeed; 
        //console.log(this.x);
    
        // resetting the images when the first image entirely exits the screen 
        if (this.x < -this.game.width) {
            this.x = 0;
            //console.log("this");
        }
        
    
    }
}