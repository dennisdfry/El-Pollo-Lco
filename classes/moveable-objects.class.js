class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 200;
    width = 150;
    imageCache = {};
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;

    applyGravaty() {
        setInterval(() => {
            if(this.isAboveGround()){
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }}, 1000 / 25);
    }

    isAboveGround(){
        return this.y < 150;
    }
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    };
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
    playAnimation(Walking_Images) {
        let i = this.currentImage % this.Walking_Images.length;
        let path = this.Walking_Images[i];
        this.img = this.imageCache[path];
        this.currentImage++
    }

    moveRight() {

    }

    jump() {

    }
}