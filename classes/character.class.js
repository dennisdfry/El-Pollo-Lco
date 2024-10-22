class Character extends MovableObject {
    y = 155;
    height = 280;
    currentImage = 0;
    Walking_Images = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ]
    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.Walking_Images);
        this.animate();
    }

    animate() {
        setInterval(() => {
            let path = this.Walking_Images[this.currentImage];
            this.img = this.imageCache[path];
            this.currentImage++
        }, 1000);

    }
    jump() {

    }
}