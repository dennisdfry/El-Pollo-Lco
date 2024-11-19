class SmallChicken extends MovableObject{
    y = 370;
    width = 50;
    height = 50;
    chickenisDeath= false;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
    ];

    IMAGES_Death = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];
    

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png')
        this.loadImages(this.IMAGES_WALKING);
        this.x = 1200 + Math.random() * 1900;
        this.speed = 0.15 + Math.random() * 0.85;
        this.animate();
    }


    /**
     * animations from chicken
     * 
     */
    chickenAnnimation() {
        if (!this.chickenIsDead) {
            this.chickenAnnimationWalk();
        }
        else {
            this.chickenAnnimationDead();
        }      
    }


    /**
     * animation at walking
     * 
     */
    chickenAnnimationWalk() {
        this.playAnimation(this.IMAGES_WALKING);
    }


    /**
     * animation at death
     * 
     */
    chickenAnnimationDead() {
        this.loadImage(this.IMAGES_Death);
        if (this.musicCounter === 0) {
            this.playSound(world.chickenDead_music);
        }
        this.musicCounter++;
        setTimeout(() => {
            this.IMAGES_Death = [];
        }, 500);
    }


    /**
     * animates the chicken
     * 
     */
    animate() {
        setInterval( () => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
                
            if (!this.chickenisDeath) {
                this.chickenAnnimationWalk();
            }
            else {
                this.chickenAnnimationDead();
                

            }      
        }, 200);
    }
}