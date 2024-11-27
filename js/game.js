let canvas;
let world;
let keyboard = new Keyboard();
let fullscreen = false;
let isMuted = false;


function init(){
    newGame();
    // mexican_Melodie.play();
}
 async function newGame() {
    canvas = document.getElementById('canvas');
    initLevel();
    world = new World(canvas, keyboard);
    setTimeout(() => {
        showGame();
    }, 500);
   
}

function showGame(){
    startButton = document.getElementById('startButton');
    infoButton = document.getElementById('infoButton');
    steeringHide = document.getElementById('steeringSection');
    steeringHide.classList.remove('d-none')
    infoButton.classList.add('d-none');
    startButton.classList.add('d-none');
    canvas.classList.remove('d-none');  
}


function gameWin() {
    const winElement = document.getElementById("gameOverWin");
    winElement.classList.remove("d-none"); 
    setTimeout(() => {
        winElement.classList.add("visible");
    }, 100);
}

function gameOver(){
    const winElement = document.getElementById("gameOver");
    winElement.classList.remove("d-none"); 
    setTimeout(() => {
        winElement.classList.add("visible");
    }, 100);
}

// function toggleFullscreen() {
//     let content = document.getElementById("content");
//     let fullscreenImage = document.getElementById("fullscreen");
//     if (fullscreen) {
//         fullscreenImage.src = 'img/10_extras/vollbild.png';
//         exitFullscreen();
//         content.classList.remove('fullscreen-mode');
//     }
//     else {
//         fullscreenImage.src = 'img/10_extras/minimieren.png';
//         enterFullscreen(document.getElementById("content"));
//         content.classList.add('fullscreen-mode');
//     }
//     fullscreen = !fullscreen;
// }

// function exitFullscreen() {
//     if (document.exitFullscreen) {
//         document.exitFullscreen();
//     } else if (document.mozCancelFullScreen) {
//         document.mozCancelFullScreen();
//     } else if (document.webkitExitFullscreen) {
//         document.webkitExitFullscreen();
//     } else if (document.msExitFullscreen) {
//         document.msExitFullscreen();
//     }
// }

// function exitHandler() {
//     let content = document.getElementById("content");
//     if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
//         document.getElementById("fullscreen").src = 'img/10_extras/vollbild.png';
//         content.classList.remove('fullscreen-mode');
//         fullscreen = false;
//     }
// }


function mute() {
    let audioImage = document.getElementById("mute");
   
      if (isMuted) {
        audioImage.src = 'img/icons8-low-volume-64.png';
      } 
      else {
        audioImage.src = 'img/icons8-mute-64.png';
      }
      isMuted = !isMuted;
}

function initMobile() {
    mobileKeyPressEvents();
    mobileKeyReleaseEvents();
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


function mobileKeyPressEvents() {
    const leftButton = document.getElementById('leftButton');
    leftButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });
    const rightButton = document.getElementById('rightButton');
    rightButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });
    const jump = document.getElementById('jumpButton');
    jump.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });
    const throwBottle = document.getElementById('throwButton');
    throwBottle.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.D = true;
    });
}


/**
 * This function sets the key to false, after releasing them (mobile)
 */
function mobileKeyReleaseEvents() {
    const leftButton = document.getElementById('leftButton');
    leftButton.addEventListener('touchend', (e) => {
        keyboard.LEFT = false;
    });
    const rightButton = document.getElementById('rightButton');
    rightButton.addEventListener('touchend', (e) => {
        keyboard.RIGHT = false;
    });
    const jump = document.getElementById('jumpButton');
    jump.addEventListener('touchend', (e) => {
        keyboard.SPACE = false;
    });
    const throwBottle = document.getElementById('throwButton');
    throwBottle.addEventListener('touchend', (e) => {
        keyboard.D = false;
    });
}