const IMAGES = document.querySelectorAll("img");
console.log(IMAGES);

for(let i = 0; i < IMAGES.length; i++){
let imgsrc = IMAGES[i].getAttribute("src");
console.log(imgsrc , typeof(imgsrc));

}

    