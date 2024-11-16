class World {
    character = new Character();
    chicken = new Chicken();
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
    throwableObjects = [];
    lastInteraction;
    defaultSleeping = true;
    defaultdeathChicken = [];
    bottleCounter = 0;
   
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
                   this.bottleCounter++;
                   console.log(this.throwableObjects)
                }
            });
        }, 200);
    }

    run(){
        setInterval(() => {
            this.checkThrowObjects();
           
        }, 200);
        setInterval(() => {
            this.checkCollision();  
        }, 25);
    }
    
    checkKillLittleChicken() {
            this.level.enemies.forEach((enemy, index) => {
                if (this.character.isJumpToKill(enemy)) {
                  let x =  this.level.enemies[index].x;
                  new deathChicken(x);
                         this.level.enemies.splice(index, 1); 
                }});
    }

    checkThrowObjects(){
        if(this.keyboard.D && this.bottleCounter > 0){  
            let bottle = new ThrowableObject(this.character.x, this.character.y);
            console.log(bottle)
            this.throwableObjects.push(bottle);
            this.bottleCounter--;
           
      
        }
        }
    

    checkCollision(){
        this.checkCollisionWithLittleChicken();
        this.checkThrowableObjectsWithCollisionEndboss();
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
            console.log(this.level.Endboss)
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
        this.addObjectsToMap(this.throwableObjects);
        // this.addObjectsToMap(this.level.endboss);
        this.addToMap(this.level.endboss);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.clouds);
        this.ctx.translate(-this.camera_x, 0);
        // Draw wird immer wieder aufgerufen
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