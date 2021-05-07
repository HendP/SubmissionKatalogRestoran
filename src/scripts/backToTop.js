let btnToTop = document.getElementById("go-to-top");

// for detect user when scrolling after 100px
window.onscroll = () => { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 20) {
        btnToTop.style.display = "block";
    } else {
        btnToTop.style.display = "none";
    }
}

// back to top
// function toTop() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }