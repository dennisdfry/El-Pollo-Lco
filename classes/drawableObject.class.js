class DrawableObject{
    img;
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
  d

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    };

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof Bottle || this instanceof Coins || this instanceof ThrowableObject || this instanceof SmallChicken) {
            // ctx.beginPath();
            // ctx.lineWidth = '5';
            // ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            // ctx.stroke();
        }
    }
}