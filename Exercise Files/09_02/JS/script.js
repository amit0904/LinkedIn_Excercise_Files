var extLinks = document.querySelectorAll('a[href^="http"]');
console.log(extLinks[1]);
console.log(extLinks);


console.log(document.querySelector('.feature'));   // brings the first full HTML that has class feature.
console.log(document.querySelector('.feature a')); // just brings the a tag from the innerHTML of the HTML with class feature.


// length is a property of arrays in JavaScript that returns or sets the number of elements in a given array.

var extLinks = document.querySelectorAll('a[href^="http"]');
console.log(extLinks);  


for (var i = 0; i < extLinks.length; i++) {
console.log(extLinks[i]);
extLinks[i].setAttribute("target","_blank") ;
if (i ==2 ) {
    break;
}
}
