class Character extends MovableObject {
    y = 150;
    height = 280;
    Stand_Image = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png'
    ];

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

    DEAD_Images = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];

    isHurt_Images = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];

    sleeping_IMAGES = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];
    speed = 10;
    walking_sound = new Audio('audio/walking_sound.mp3');
    jumping_sound = new Audio('audio/springen.mp3');
    hit_sound = new Audio('audio/jump_kill.mp3');
    lastInteractionStart;
    lastInteractionTime;
    lastInteractionfalse = false;
    intervalCharacter = [];
    
    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.DEAD_Images);
        this.loadImages(this.Walking_Images);
        this.loadImages(this.JUMPING_Images);
        this.loadImages(this.isHurt_Images);
        this.loadImages(this.sleeping_IMAGES);
        this.loadImages(this.Stand_Image);
        // this.loadImage('img/9_intro_outro_screens/game_over/game over.png');
        this.applyGravity();
        this.animate();
    }

    animate() {
        this.intervalCharacter.push(
            setInterval(() => {
                this.walking_sound.pause();
                if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                    this.moveRight();
                    if (this.firstContactEndboss(this.x)) {
                        console.log('first point');
                        this.world.level.endboss.hadFirstContact = true;
                        this.world.level.endboss.firstTimeContact = new Date().getTime();
                    }
                    if (!this.world.isMuted) this.walking_sound.play();
                    this.otherDirection = false;
                }
                if (this.world.keyboard.LEFT && this.x > 0) {
                    this.moveLeft();
                    if (!this.world.isMuted) this.walking_sound.play();
                    this.otherDirection = true;
                }
                if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                    this.jump();
                    if (this.y >= 150) {
                        this.y = 150;
                    }
                    if (!this.world.isMuted) {
                        this.jumping_sound.currentTime = 0;
                        this.jumping_sound.play();
                    }
                }
                this.world.camera_x = -this.x + 100;
            }, 1000 / 60)
        );
        this.intervalCharacter.push(
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.DEAD_Images);
                this.resetSleepTimer();
                gameOver();
                this.world.gameOver = false;
                console.log(this.world.gameOver)
                this.energy = 100;
                this.world.checkBackgroundMusic();
                this.world.gameOverMusic();
                this.stopAllIntervals();
                this.world.stopAllIntervals();
            } else if (this.isAboveGround()) {
                this.playAnimation(this.JUMPING_Images);
                this.resetSleepTimer();
            } else if (this.isHurt()) {
                this.playAnimation(this.isHurt_Images);
                this.resetSleepTimer();
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.Walking_Images);
                this.resetSleepTimer();
            } else if (this.sleepAnimation(this.lastInteractionStart)) {
                this.playAnimation(this.sleeping_IMAGES);
            } else {
                this.playAnimation(this.Stand_Image);
                if (!this.lastInteractionfalse) {
                    this.lastInteractionStart = new Date().getTime();
                    this.lastInteractionfalse = true;
                }
            }
        }, 100));
    }

    resetSleepTimer() {
        this.lastInteractionStart = new Date().getTime();
        this.lastInteractionfalse = false; 
    };

    stopAllIntervals() {
        this.intervalCharacter.forEach(clearInterval);
    }
}
