class World {
    character = new Character();
    chicken = new Chicken();
    smallChicken = new SmallChicken();
    endboss = new Endboss(this);
    level = level1;
    canvas;
    ctx;
    keyboard;
    startGame;
    gameOver = true;
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
    intervalIds = []; 
    killSound = new Audio('audio/jump_kill.mp3');
    bottleDestroy = new Audio('audio/bottle_destroy.mp3');
    coinCollectSound = new Audio('audio/coin.mp3');
    bottleCollectSound = new Audio('audio/bottleCollect.mp3');
    mexican_Melodie = new Audio('audio/210. Mexican.mp3');
    gameOver_Melodie = new Audio('audio/gameOver.mp3');
    
    isMuted = false;

    constructor(canvas, keyboard, startGame) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.startGame = startGame;
        this.draw();
        this.setWorld();
        this.run();
        this.collectCoins();
        this.collectBottles();   
    }

    collectCoins() {
        setInterval(() => {
            this.level.coins.forEach((coin, index) => {
                if (this.character.isColliding(coin)) {
                    this.level.coins.splice(index, 1);
                    this.counterForCoins = this.counterForCoins + 10;
                    this.coinBar.setPercentage(this.counterForCoins);   
                    if (this.coinCollectSound.paused) {
                        this.coinCollectSound.currentTime = 0; // Setze den Sound zurück
                        if(!this.isMuted){
                        this.coinCollectSound.play(); // Spiele den Sound ab
                    }
                    }
                }
            })
        }, 50);
    }

    collectBottles() {
        setInterval(() => {
            this.level.bottles.forEach((bottle, index) => {
                if (this.character.isColliding(bottle)) {
                    this.level.bottles.splice(index, 1);
                    let throwbottle = new ThrowableObject();
                    this.throwableObjects.push(throwbottle);
                    this.bottlePercentage = this.bottlePercentage + 10;
                    this.bottleBar.setPercentage(this.bottlePercentage);
                    this.bottleCounter++;
                    if(!this.isMuted){
                    this.bottleCollectSound.play();
                    }
                }
            });
        }, 50);
    }

    run() {
        this.intervalIds.push(setInterval(() => {
            this.checkThrowObjects();
            this.checkThrowableObjectsWithCollisionEndboss();
            this.checkBackgroundMusic();
        }, 200));
        this.intervalIds.push(setInterval(() => {
            this.checkCollision();
        }, 50));
    }

    checkCollisionCharacterFinalboss() {
        if (this.character.isColliding(this.level.endboss)) {
            this.gameOver = true;
            this.character.energy = 0;
        };
    }

    stopAllIntervals() {
        this.intervalIds.forEach(clearInterval);
        console.log("Alle Intervalle gestoppt");
    }


    checkBackgroundMusic() {
        if (isMuted || this.level.endboss.energyFinalBoss == 0 || !this.gameOver ) {
            this.mexican_Melodie.pause(); 
        }else{
            try {
                this.mexican_Melodie.play()
            } catch (error) {
               console.log('error play music') 
            }
            }
    }
  
    checkKillChicken() {
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround()) {
                if (!enemy.chickenisDeath) {
                    this.character.jump();
                    if(!this.isMuted){
                    this.killSound.play();
                    }
                    enemy.chickenisDeath = true;
                    setTimeout(() => {
                        console.log
                        this.level.enemies.splice(index, 1);
                    }, 1000);
                };
            }
        });
    }


    checkThrowObjects() {
        if (this.keyboard.D && this.bottleCounter > 0) {
            let bottle = new ThrowableObject(this.character.x, this.character.y);
            this.throwableObjects.push(bottle);
            this.bottleCounter--;
            this.bottlePercentage = this.bottlePercentage - 10;
            this.bottleBar.setPercentage(this.bottlePercentage);


        }
    }


    checkCollision() {
        this.checkKillChicken();
        this.checkCollisionWithChicken();
        this.checkKillLittleChicken();
        this.checkCollisionLittleChicken();
        this.checkCollisionCharacterFinalboss();
    }

    checkKillLittleChicken() {
        this.level.smallChicken.forEach((enemy, index) => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround()) {
                if (!enemy.chickenisDeath) {
                    this.character.jump();
                    if(!this.isMuted){
                    this.killSound.play();
                    }
                    enemy.chickenisDeath = true;
                    setTimeout(() => {
                        this.level.smallChicken.splice(index, 1);
                    }, 1000);
                };
            }
        });
    }

    checkCollisionLittleChicken(){
        this.level.smallChicken.forEach((enemy) => {
            if (this.character.isColliding(enemy) &&  enemy.chickenisDeath == false) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }

    checkCollisionWithChicken() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)&&  enemy.chickenisDeath == false) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }

    checkThrowableObjectsWithCollisionEndboss() {
        this.throwableObjects.forEach((bottle, index) => {
            this.checkCollisionBottleWithEndboss(bottle, index);
            this.checkCollisionBottleGround(bottle, index);
        })
    }

    checkCollisionBottleGround(bottle, index) {
        if (!bottle.isAboveGround()) {
            console.log(bottle.y)
            bottle.playSound(this.bottleBroke_sound);
            setTimeout(() => {
                this.throwableObjects.splice(index, 1)
            }, 50);
        };
    }
 


    checkCollisionBottleWithEndboss(bottle, index) {
        if (this.level.endboss.isColliding(bottle)) {
            this.level.endboss.hitFinalBoss();
            this.endbossStatusbar.setPercentageEndboss(this.level.endboss.energyFinalBoss);
            this.bottleDestroy.play();

        }
    }

    gameOverMusic(){
        this.gameOver_Melodie.play();
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
        if (!isMuted) {
            this.mexican_Melodie.loop = true;
            this.mexican_Melodie.volume = 0.3;    
            this.mexican_Melodie.play();    
        }
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