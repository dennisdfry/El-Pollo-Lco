class Level {
    endboss;
    enemies;
    clouds;
    backgroundObjects;
    bottles;
    level_end_x = 2200 ;

    constructor(enemies, clouds, backgroundObjects, endboss, bottles){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.endboss = endboss;
        this.bottles = bottles;
    }
}