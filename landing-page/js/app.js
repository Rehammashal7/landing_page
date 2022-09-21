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

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/

const ul=document.getElementById('navbar__list')
const sections=document.querySelectorAll('section')
const fragment=document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
 * 
 * 
 * 
 * */






function buildNabigationMenu(){
sections.forEach(function(s){
const sectionid=s.id;
const sectionTitle=s.dataset.nav;
const li=document.createElement('li')
const link=document.createElement('a')
ul.insertAdjacentHTML("beforeend", `<li><a class="menu__link" id = Link${s.id}  href="#${s.id}">${s.dataset.nav}</a></li>`);

link.addEventListener('click',function(e){
e.preventDefault();
s.scrollIntoView({
    //make every scroll smooth
    behavior:'smooth'
})
})

li.appendChild(link)
fragment.appendChild(li)
})

ul.appendChild(fragment)
}
window.addEventListener('load',buildNabigationMenu)
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
//add section 1 to  ulitem4 =document.getElementById("navbar__list").appendChild(litem4);


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click



function activeSection() {
    //check every section to find the one in viewport with every scroll event
    for (let section of sections) {
        //get coordinate and check it
        boundCheck = section.getBoundingClientRect().top
        //check the top and bottom of viewport with additional margins for smooth transition between sections
        if (boundCheck <= 250 && boundCheck >= 0) {
            //declare the section active
            section.classList.add("your-active-class");
            //change the section link's colors in dynamic navigation bar aswell
            let activeLink = document.getElementById(`Link${section.id}`);
            activeLink.classList.replace("menu__link", "active__link");
        }
        //remove active section class if left viewport
        else if (section.classList.contains("your-active-class")) {
            section.classList.remove("your-active-class");
            //remove the section link's colors in dynamic navigation bar aswell
            let activeLink = document.getElementById(`Link${section.id}`);
            activeLink.classList.replace("active__link", "menu__link");
        }
    }
}
document.addEventListener("scroll", activeSection);

// Set sections as active
























