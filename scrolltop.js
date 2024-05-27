function goToTop() {
    setTimeout(function ()
    {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, 100);
}

let btnScroll = document.getElementById("btn-scroll-top");

function scrollFunc() {
    const footer =    document.querySelector("footer");
    // querySelector returns first hit, can use instead of document.getElementsByTagName("footer")[0];
    let footerHeight = parseInt(window.getComputedStyle(footer).height, 10);

    let limit = document.documentElement.scrollHeight - document.documentElement.clientHeight - footerHeight;

    if (document.documentElement.scrollTop > limit) {
        btnScroll.style.display = "block";
        btnScroll.style.position = "absolute"
    } else if(document.documentElement.scrollTop > 20) {
        btnScroll.style.display = "block";
        btnScroll.style.position = "fixed";
    } else {
        btnScroll.style.display = "none";
    }
}

document.addEventListener("scroll", (event) => { scrollFunc() });