let canvas;
let world;
let keyboard = new Keyboard();

function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}


window.addEventListener("keypress", (e) => {
    if(e.keycode == 39){
        keyboard.RIGHT = false;
    }
    if(e.keycode == 37){
        keyboard.LEFT = false;
    }
    if(e.keycode == 38){
        keyboard.up = false;
    }
    if(e.keycode == 40){
        keyboard.DOWN = false;
    }
    if(e.keycode == 32){
        keyboard.SPACE = false;
    }
});
