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

    Hurt_Images = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    Attack_Images = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    energyEndboss = 100;
    firstContact = false;
    secondContact = false;

    constructor(){
        super().loadImage('img/4_enemie_boss_chicken/1_walk/G1.png');
        this.x = 3200 ;
        // this.speed = 0.15 + Math.random() * 0.25;
        this.loadImages(this.Walking_Images);
        this.loadImages(this.Alert_Images);
        this.loadImages(this.Dead_Images);
        this.loadImages(this.Hurt_Images);
        this.loadImages(this.Attack_Images);
        this.animate();
    }
    hitEndboss(){
        this.energyEndboss -= 10;
        if(this.energyEndboss < 0){
            this.energyEndboss = 0;
        }
    }
    endbossDead(){
        if(this.energyEndboss == 0){
            return true
        }
    }
    animate() {
        setInterval(() => {
            this.finalBossAnnimation();  
         }, 200);
    }

    finalBossAnnimation() {
        if (this.endbossDead) {
            this.finalBossAnnimationDead();
        }
        else if (this.hitEndboss()) {
            this.finalBossAnnimationHurt();
        }        
        else if (this.firstContact == true) {
            console.log('alert')
            this.finalBossAnnimationAlert();     
        }
        else if (this.secondContact == true) {
            this.finalBossAnnimationAttack();
        }
        else {        
            this.finalBossAnnimationWalk();
        }
        // this.i++;    
        // this.finalBossFirstContact();   
    }

    finalBossAnnimationAlert() {
        this.playAnnimation(this.Alert_Images); 
    }

    finalBossAnnimationWalk() {
        this.playAnnimation(this.Walking_Images);
    }

    finalBossAnnimationHurt() {
        this.playAnnimation(this.Hurt_Images);
    }

    finalBossAnnimationDead() {
        this.playAnimation(this.Dead_Images);
        // world.gameOver = true;
        // world.background_music.pause()
        setTimeout(() => {
            // this.clearAllIntervals();
            // this.playSound(world.win_sound);
            // gameOverWin();
        }, 1500);
    }
}