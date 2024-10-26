class Endboss extends MovableObject{
    Walking_Images = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    constructor(){
        super.loadImage(this.Walking_Images[0]);
        this.loadImages(this.Walking_Images);
        this.x = 700;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
            };
            if (this.world.keyboard.LEFT &&  this.x > 0 ) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            }
            this.world.camera_x = -this.x +100;
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT||this.world.keyboard.LEFT) {
                let i = this.currentImage % this.Walking_Images.length;
                let path = this.Walking_Images[i];
                this.img = this.imageCache[path];
                this.currentImage++
            }
        }, 100);
}}