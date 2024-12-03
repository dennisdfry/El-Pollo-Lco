/**
 * 
 * @returns the html code for the first help page
 */
function helpDeskFirstPage() {
    return /*html */ `
        <div class=" d-flex justify-content-center align-items-center gapHelp" >
            <img class="closeImg position-absolute" src="img/icons8-close-50.png" alt="" onclick="closeHelpPage()">
            <img class="pepe d-flex align-items-center" src="img/2_character_pepe/2_walk/W-21.png" alt="">
            <div class="d-flex flex-column align-items-center margin-top">
                <span>WALK</span>
                <div>
                <img class="" src="img/icons8-pfeil-64.png" alt="">
                <img class="" src="img/right.png" alt="">
                </div>
            </div>                
            <button class="position-absolute nextBtn d-flex justify-content-center align-items-center" onclick="showSecondPage()">Next</button>
        </div>            
    `;
}


/**
 * 
 * @returns the html code for the second help page
 */
function helpDeskSecondPage() {
    return /*html */ `
        <div class=" d-flex justify-content-center align-items-center gapHelp" >
            <img class="closeImg position-absolute" src="img/icons8-close-50.png" alt="" onclick="closeHelpPage()">
            <img class="pepe d-flex align-items-center" src="img/2_character_pepe/3_jump/J-34.png" alt="">
            <div class="d-flex flex-column align-items-center margin-top">
                <span>JUMP</span>
                <img class="" src="img/icons8-pfeil-64 (2).png" alt="">
            </div>                
            <button class="position-absolute nextBtn d-flex justify-content-center align-items-center" onclick="showThirdPage()">Next</button>
            <button class="position-absolute backBtn d-flex justify-content-center align-items-center" onclick="showFirstPage()">Back</button>
        </div>                
    `;
}


/**
 * 
 * @returns the html code for the third help page
 */
function helpDeskThirdPage() {
    return /*html */ `
        <div class=" d-flex justify-content-center align-items-center gapHelp" >
            <img class="closeImg position-absolute" src="img/icons8-close-50.png" alt="" onclick="closeHelpPage()">
            <div class="d-flex negative-margin-top">
                <img class="pepe d-flex align-items-center" src="img/2_character_pepe/1_idle/idle/I-1.png" alt="">
                <img class="bottle" src="img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png" alt="">
                <img class="finalBoss" src="img/4_enemie_boss_chicken/4_hurt/G21.png" alt="">
            </div>
            
            <div class="d-flex flex-column align-items-center margin-top negative-margin-top">
                <span>THROW</span>
                <div>
                <img class="" src="img/icons8-bottle-of-water-48.png" alt="">
                <img class="" src="img/icons8-d-67.png" alt="">
                </div>
            </div>                
            <button class="position-absolute backBtn d-flex justify-content-center align-items-center" onclick="showSecondPage()">Back</button>
        </div>                
    `;
}