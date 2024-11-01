class Cloud extends MovableObject{
    width = 350;
    height = 350;
    
    constructor(image, x, y){
        super().loadImage(image, x, y);
        this.y = y;
        this.x = 200 + Math.random() * 1800;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }
    animate(){
        setInterval(() => {
            this.moveLeft(); 
        }, 1000 / 25 );
       
}}