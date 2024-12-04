
function impressum() {
    return /*html */ `
        <div class=" d-flex justify-content-center align-items-center gapHelp" >
            <img class="closeImg position-absolute" src="img/icons8-close-50.png" alt="" onclick="closeHelpPage()">
            <div class=" impressum d-flex flex-column align-items-center margin-top">
            <h1 class="impressum_h1">Impressum</h1>  
            <p class="">

            Angaben gemäß § 5 TMG
            Dennis Freyer
            E-Mail: info@dennisfreyer.dev

            Haftungsausschluss
            Dieses Jump-and-Run-Spiel wurde ausschließlich zu Lern- und Unterhaltungszwecken entwickelt. Es ist keine Anmeldung erforderlich, und es werden keine personenbezogenen Daten gespeichert. Die Nutzung erfolgt auf eigene Verantwortung.

            Urheberrecht
            Die Inhalte und Grafiken dieses Spiels wurden von Dennis Freyer erstellt oder rechtmäßig verwendet. Eine kommerzielle Nutzung ist nicht gestattet.   
            <a class="icon" href="https://icons8.com/icons"> icons8</a>
            </p>  
            </div>  
            <button class="position-absolute nextBtn d-flex justify-content-center align-items-center" onclick="showSecondPage()">Next</button>
        </div>            
    `;
}

/**
 * 
 * @returns the html code for the first help page
 */
function helpDeskFirstPage() {
    return /*html */ `
        <div class=" d-flex justify-content-center align-items-center gapHelp" >
            <img class="closeImg position-absolute" src="img/icons8-close-50.png" alt="" onclick="showSecondPage()">
            <img class="pepe d-flex align-items-center" src="img/2_character_pepe/2_walk/W-21.png" alt="">
            <div class="d-flex flex-column align-items-center margin-top">
                <span>WALK</span>
                <div>
                <img class="" src="img/icons8-pfeil-64.png" alt="">
                <img class="" src="img/right.png" alt="">
                </div>
            </div>                
            <button class="position-absolute nextBtn d-flex justify-content-center align-items-center" onclick="showThirdPage()">Next</button>
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
            <button class="position-absolute nextBtn d-flex justify-content-center align-items-center" onclick="showFourthPage()">Next</button>
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
            <button class="position-absolute backBtn d-flex justify-content-center align-items-center" onclick="showHelpPage()">Back</button>
        </div>                
    `;
}