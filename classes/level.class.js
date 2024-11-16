class Level {
    endboss;
    enemies;
    clouds;
    backgroundObjects;
    bottles;
    coins;
    throwableObjects;
    level_end_x = 3200 ;

    constructor(endboss, enemies, clouds, backgroundObjects,  bottles, coins){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.endboss = endboss;
        this.bottles = bottles;
        this.coins = coins;
       
    }
}