const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

console.log(CTA);
console.log(ALERT);

function reveal(e,current) {
    e.preventDefault();
    debugger;
    console.log(current);
    current.innerHTML == "Book Now!" ? current.innerHTML = "Oooops !" : current.innerHTML = "Book Now!"
    //CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");

    console.log(CTA);
    console.log(ALERT);
}

CTA.addEventListener('click', wrapperFunc, false);
//CTA.addEventListener('click', function(){console.log("The button was clicked!")}, false);
function wrapperFunc(e){
    reveal(e,this);
}
