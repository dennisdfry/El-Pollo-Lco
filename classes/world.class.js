class World {
    character = new Character();
    chicken = new Chicken();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    enbossStatusbar = new EndbossStatusbar();
    statusBar = new StatusBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    coinClass = new Coins();
    throwableObjects = [];
    lastInteraction;
    defaultSleeping = true;
    defaultdeathChicken = [];
   
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

    collectBottles(){
        setInterval(() => {
            this.level.bottles.forEach((bottle, index) => {
                if(this.character.isColliding(bottle)){
                    this.level.bottles.splice(index, 1);
                }
            });
        }, 200);
    }

    run(){
        setInterval(() => {
           this.checkCollision();
            this.checkThowObjects();
        }, 200);
    }
    
    checkKillLittleChicken() {
        setInterval(() => {
            this.level.enemies.forEach((enemy, index) => {
                if (this.character.isJumpToKill(enemy)) {
                  let x =  this.level.enemies[index].x;
                  console.log(x)
                  new deathChicken(x);
                         this.level.enemies.splice(index, 1); 
                }
            });
        }, 1000 / 25);
    }

    checkThowObjects(){
        if(this.keyboard.D){
            let bottle = new ThrowableObject(this.character.x+100, this.character.y+100);
            this.throwableObjects.push(bottle);
        }
    }

    checkCollision(){
        this.level.enemies.forEach((enemy) => {
            if(this.character.isColliding(enemy)){
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }});
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
        this.addToMap(this.enbossStatusbar);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.endboss);
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