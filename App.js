//mobile menu toggle

const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener('click', () => {
    // primaryNav.classList.toggle("opened");
    primaryNav.hasAttribute("data-visible") ? 
    navToggle.setAttribute("aria-expanded", false) 
    : 
    navToggle.setAttribute("aria-expanded", true) 
    primaryNav.toggleAttribute("data-visible");

    primaryHeader.toggleAttribute('data-overlay'); //toggles overlay
})


//slider
const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: false,
    dots: true,
    centerMode: true,
    arrows: false,
    responsive: {
        480: {
          dots: false,
          arrows: false
        }
      }
  });