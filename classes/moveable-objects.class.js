class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    gravityInterval;
    movementInterval = 0;
    startGame;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }
    applyGravityBottle() {
        this.gravityInterval = setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;   // Bewegt die Flasche vertikal
                this.speedY -= this.acceleration;  // Reduziert speedY durch Schwerkraft
            }
        }, 1000 / 25);
    }
    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

   
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 150;
        }
    }
     firstContactEndboss(character_x){
        if(character_x == 2850){
           return true
        }
     }

     secondContactEndboss(character_x){
        if(character_x == 2900){
            return true
         }
     }
 
    isColliding(mo) {
        if (this instanceof Character) {
            return this.x + 60 + this.width - 105 > mo.x &&
                this.y + this.height > mo.y &&
                this.x + 60 < mo.x + mo.width &&
                this.y + 130 < mo.y + mo.height;
        }
        else {
            return this.x + this.width > mo.x &&
                this.y + this.height > mo.y &&
                this.x < mo.x + mo.width &&
                this.y < mo.y + mo.height;
        }
    }
  
    // isCollidingEndboss(bottle, endboss){
    //     return (
    //         endboss.x < bottle.x + bottle.width &&
    //         endboss.x + endboss.width > bottle.x &&
    //         endboss.y < bottle.y + bottle.height &&
    //         endboss.y + endboss.height > bottle.y
    //     );
    // }

    isCollidingWithEndboss(bottle, endboss) {
        return bottle.x + bottle.width > endboss.x &&
               bottle.x < endboss.x + endboss.width &&
               bottle.y + bottle.height > endboss.y &&
               bottle.y < endboss.y + endboss.height;
    }

    isCollidingWithSmallTarget(mo) {
        const buffer = 5; // Kleiner Puffer, um die Hitbox anzupassen
        return this.x + this.width - buffer > mo.x &&
               this.y + this.height - buffer > mo.y &&
               this.x + buffer < mo.x + mo.width &&
               this.y + buffer < mo.y + mo.height;
    }

    isBottleCollidingWithEnemy(bottle, enemy) {
        const hitboxAdjustment = 10; // Passe die Hitbox der Flasche an
        return bottle.x + bottle.width - hitboxAdjustment > enemy.x &&
               bottle.y + bottle.height - hitboxAdjustment > enemy.y &&
               bottle.x + hitboxAdjustment < enemy.x + enemy.width &&
               bottle.y + hitboxAdjustment < enemy.y + enemy.height;
    }
    
    sleepAnimation(lastInteractionStart){
        let timePassed = new Date().getTime() - lastInteractionStart;
        timePassed = timePassed / 1000;
        return timePassed > 5; 
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++
    }

    moveLeft() {
        
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    jump() {
        this.speedY = 30;
    }
}
