// =====================================================
// MOBILE NAVIGATION
// =====================================================

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// Close the mobile menu when a navigation link is clicked

const navLinks = document.querySelectorAll("#navMenu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// =====================================================
// CONTACT FORM
// =====================================================

const contactForm = document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert(
        "Thank you for your message! I will get back to you soon."
    );

    contactForm.reset();

});