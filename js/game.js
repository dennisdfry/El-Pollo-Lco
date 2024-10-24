let canvas;
let world;
let keyboard = new Keyboard();

function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}


window.addEventListener("keydown", (e) => {
    if(e.keycode == 39){
        keyboard.RIGHT = true;
    };
    if(e.keycode == 37){
        keyboard.LEFT = true;
    };
    if(e.keycode == 38){
        keyboard.UP = true;
    };
    if(e.keycode == 40){
        keyboard.DOWN = true;
    };
    if(e.keycode == 32){
        keyboard.SPACE = true;
    };
});

window.addEventListener("keyup", (e) => {
    console.log('up');
    if(e.keycode == 39){
        keyboard.RIGHT = false;
    };
    if(e.keycode == 37){
        keyboard.LEFT = false;
    };
    if(e.keycode == 38){
        keyboard.UP = false;
    };
    if(e.keycode == 40){
        keyboard.DOWN = false;
    };
    if(e.keycode == 32){
        keyboard.SPACE = false;
    };
});
