

class MoveableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0.5;
    acceleration = 1.7;
    energy = 100;
    energyFinalBoss = 100;
    lastHit = 0;
    lastHitFinalBoss = 0;
    notMoving = 0;


    /**
     * reduce the y height of an object (fake gravity)
     * 
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
                if (this.y > 116 && this instanceof Character) {
                    this.y = 115.5;
                }
            }
        }, 1000 / 25);
    }


    /**
     * 
     * @returns if the object is aboveground
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return this.y <= 280;
        }
        else {
            return this.y <= 115;
        }

    }


    /**
     * 
     * @param {object} mo 
     * @returns if an object collides withe the moveable object (mo)
     */

    isColliding(mo) {
        if (this instanceof Character) {
            let characterBufferX = 40;
            let characterBufferY = 40; 
            return this.x + characterBufferX < mo.x + mo.width &&
                this.x + this.width - characterBufferX > mo.x &&
                this.y + characterBufferY < mo.y + mo.height &&
                this.y + this.height - characterBufferY > mo.y;
        }
        else {
            return this.x + this.width > mo.x &&
                this.y + this.height > mo.y &&
                this.x < mo.x + mo.width &&
                this.y < mo.y + mo.height;
        }
    }


    /**
     * plays an annimation
     * 
     * @param {Array} images 
     */
    playAnimate(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    /**
     * let the chickens move left
     * 
     */
    moveChicken() {
        if (!this.chickenIsDead) {
            this.x -= this.speed;
        }
    }


}