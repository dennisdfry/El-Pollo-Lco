class World {
    character = new Character();
    chicken = new Chicken();
    smallChicken = new SmallChicken();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    endbossStatusbar = new EndbossStatusbar();
    statusBar = new StatusBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    coinClass = new Coins();
    counterForCoins = 0;
    throwableObjects = [];
    lastInteraction;
    defaultSleeping = true;
    defaultdeathChicken = [];
    bottlePercentage = 0;
    bottleCounter = 0;
    killSound =  new Audio('audio/jump_kill.mp3');
   
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.collectCoins();
        this.collectBottles();
        this.checkKillLittleChicken();
    }

    collectCoins(){
       setInterval(() => {
        this.level.coins.forEach((coin, index)=>{
            if(this.character.isColliding(coin)){
                this.level.coins.splice(index, 1);
                // this.world.coinBar.percentage + 20;
                this.counterForCoins = this.counterForCoins + 10;
                this.coinBar.setPercentage(this.counterForCoins);
            }})
       }, 200 ); 
    }

    collectBottles() {
        setInterval(() => {
            this.level.bottles.forEach((bottle, index) => {
                if (this.character.isColliding(bottle)) {
                    this.level.bottles.splice(index, 1);
                    let throwbottle =  new ThrowableObject();
                   this.throwableObjects.push(throwbottle);
                   this.bottlePercentage = this.bottlePercentage + 10;
                   this.bottleBar.setPercentage(this.bottlePercentage);
                   this.bottleCounter++;
                }
            });
        }, 200);
    }

    run(){
        setInterval(() => {
            this.checkThrowObjects();
            this.checkThrowableObjectsWithCollisionEndboss();
        }, 200);
        setInterval(() => {
            this.checkCollision();  
        }, 25);
    }
    
    checkKillLittleChicken() {

            this.level.enemies.forEach((enemy, index)=> {
                if(this.character.isColliding(enemy) && this.character.isAboveGround()) {
                    if (!enemy.chickenisDeath) {
                        this.character.jump();
                        this.killSound.play();
                        enemy.chickenisDeath = true;
                        setTimeout(() => {
                            console.log
                            this.level.enemies.splice(index, 1); 
                        }, 1000);
                      
                    };
                    
                    
                }
            });
    }
  

    checkThrowObjects(){
        if(this.keyboard.D && this.bottleCounter > 0){  
            let bottle = new ThrowableObject(this.character.x, this.character.y);
            console.log(bottle)
            this.throwableObjects.push(bottle);
            this.bottleCounter--;
            this.bottlePercentage = this.bottlePercentage - 10;
            this.bottleBar.setPercentage(this.bottlePercentage);
           

        }
        }
    

    checkCollision(){
        this.checkCollisionWithLittleChicken();
        this.checkKillLittleChicken();
    }

    checkCollisionWithLittleChicken(){
        this.level.enemies.forEach((enemy) => {
            if(this.character.isColliding(enemy)){
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }});
    }

    checkThrowableObjectsWithCollisionEndboss(){
        this.throwableObjects.forEach((bottle, index)=>{
            this.checkCollisionBottleWithEndboss(bottle, index);
        })
    }

    checkCollisionBottleWithEndboss(bottle, index){
        
        if(this.level.endboss.isColliding(bottle)){
            console.log('treffer');
            this.level.endboss.hitFinalBoss();
            this.endbossStatusbar.setPercentageEndboss(this.level.endboss.energyFinalBoss);
        }
    }
    


    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.endbossStatusbar);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.smallChicken);
        this.addObjectsToMap(this.throwableObjects);
        this.addToMap(this.level.endboss);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.clouds);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }
    setWorld() {
        this.character.world = this;
    }
    addObjectsToMap(objects) {

        objects.forEach(o => {
            this.addToMap(o);
        });
    }
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipBackImage(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }
    flipBackImage(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}