class MovableObject {
    x = 120;
    y = 250;
    img;
    height= 200;
    width =150;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
        this.img.onload = () => {
            console.log("Chicken-Bild geladen: " + path);
        
        };

    }
    moveRight(){

    }

    jump(){

    }
}