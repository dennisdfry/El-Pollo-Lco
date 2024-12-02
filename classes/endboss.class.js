
class Endboss extends MovableObject {

    width = 200;
    height = 400;
    x = 3200;
    y = 60;
    i = 0;
    energyFinalBoss = 100;
    firstTimeContact;
    intervalEndboss = [];
    winSound = new Audio('audio/people.mp3');
    endbossKillSound = new Audio('audio/endbossKill.mp3');
   

    IMAGES_WALK = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];

    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];

    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png',
    ];

    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];

    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];

    hadFirstContact = false;

    constructor(world) {
        super().loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.speed = 2;
        this.animate();
        this.world = world;
    }

    /**
     * drains energy from the target
     * 
     */
    hitFinalBoss() {
        this.energyFinalBoss -= 15;    
        if (this.energyFinalBoss < 0) {
            this.energyFinalBoss = 0;
        }
        else {
            this.lastHitFinalBoss = new Date().getTime();
        }
    }


    /**
     * 
     * @returns if the last hit was 1 second ago or not
     */
    isHurtFinalBoss() {
        let timepassed = new Date().getTime() - this.lastHitFinalBoss;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }


    /**
     * 
     * @returns if the energy is 0 
     */
    isDeadFinalBoss() {
        return this.energyFinalBoss == 0;
    }
   
    /**
     * animation of the final boss
     * 
     */
    finalBossAnnimation() {
        if (this.isDeadFinalBoss()) {
            this.finalBossAnnimationDead();
            this.stopAllIntervalsEndboss();
            this.energy = 100;
        }
        else if (this.isHurtFinalBoss()) {
            this.finalBossAnnimationHurt();
        }        
        else if (this.hadFirstContact) {
            this.finalBossAnnimationAttack();     
        }
        else if (this.finalBossFirstContact()) {
           this.finalBossAnnimationWalk();
        }
        else {        
            this.finalBossAnnimationAlert();     
        }
          
    }


    /**
     * animation at death
     * 
     */
    finalBossAnnimationDead() {
        this.playAnimation(this.IMAGES_DEAD);
         gameWin()
         this.winSound.play();
    }


    /**
     * animation at hurt
     * 
     */
    finalBossAnnimationHurt() {
        this.playAnimation(this.IMAGES_HURT);
    }


    /**
     * animation at alert
     * 
     */
    finalBossAnnimationAlert() {
        this.playAnimation(this.IMAGES_ALERT); 
    }


    /**
     * animation at attack
     * 
     */
    finalBossAnnimationAttack() {
        this.playAnimation(this.IMAGES_ATTACK);
    }
    

    /**
     * animation at walking
     * 
     */
    finalBossAnnimationWalk() {
        this.playAnimation(this.IMAGES_WALK);
    }


    /**
     * checks if the character had first contact with the final boss
     * 
     */
    finalBossFirstContact() {
       let timepassed = new Date().getTime() - this.firstTimeContact;
       timepassed = timepassed / 1000;
        return timepassed > 2;
    }
    stopAllIntervalsEndboss() {
        this.intervalEndboss.forEach(clearInterval);
        console.log("Alle Intervalle gestoppt");
    }


    /**
     * animates the final boss
     * 
     */
    animate() {
        this.intervalEndboss.push(
        setInterval(() => {
            this.finalBossAnnimation();            
        }, 200));
        this.intervalEndboss.push(
        setInterval(() => {
            if (this.hadFirstContact &&  !this.isDeadFinalBoss() && !this.isHurtFinalBoss()) {
                this.finalBossFirstContact();
                  }
                  if(this.finalBossFirstContact()){
                    if(this.energyFinalBoss == 0){
                        this.speed = 0
                    }else{
                    this.x -= this.speed;    
                  }}
        }, 1000 / 60));
        this.intervalEndboss.push(
        setInterval(() => {
            if (this.isHurtFinalBoss()) {
                // this.playSound(world.finalbossHurt_sound);
            }
        }, 100));
    }
}