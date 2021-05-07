let nav = document.querySelector(".navigation");
let navToggle = document.getElementById("navigation-toggle-menu");

navToggle.addEventListener("click", function() {
    nav.classList.toggle("active");
});