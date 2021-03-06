/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
//global variables
const createLi = document.createElement("li");
const ul = document.querySelector("#navbar__list");
const navAnchorName = document.querySelectorAll("h2");
const anchor = ul.querySelectorAll("a");
const nav = document.querySelector("navbar__menu");
const main = document.querySelector("main");
const allSections = document.querySelectorAll("section");

// build the nav
//create nav anchor links inside ul 
function createNavItemList(){
    navAnchorName.forEach(element => {
        let name = element.innerHTML;
        createLi.innerHTML = `<a href="#">${name}</a>`;
        ul.innerHTML += createLi.innerHTML;
    });
}

// Set anchor links to section in the web
function createNavAnchors(){
    const allSections = document.querySelectorAll("section");
    const anchor = ul.querySelectorAll("a");
    for(i=0; i<anchor.length; i++){
        for(j=0; j<=i; j++){
            anchor[i].setAttribute("href",`#${allSections[j].getAttribute("id")}`);
        }
    }
}
createNavItemList();
createNavAnchors();

// Add class 'active' to section when near top of viewport
// Function to check if section is in viewport 
function isInView(e) {
    let section = e.getBoundingClientRect();
    return (
        section.top + 300>= 0 &&
        section.left >= 0
    );
  }

  // function to toggle active class
  function toggleActiveClass() { 
    for (i = 0; i < allSections.length; i++) {
        if(!isInView(allSections[i])){
            allSections[i].classList.remove('active');
        } else {
            allSections[i].classList.add('active');
        }
    }
}

document.addEventListener("scroll", toggleActiveClass);

// Scroll to section on link click
// smooth scroll when click on anchor
$(document).ready(function(){
// Add smooth scrolling to all links
$("a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
        window.location.hash = hash;
    });
    } 
});
});