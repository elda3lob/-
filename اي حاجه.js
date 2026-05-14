/* ANIMATION */

const sections =
document.querySelectorAll("section");

window.addEventListener(
"scroll",
()=>{

sections.forEach(sec=>{

const top =
window.scrollY;

const offset =
sec.offsetTop - 400;

if(top >= offset){

sec.style.opacity="1";

sec.style.transform=
"translateY(0px)";

}

});

}
);

sections.forEach(sec=>{

sec.style.opacity="0";

sec.style.transform=
"translateY(60px)";

sec.style.transition="1s";

});

/* NAV FIX */

document
.querySelectorAll('nav a')

.forEach(link=>{

link.addEventListener(
'click',

()=>{

window.scrollBy(0,-80);

}

);

});
