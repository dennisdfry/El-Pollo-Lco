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
    IMAGES_Death = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
    ];
    death_Image = 'img/3_enemies_chicken/chicken_normal/2_dead';
    defaultdeathChicken = false;
    chickenisDeath = false;
    
    constructor() {

        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 700 + Math.random() * 1800;
        this.speed = 0.15 + Math.random() * 0.25;
        this.loadImages(this.Walking_Images);
        this.animate();
    }

        chickenAnnimationWalk() {
            this.playAnimation(this.Walking_Images); 
        }

        chickenAnnimationDead() {
            this.loadImage(this.IMAGES_Death);
            setTimeout(() => {
                this.IMAGES_Death= [];
            }, 500);
        }
    
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


