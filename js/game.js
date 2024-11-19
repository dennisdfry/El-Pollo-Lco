let canvas;
let world;
let keyboard = new Keyboard();
let mexican_Melodie = new Audio('audio/210. Mexican.mp3')


function init(){
    canvas = document.getElementById('canvas');
    startButton = document.getElementById('startButton');
    startButton.classList.add('d-none');
    canvas.classList.remove('d-none');
    world = new World(canvas, keyboard);
    
    // mexican_Melodie.play();
}


window.addEventListener("keydown", (e) => {
    if(e.keyCode == 68){
        keyboard.D = true;
        keyboard.lastInteraction = true;
    };
    if(e.keyCode == 39){
        keyboard.RIGHT = true;
        keyboard.lastInteraction = true;
    };
    if(e.keyCode == 37){
        keyboard.LEFT = true;
        keyboard.lastInteraction = true;
    };
    if(e.keyCode == 38){
        keyboard.UP = true;
        keyboard.lastInteraction = true;
    };
    if(e.keyCode == 40){
        keyboard.DOWN = true;
        keyboard.lastInteraction = true;
    };
    if(e.keyCode == 32){
        keyboard.SPACE = true;
        keyboard.lastInteraction = true;
    };
}); 

window.addEventListener("keyup", (e) => {
    
    if(e.keyCode == 68){
        keyboard.D = false;
        keyboard.lastInteraction = false;
    };
    if(e.keyCode == 39){
        keyboard.RIGHT = false;
        keyboard.lastInteraction = false;
    };
    if(e.keyCode == 37){
        keyboard.LEFT = false;
        keyboard.lastInteraction = false;
    };
    if(e.keyCode == 38){
        keyboard.UP = false;
        keyboard.lastInteraction = false;
    };
    if(e.keyCode == 40){
        keyboard.DOWN = false;
        keyboard.lastInteraction = false;
    };
    if(e.keyCode == 32){
        keyboard.SPACE = false;
        keyboard.lastInteraction = false;
    };
});
