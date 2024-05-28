// goes to top of webpage with animation
function goToTop() {
    console.log("scrolling to top!");

    setTimeout(function ()
    {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, 100);
}

let btnScroll = $("#btn-scroll-top");

function scrollFunc() {
    const footer =    document.querySelector("footer");
    // JQUERY: querySelector returns first hit, can use instead of document.getElementsByTagName("footer")[0];
    let footerHeight = parseInt(window.getComputedStyle(footer).height, 10);

    let limit = document.documentElement.scrollHeight - document.documentElement.clientHeight - footerHeight;

    if (document.documentElement.scrollTop > limit) {
        btnScroll.css({   // JQUERY: can use css for multiple changes in a single line
            "display": "block",
            "position": "absolute",
            "right": "42px" // minus body margin of 8px
        });
    } else if(document.documentElement.scrollTop > 20) {
        btnScroll.css({
            "display": "block",
            "position": "fixed",
            "right": "50px"
        });
    } else {
        btnScroll.css("display", "none");
    }
}

// add event listenser for scroll (anonymous function?)
document.addEventListener("scroll", (event) => { scrollFunc() });