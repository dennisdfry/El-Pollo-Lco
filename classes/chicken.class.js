class Chicken extends MovableObject {
    y = 360;
    height = 60;
    width = 80;
    currentImage = 0;
    Walking_Images = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    constructor() {

        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 200 + Math.random() * 500;
        this.loadImages(this.Walking_Images);
        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.Walking_Images.length;
            let path = this.Walking_Images[i];
            this.img = this.imageCache[path];
            this.currentImage++
        }, 100);

    }
}