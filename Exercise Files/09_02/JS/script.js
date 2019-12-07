
var extLinks = document.querySelectorAll('a[href^="http"]');
console.log(extLinks);  


for (var i = 0; i < extLinks.length; i++) {
console.log(extLinks[i]);
extLinks[i].setAttribute("target","_blank") ;
if (i ==2 ) {
    break;
}
}
