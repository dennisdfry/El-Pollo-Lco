class ThrowableObject extends MovableObject{
    
    speedX = 20;
    THROW_IMAGES = [];
    constructor(x, y){
        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
    }
        throw(){
            this.speedY = 30;
            this.applyGravaty();
           setInterval(() => {
            this.x += 10;
           }, 25);
        }
 
}