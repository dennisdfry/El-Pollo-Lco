class Level {
    endboss;
    enemies;
    clouds;
    backgroundObjects;
    bottles;
    coins;
    level_end_x = 2200 ;

    constructor(enemies, clouds, backgroundObjects, endboss, bottles, coins){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.endboss = endboss;
        this.bottles = bottles;
        this.coins = coins;
    }
}