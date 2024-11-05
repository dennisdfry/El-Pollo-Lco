class Coins extends MovableObject {
    y = 160;
     height = 100;
    width = 100;
    currentImage = 0;
    coin_Images = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];
 
    constructor() {

        super().loadImage('img/8_coin/coin_2.png');
        this.loadImages(this.coin_Images);
        this.x = 700 + Math.random() * 1800;
        this.animate();
      
    }

    animate(){
        setInterval(() => {
          this.playAnimation(this.coin_Images)  
        },500);
    }
}