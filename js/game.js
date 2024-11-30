let world;
let keyboard = new Keyboard();
let fullscreen = false;
let isMuted = false;
const canvas = document.getElementById('canvas');
const startButton = document.getElementById('startButton');
const infoButton = document.getElementById('infoButton');
const orientationWarning = document.getElementById("orientationWarning");
const steeringHide = document.getElementById("steeringSection");
const steeringSection1 = document.getElementById("steeringSection1");
const steeringSection2 = document.getElementById("steeringSection2");
const muteFullScreen = document.getElementById('muteFull');
const teaser = document.getElementById('teaser');


function checkScreenSize() {
    const orientationWarning = document.getElementById("orientationWarning");
    const steeringSection = document.getElementById("steeringSection");
    const isSmallScreen = window.innerWidth < 730; // Bildschirm kleiner als 730px
    const isMediumScreen = window.innerWidth >= 730 && window.innerWidth <= 768; // Bildschirm zwischen 730px und 768px
    const isLargeScreen = window.innerWidth > 768; // Bildschirm größer als 768px
    const isLandscape = window.innerWidth > window.innerHeight; // Querformat
    
    const canvas = document.getElementById('canvas');
    
    if (isSmallScreen) {
        orientationWarning.classList.remove("d-none");
        steeringSection.classList.add("d-none");
        canvas.classList.add('d-none');
    } else if (isMediumScreen) {
        orientationWarning.classList.add("d-none");
        steeringSection.classList.remove("d-none");
        canvas.classList.remove('d-none');

        // Querformat: Fixiere Steering Section am unteren Rand
        if (isLandscape) {
            steeringSection.style.position = "fixed";
            steeringSection.style.bottom = "0";
            steeringSection.style.left = "50%";
            steeringSection.style.transform = "translateX(-50%)";
            canvas.style.height = "300px";
        } else {
            // Hochformat: Standard-Styling zurücksetzen
            steeringSection.style.position = "static";
            canvas.style.height = "";
        }
    } else if (isLargeScreen) {
        orientationWarning.classList.add("d-none");
        steeringSection.classList.add("d-none");
        canvas.style.height = ""; // Standardhöhe zurücksetzen
    }
}


function init() {

    const teaserElement = document.querySelector('.teaser-class');
    if (teaserElement) {
        teaserElement.style.backgroundImage = 'none';
    }
    startButton.classList.add('d-none');
    infoButton .classList.add('d-none');
    newGame();
    window.addEventListener("resize", checkScreenSize);
    window.addEventListener("orientationchange", checkScreenSize);
    checkScreenSize();
}

async function newGame() {
    initLevel();
    initMobile();
    world = new World(canvas, keyboard);
    setTimeout(() => {
        showGame();
    }, 500);
}

function restartGame() {
    const restartButton = document.getElementById('restartGame');
    const gameOverElement = document.getElementById("gameOver");
    const gameWinElement = document.getElementById("gameOverWin");
    gameOverElement.classList.add('d-none');
    gameOverElement.classList.remove("visible");
    gameWinElement.classList.add('d-none');
    gameWinElement.classList.remove("visible");
    restartButton.classList.add('d-none');
    world.intervalIds = [];
    newGame();
}

function showGame() {
    const startButton = document.getElementById('startButton');
    const infoButton = document.getElementById('infoButton');
    const canvas = document.getElementById('canvas');

    if (window.innerWidth >= 768) {
        startButton.classList.add('d-none');
        infoButton.classList.add('d-none');
        canvas.classList.remove('d-none');
    }
}

function gameWin() {
    const winElement = document.getElementById("gameOverWin");
    winElement.classList.remove("d-none");
    const restartButton = document.getElementById('restartGame');
    setTimeout(() => {
        winElement.classList.add("visible");
    }, 100);
    restartButton.classList.remove('d-none');

}

function gameOver() {
    const winElement = document.getElementById("gameOver");
    const restartButton = document.getElementById('restartGame')
    winElement.classList.remove("d-none");
    setTimeout(() => {
        winElement.classList.add("visible");
    }, 100);
    restartButton.classList.remove('d-none');
    
}

function mute() {
    console.log(isMuted)
    let audioImage = document.getElementById("mute");

    if (isMuted) {
        audioImage.src = 'img/icons8-low-volume-64.png';
    }
    else {
        audioImage.src = 'img/icons8-mute-64.png';
    }
    isMuted = !isMuted;
    console.log(isMuted)
}

function initMobile() {
    mobileKeyPressEvents();
    mobileKeyReleaseEvents();
}

function openInfoSection() {
    let position = document.getElementById('openSection');
    position.classList.remove('d-none');
}

function closeInfoSection() {
    let position = document.getElementById('openSection');
    position.classList.add('d-none');
}

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 68) {
        keyboard.D = true;
        keyboard.lastInteraction = true;
    };
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
        keyboard.lastInteraction = true;
    };
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
        keyboard.lastInteraction = true;
    };
    if (e.keyCode == 38) {
        keyboard.UP = true;
        keyboard.lastInteraction = true;
    };
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
        keyboard.lastInteraction = true;
    };
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
        keyboard.lastInteraction = true;
    };
});

window.addEventListener("keyup", (e) => {

    if (e.keyCode == 68) {
        keyboard.D = false;
        keyboard.lastInteraction = false;
    };
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
        keyboard.lastInteraction = false;
    };
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
        keyboard.lastInteraction = false;
    };
    if (e.keyCode == 38) {
        keyboard.UP = false;
        keyboard.lastInteraction = false;
    };
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
        keyboard.lastInteraction = false;
    };
    if (e.keyCode == 32) {
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