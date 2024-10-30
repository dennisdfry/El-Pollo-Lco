class MovableObject {
    x = 120;

    img;
    height = 200;
    width = 150;
    imageCache = {};
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
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
        }
    }

    isDead(){
       return this.energy == 0;
    }
    isAboveGround() {
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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
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
