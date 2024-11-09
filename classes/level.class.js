class Level {
    endboss;
    enemies;
    clouds;
    backgroundObjects;
    bottles;
    coins;
    throwableObjects;
    level_end_x = 2200 ;

    constructor(enemies, clouds, backgroundObjects, endboss, bottles, coins, throwableObjects){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.endboss = endboss;
        this.bottles = bottles;
        this.coins = coins;
        this.throwableObjects =  throwableObjects;
    }
}