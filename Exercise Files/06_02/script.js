
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//const SECONDHAND = document.getElementById("second");
//console.log(HOURHAND2);
// SECONDHAND.strokeStyle = "#0000FF";

SECONDHAND.innerHTML = 

`<path class="second-arm" d="M300.5 350V55" stroke="#0000FF"/>
<circle class="sizing-box" cx="300" cy="300" r="253.9"/>`;



function runTheClock() {

    newDate = new Date();
    //console.log(newDate);
    //var Date = Date();
    //console.log(Date);

    let sec =  newDate.getSeconds();
    let min = newDate.getMinutes();
    let hour = newDate.getHours()-12;

    hourPosition = hour * 360/12 + min * (360/12)/60 ;
    minutePosition = min * 360/60 + sec*(360/60)/60;
    secondPosition = sec * 360/60;

    HOURHAND.style.transform   = "rotate(" + hourPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minutePosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secondPosition + "deg)"; 
}


const DIGITALTIME = document.getElementById("dtime");


function runDigitalClock() {
    DIGITALTIME.innerHTML = new Date().getHours() + ":" + new Date().getMinutes() 
    + ":" + new Date().getSeconds();    

DIGITALTIME.style.fontSize = "900%";
};


var interval = setInterval(runTheClock,1000);
var interval = setInterval(runDigitalClock,1000);

const DIGITALHIDE = document.querySelector(".boxed");
const ANALOGHIDE = document.querySelector(".clockbox");


function analogClickCheck() {
        
    if (DIGITALHIDE.classList.contains("hide")) {
        
        DIGITALHIDE.classList.remove("hide")
             
    }
    else {
        DIGITALHIDE.classList.add("hide")
            }
    
};


//function digitalClickCheck() {
        
//    if (ANALOGHIDE.classList.contains("hide")) {
        
//        ANALOGHIDE.classList.remove("hide")
             
//    }
//    else {
//        ANALOGHIDE.classList.add("hide")
//            }
    
//};

//DIGITALHIDE.onclick = digitalClickCheck;
ANALOGHIDE.onclick = analogClickCheck;


function mouseDragAction(){
        
        if (ANALOGHIDE.classList.contains("hide")) {
            
            ANALOGHIDE.classList.remove("hide")
                 
        }
        else {
            ANALOGHIDE.classList.add("hide")
                }
        
    };

DIGITALHIDE.addEventListener("mouseover", mouseDragAction, false);

window.addEventListener("close", popUp, false);


function popUp() {

    alert("Are you sure");
    
};