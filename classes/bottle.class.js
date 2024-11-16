class Bottle extends MovableObject {
    x;
    y = 360;
    height = 60;
    width = 80;
    currentImage = 0;
 
    constructor() {

        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.x = 700 + Math.random() * 1800;
      
    }


}