/*
    Student Name: Florencio Sanchez
    File Name: script.js
    Date: 11/02/2026
    Chapter 10: Mobile hamburger menu
*/

// Function to open and close the mobile navigation menu.
function toggleMenu() {
    const navigation = document.querySelector('.site-nav');
    const button = navigation.querySelector('.menu-toggle');
    const isOpen = navigation.classList.toggle('nav-open');

    button.setAttribute('aria-expanded', String(isOpen));
    button.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
}

const menuButton = document.querySelector('.menu-toggle');
const siteNavigation = document.querySelector('.site-nav');

if (menuButton && siteNavigation) {
    menuButton.addEventListener('click', toggleMenu);

    // Close the mobile menu after choosing a page.
    siteNavigation.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            siteNavigation.classList.remove('nav-open');
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.setAttribute('aria-label', 'Open navigation menu');
        });
    });

    // Keep the menu keyboard-accessible.
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && siteNavigation.classList.contains('nav-open')) {
            siteNavigation.classList.remove('nav-open');
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.setAttribute('aria-label', 'Open navigation menu');
            menuButton.focus();
        }
    });
}
