
class Chicken extends MoveableObject{
    
    chickenIsDead = false;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
    ];

    constructor() {
        super().loadImage('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 600 + Math.random() * 1500;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }


    /**
     * animation at walking
     * 
     */
    chickenAnimateWalk() {
        this.playAnimate(this.IMAGES_WALKING); 
    }


    /**
     * animation at death
     * 
     */
    chickenAnimateDead() {
        this.loadImage(this.IMAGES_DEAD);
        if (this.musicCounter === 0) {
            this.playSound(world.chickenDead_music);
        }
        this.musicCounter++;
        setTimeout(() => {
            this.IMAGES_DEAD = [];
        }, 500);
    }


    /**
     * animates the chicken
     * 
     */
    animate() {
        setInterval( () => {
            this.moveChicken();
        }, 1000 / 60);

        setInterval(() => {
            if (!this.chickenIsDead) {
                this.chickenAnimateWalk();
            }
            else {
                this.chickenAnimateDead();
            }      
        }, 200);
    }
}