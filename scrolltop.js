function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let btnScroll = document.getElementById("btn-scroll-top");

function scrollFunc() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnScroll.style.display = "block";
    } else {
        btnScroll.style.display = "none";
    }
}

window.onscroll = () => { scrollFunc()};