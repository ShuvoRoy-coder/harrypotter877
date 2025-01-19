// navbar script start

const toggleButton = document.querySelector("#toggle-button");
const navList = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-link");
const toggleBar = document.querySelector(".toggle-bar");
const crossBar = document.querySelector(".cross-bar");

const hideNavbar = () => {
    navList.classList.toggle("invisible");
    navList.classList.toggle("opacity-0");
    
    toggleBar.classList.toggle("visible");
    toggleBar.classList.toggle("opacity-100");
    toggleBar.classList.toggle("invisible");
    toggleBar.classList.toggle("opacity-0");

    crossBar.classList.toggle("visible");
    crossBar.classList.toggle("opacity-100");
    crossBar.classList.toggle("invisible");
    crossBar.classList.toggle("opacity-0");

}

toggleButton.addEventListener("click", () => {
    hideNavbar();
});


navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hideNavbar();
  });
});
