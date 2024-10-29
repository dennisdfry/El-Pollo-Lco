class Character extends MovableObject {
    y = 160;
    height = 280;
    currentImage = 0;
    Walking_Images = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];
    JUMPING_Images = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'

    ];
    world;
    speed = 10;
    walking_sound = new Audio('audio/walking_sound.mp3')
    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.Walking_Images);
        this.loadImages(this.JUMPING_Images);
        this.applyGravaty();
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.walking_sound.play();
                this.otherDirection = false;
            };
            if (this.world.keyboard.LEFT &&  this.x > 0 ) {
                this.moveLeft();
                this.walking_sound.play();
                this.otherDirection = true;
            };
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
              this.jump();
            }
            this.world.camera_x = -this.x +100;
        }, 1000 / 60);

        setInterval(() => {
            if(this.y < 160){
                this.playAnimation(this.JUMPING_Images)
            }else{
            if (this.world.keyboard.RIGHT||this.world.keyboard.LEFT){
            this.playAnimation(this.Walking_Images)
            }}
           
        }, 100);

    }
}