class Chicken extends MovableObject {
    y = 360;
    height = 60;
    width = 80;
    currentImage = 0;
    Walking_Images = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    death_Image = 'img/3_enemies_chicken/chicken_normal/2_dead';
   defaultdeathChicken = false;
    constructor() {

        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 700 + Math.random() * 1800;
        this.speed = 0.15 + Math.random() * 0.25;
        this.loadImages(this.Walking_Images);
        this.animate();
    }


    animate() {
        if(this.defaultdeathChicken == false){
        setInterval(() => {
            this.moveLeft();
        }, 1000/60);
       
        setInterval(() => {
            let i = this.currentImage % this.Walking_Images.length;
            let path = this.Walking_Images[i];
            this.img = this.imageCache[path];
            this.currentImage++
        }, 100);
    }else{
        console.log('wahr')
}}



}