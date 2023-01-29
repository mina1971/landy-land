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
 */
let list = document.getElementById("navbar__list");
let sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function myNewNavbar() {
  // loop over sections
  for (sec of sections) {
    // create list item and enchor tag
    const listItem = document.createElement("li");
    // attributes from section id
    listItem.innerHTML = `<li><a href="#${sec.id}"data-nav="${sec.id}"class="menu__link">
      ${sec.dataset.nav}</a></li>`;

    list.appendChild(listItem);
  }
}
//smooth scrolling ,title
//add section.dataset.nav , smooth scrolling ,title
list.addEventListener("click", (toSection) => {
  toSection.preventDefault();
  if (toSection.target.dataset.nav) {
    document
      .getElementById(`${toSection.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
  }
});
myNewNavbar();

// Build menu

//scroll to section on link click
window.addEventListener("scroll", navLight);
//scroll to section on link click
const links = document.querySelectorAll("a.menu__link");
function navLight() {
  //loop over section
  sections.forEach(section => {
    //using getBoundingClientRect Return the size of an element and its position relative to the viewport
    const sectionTop = section.getBoundingClientRect().top;
    //Selection of items by dataset
    const sectionTitle = section.getAttribute("data-nav");
    // if begin
    if (sectionTop > 0 && sectionTop < 250) {
      // add active class link
      section.classList.add("your-active-class");
      //loop over links
      links.forEach(link => {
        if (link.textContent === sectionTitle) {
          link.classList.add("active-class");
        } else {
          link.classList.remove("active-class");
        }
      })
    }//end if
  })
}
     
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build  mini menu using  small list icon
function miniNavBar() {
  const nav = document.getElementById("navbar__list");
  if (nav.className === "nav-top") {
    nav.className += " show_list";
  } else {
    nav.className = "nav-top";
  }
}
// Scroll to section on link click

// Set sections as active
