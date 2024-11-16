class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    gravityInterval;
    movementInterval = 0;

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
    isJumpToKill(mo) {
        const isAbove = this.y + this.height >= mo.y && this.y + this.height <= mo.y + 20;
        const isFalling = this.speedY < 0;
        const isHorizontalOverlap = this.x + this.width > mo.x && this.x < mo.x + mo.width;
        return isAbove && isHorizontalOverlap && isFalling;
    }

    isColliding(mo) {
        return this.x + this.width > mo.x && this.y + this.height > mo.y && this.x < mo.x && this.y < mo.y + mo.height;
    }

    isCollidingEndboss(bottle, endboss){
        return (
            endboss.x < bottle.x + bottle.width &&
            endboss.x + endboss.width > bottle.x &&
            endboss.y < bottle.y + bottle.height &&
            endboss.y + endboss.height > bottle.y
        );
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
