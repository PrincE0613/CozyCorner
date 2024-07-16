'use strict';

/*element toggle function*/

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/*navbar toggle*/

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/*close navbar when click on any navbar link */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/*aDd event on all elements for toggling navbar */

for (let i = 0; i < navElemArr.length; i++) {
navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
});
}



/*header active state*/

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
});


function showOptions() {
    const propertyType = document.getElementById('propertyType').value;
    const apartmentFields = document.getElementById('apartmentFields');
    const houseFields = document.getElementById('houseFields');

    if (propertyType === 'apartment') {
        apartmentFields.style.display = 'block';
        houseFields.style.display = 'none';
    } else if (propertyType === 'house') {
        apartmentFields.style.display = 'none';
        houseFields.style.display = 'block';
    } else {
        apartmentFields.style.display = 'none';
        houseFields.style.display = 'none';
    }
}