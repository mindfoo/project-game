class infiniteBackground {
    constructor(game){
        this.game = game;
        this.ctx = game.ctx;

        this.x = 0;
        this.y = 0;
        //this.width = 150;//900
        //this.height = 150;//504
        this.width = window.innerWidth; //900
        this.height = window.innerHeight; //504
        this.scrollSpeed = .5;

        this.image = new Image();
        
        this.image.src = "./images/cave.png";
    
    }
    drawBackground(){
        //console.log("drawing bg" + this.scrollSpeed)
        // draw image 1 
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        // draw image 2
        this.ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    
        // update image height 
        this.x -= this.scrollSpeed; 
        //console.log(this.x);
    
        // resetting the images when the first image entirely exits the screen 
        if (this.x < -this.width) {
            this.x = 0;
            //console.log("this");
        }
        
    
    }
}