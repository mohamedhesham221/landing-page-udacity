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
/*

*/
/**
 * Define Global Variables
**/
let sections = document.querySelectorAll("section"),
    listArr = [],
    menu = document.querySelector("ul"),
    anchors= "";
/**
 * End Global Variables
 **/

 /* Begin Main Functions*/
 /*get data-nav value and push it to array of list items navigation*/ 
function getNavTxt(){
    let itemTxt = "";
    sections.forEach(section => {
        itemTxt = section.getAttribute("data-nav");
        listArr.push(itemTxt);
    });
    return listArr;
};

// build the nav
// Build menu and get their innerHTML from listArr to make it more dynamic and append it to menu
function buildMenu(){
    for (let i = 0; i < listArr.length; i++) {
            const elementTxt = listArr[i];
            let listItem = document.createElement("li"),
                anchor = document.createElement("a");
            anchor.innerHTML = elementTxt;
            anchor.setAttribute("href",`#section${i+1}`)
            listItem.append(anchor);
            menu.appendChild(listItem)
    }
    anchors = document.querySelectorAll(".navbar__menu a");
};

function addStyleClass() {
    for (let i = 0; i < anchors.length; i++) {
        const element = anchors[i];
        element.classList.add("menu__link")
    }
}

// Add class 'active' to section when near top of viewport
document.onscroll = function() {
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if(section.getBoundingClientRect().top >= -400 && section.getBoundingClientRect().top <= 150){
            // Set sections as active
            section.classList.add("active-section")
        }else{
            section.classList.remove("active-section")
        }
    }
}

function addActiveClass(){
    anchors.forEach(anchor => {
        /**
            * Begin Events
            * Scroll to section on link click
        */
        anchor.addEventListener("click", function(e){
            e.preventDefault()
            anchors.forEach(anchor => {
                anchor.classList.remove("active");
            })
            anchor.classList.add("active");
        // Scroll to anchor ID using scrollTO event
        sections.forEach(section => {
                if ("#"+section.id === anchor.getAttribute("href")) {
                    window.scrollTo({
                        top: section.getBoundingClientRect().top + window.scrollY,
                        behavior: "smooth"
                    })
                }
            })
        })
    });
}
getNavTxt();
buildMenu();
addStyleClass();
addActiveClass();



/*End Main Functions*/


/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/





 /* Start Helper Functions
 * 
*/



/**
 * End Helper Functions

 * 
*/







