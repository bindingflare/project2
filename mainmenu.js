// Use JQuery for mainmenu feature

function toggleMobileView() {
    const mainmenu = $("#mainmenu");
    const frame = $("#menu-framer");

    mainmenu.css("flex-direction", "column");
    frame.css("position", "fixed");

}

