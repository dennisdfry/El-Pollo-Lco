class Level {
    endboss;
    enemies;
    clouds;
    backgroundObjects;
    bottles;
    coins;
    smallChicken;
    throwableObjects;
    level_end_x = 3200 ;

    constructor(endboss, enemies, clouds, backgroundObjects,  bottles, coins, smallChicken){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.endboss = endboss;
        this.bottles = bottles;
        this.coins = coins;
        this.smallChicken = smallChicken;
       
    }
}