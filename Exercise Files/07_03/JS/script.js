const CTA = document.querySelector(".cta a");
console.log(CTA);
const ALERT = document.querySelector("#booking-alert")
console.log(ALERT);

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e,current) {

    e.preventDefault();
    current.innerHTML == "Book Now" ? CTA.innerHTML = "Oooops!" : CTA.innerHTML = "Book Now";
    //CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");

}

//CTA.onclick = reveal;     
//CTA.onclick = console.log("I am second function for click");

CTA.addEventListener("click", function(e){reveal(e,this);}, false);
CTA.addEventListener("click", function(){console.log("I am second function for click")}, false);

const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");


CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal() {

    console.log("revealed");

    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}


// CTA.onclick = reveal;
CTA.addEventListener('click', reveal, false);
