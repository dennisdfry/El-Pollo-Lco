

class BossStatusBar extends DrawableObject {
    IMAGES = [
        'img/7_statusbars/2_statusbar_endboss/blue/blue0.png',     
        'img/7_statusbars/2_statusbar_endboss/blue/blue20.png',     
        'img/7_statusbars/2_statusbar_endboss/blue/blue40.png',     
        'img/7_statusbars/2_statusbar_endboss/blue/blue60.png',     
        'img/7_statusbars/2_statusbar_endboss/blue/blue80.png',     
        'img/7_statusbars/2_statusbar_endboss/blue/blue100.png',     
    ];
    percentage = 100

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(100);
        this.x = 500;
        this.y = 380;
        this.width = 200;
        this.height = 45;
    }


    /**
     * 
     * @returns the number of the picture with the right percentage
     */
    resolveImageIndex() {
        if(this.percentage == 100) {
            return 5;
        }
        else if (this.percentage > 60) {
            return 4;
        }
        else if(this.percentage > 40) { 
            return 3;
        }
        else if(this.percentage > 20) {
            return 2;
        }
        else if(this.percentage > 0) {
            return 1;
        }
        else {
            return 0;
        }
    }   
}