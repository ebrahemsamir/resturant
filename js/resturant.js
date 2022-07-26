let nav = document.querySelector("nav")
window.onscroll = function () {
    if (window.scrollY > nav.offsetTop + 100) {
        nav.style.backgroundColor = "#0000009e"
    }
    else {
        nav.style.backgroundColor = "transparent"
    }
}
