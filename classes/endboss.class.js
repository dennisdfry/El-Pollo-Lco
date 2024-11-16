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
    Dead_Images =[
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];
    Alert_Images = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
        
    ];
    energyEndboss = 100;
    firstContact = false;
  
    constructor(){
        super().loadImage('img/4_enemie_boss_chicken/1_walk/G1.png');
        this.x = 3200 ;
        // this.speed = 0.15 + Math.random() * 0.25;
        this.loadImages(this.Walking_Images);
        this.loadImages(this.Alert_Images);
        this.loadImages(this.Dead_Images);
        this.animate();
    }
    hitEndboss(){
        this.energyEndboss -= 10;
        if(this.energyEndboss < 0){
            energyEndboss = 0;
        }
    }
    endbossDead(){
        if(this.energyEndboss == 0){
            return true
        }
    }
    animate() {
        setInterval(() => {
             if( this.endbossDead()){
                console.log('tod')
                this.playAnimation(this.Dead_Images)
                 }
            // let i = this.currentImage % this.Walking_Images.length;
            // let path = this.Walking_Images[i];
            // this.img = this.imageCache[path];
            // this.currentImage++
         }, 200);
    }}