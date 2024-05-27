const switchWidth = 920;
var menuToggled = false;
if(document.documentElement.scrollWidth < switchWidth) {
    toggleMenu()
}

function toggleMenu() {
    menuToggled = !menuToggled;

    if(menuToggled) {
        $(".mainmenuitem").detach().appendTo($("#mainmenuslide"));
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

onresize = (event) => {
    const widthOutput =  document.documentElement.scrollWidth;

    if (widthOutput <= switchWidth && !menuToggled || widthOutput > switchWidth && menuToggled)
    {
        toggleMenu();
    }
};

var slideMenuToggled = false;
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
            $("#menuslide-framer").css("display", "none");
        }, 500);
    }
}

