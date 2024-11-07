class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    
    applyGravaty() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }
    hit(){
        this.energy -= 5;
        if(this.energy < 0){
            this.energy = 0;
        }else{
            this.lastHit = new Date().getTime();
        }
    }
    isHurt(){
        let timePassed = new  Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;    }

    isDead(){
       return this.energy == 0;
    }

    isAboveGround() {
        if(this instanceof ThrowableObject){
            return true;
        }else{
        return this.y < 150;
    }}

   


    // isJumpToKill(mo) {
    //     const isAbove = this.y +this.height < mo.y; 
    //     console.log(this.y+this.height)
    //     console.log(mo.y)
    //     const isFalling = this.speedY < 0;      
    //     console.log(isFalling)     
    //     const isHorizontalOverlap = this.x + this.width > mo.x && this.x < mo.x;
    //     return isAbove &&  isHorizontalOverlap && isFalling;
    // }
    // isJumpToKill(mo) {
    //     // Prüfen, ob der Charakter leicht über dem Gegner ist und sich nach unten bewegt
    //     const isAbove = this.y + this.height > mo.y && this.y + this.height - mo.y < 15;  // Enger Bereich von oben (15 Pixel)
    //     const isFalling = this.speedY < 0;  // Der Charakter muss sich nach unten bewegen
    //     const isHorizontalOverlap = this.x + this.width > mo.x && this.x < mo.x + mo.width;  // Horizontale Überlappung
    //     return isAbove && isHorizontalOverlap && isFalling;
    // }
  
        isJumpToKill(mo) {
            const isAbove = this.y + this.height >= mo.y && this.y + this.height <= mo.y + 20;
            const isFalling = this.speedY < 0;
            const isHorizontalOverlap = this.x + this.width > mo.x && this.x < mo.x + mo.width;
    
            // Debugging-Ausgabe zur Analyse der Kollision
            // console.log("Checking collision with Chicken:");
            // console.log(`Character Bottom: ${this.y + this.height}, Chicken Top: ${mo.y}`);
            // console.log(`Vertical Overlap: ${isAbove}`);
            // console.log(`Falling: ${isFalling}`);
            // console.log(`Horizontal Overlap: ${isHorizontalOverlap}`);
    
            return isAbove && isHorizontalOverlap && isFalling;
        }
  


    isColliding(mo){
        return this.x + this.width > mo.x && this.y + this.height > mo.y && this.x < mo.x && this.y < mo.y + mo.height;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++
    }

    moveLeft() {
        this.x -= this.speed;


    }

    moveRight() {
        this.x += this.speed;


    }

    jump() {
        this.speedY = 30;
    }
}
