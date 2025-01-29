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

// navbar script end
// accordion script start

document.addEventListener("DOMContentLoaded", function () {
    const accordionButtons = document.querySelectorAll(".accordion-button");
    const firstAccordionButton = accordionButtons[0];
    const firstAccordionText = firstAccordionButton.nextElementSibling;

    // Open the first accordion by default
    firstAccordionButton.classList.add("active");
    firstAccordionButton.querySelector("span").textContent = "−";
    firstAccordionText.classList.add("active");
    firstAccordionText.style.maxHeight = firstAccordionText.scrollHeight + "px";

    accordionButtons.forEach(button => {
        button.addEventListener("click", function () {
            const currentlyActive = document.querySelector(".accordion-text.active");
            const currentlyActiveButton = document.querySelector(".accordion-button.active");
            
            if (currentlyActive && currentlyActive !== this.nextElementSibling) {
                currentlyActive.classList.remove("active");
                currentlyActive.style.maxHeight = null;
                currentlyActiveButton.classList.remove("active");
                currentlyActiveButton.querySelector("span").textContent = "+";
            }
            
            this.classList.toggle("active");
            this.querySelector("span").textContent = this.classList.contains("active") ? "−" : "+";
            
            const accordionText = this.nextElementSibling;
            if (accordionText.classList.contains("active")) {
                accordionText.classList.remove("active");
                accordionText.style.maxHeight = null;
            } else {
                accordionText.classList.add("active");
                accordionText.style.maxHeight = accordionText.scrollHeight + "px";
            }
        });
    });
});

// accordion script end
