class Cloud extends MovableObject{
    width = 350;
    height = 350;
    constructor(image, x, y){
        super().loadImage(image, x, y);
        this.y = y;
        this.x = Math.random() * 500;
        this.animate();
    }
    animate(){
        setInterval(() => {
            this.x -= 0.15;
        }, 1000/60);
    }
}