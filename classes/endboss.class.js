class Endboss extends MovableObject{
    y = 50;
    height = 400;
    width = 250;
    currentImage = 0;
    Walking_Images = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];
    energyEndboss = 100;
    firstContact = false;
  
    constructor(){
        super().loadImage('img/4_enemie_boss_chicken/1_walk/G1.png');
        this.x = 3200 ;
        // this.speed = 0.15 + Math.random() * 0.25;
        this.loadImages(this.Walking_Images);
        this.animate();
    }
    hitEndboss(){
        this.energyEndboss -= 10;
        if(this.energyEndboss < 0){
            energyEndboss = 0;
        }
    }
    animate() {
        setInterval(() => {
            let i = this.currentImage % this.Walking_Images.length;
            let path = this.Walking_Images[i];
            this.img = this.imageCache[path];
            this.currentImage++
        }, 100);
    }}