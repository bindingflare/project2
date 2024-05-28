const switchWidth = 900; // window width to switch to mobile view
var menuToggled = false;
var slideMenuToggled = false;
if(document.documentElement.scrollWidth < switchWidth) {
    toggleMenu()
}

// toggle the menu icon visibility
function toggleMenu() {
    menuToggled = !menuToggled;

    if(menuToggled) {
        $(".mainmenuitem").detach().appendTo($("#mainmenuslide")); // JQUERY: move element from one to another
        $("#mainmenuicon").css("display", "");
    }
    else {
        $(".mainmenuitem").detach().appendTo($("#mainmenu"));
        $("#mainmenuicon").css("display", "none");

        if(slideMenuToggled) {
            toggleSlideMenu();
        }
    }
}

// JQUERY: add event for resize
onresize = (event) => {
    const widthOutput =  document.documentElement.scrollWidth;

    if (widthOutput <= switchWidth && !menuToggled || widthOutput > switchWidth && menuToggled)
    {
        toggleMenu(); // if user switch out of mobile view, make sure slide menu is toggled off
    }
};

// toggle the slide menu with animation
function toggleSlideMenu() {
    slideMenuToggled = !slideMenuToggled;

    if(slideMenuToggled) {
        $("#menuslide-framer").css({
            "display": "block"
        });

        window.setTimeout(function () {
            $("#menuslide-framer").css("width", "300px");
        }, 200);
    }  else {
        $("#menuslide-framer").css({
            "width": "0"
        });

        window.setTimeout(function () {
            $("#menuslide-framer").css("display", "none"); // finish animation before hiding slide menu
        }, 500);
    }
}

