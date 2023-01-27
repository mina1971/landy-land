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
window.addEventListener("scroll", addLight);

const links = document.querySelectorAll("a.menu__link");

// Loop through the links and add the active class to the current/clicked button
function addLight() {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      const current = document.getElementsByClassName("active-class");

      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(
          " active-class",
          ""
        );
      }

      // Add the active class to the current/clicked button

      this.className += " active-class";
    });
  }
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
