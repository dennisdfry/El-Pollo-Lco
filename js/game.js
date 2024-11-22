let canvas;
let world;
let keyboard = new Keyboard();
let mexican_Melodie = new Audio('audio/210. Mexican.mp3')

async function init(){
    canvas = document.getElementById('canvas');
    startButton = document.getElementById('startButton');
    infoButton = document.getElementById('infoButton');
    steeringHide = document.getElementById('steeringSection');
    steeringHide.classList.remove('d-none')
    infoButton.classList.add('d-none');
    startButton.classList.add('d-none');
    canvas.classList.remove('d-none');
    world = new World(canvas, keyboard);
    // mexican_Melodie.play();
}
function openInfoSection(){
    let position = document.getElementById('openSection');
    position.classList.remove('d-none');
}

function closeInfoSection() {
    let position = document.getElementById('openSection');
    position.classList.add('d-none');
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
