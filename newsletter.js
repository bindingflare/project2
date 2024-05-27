// Use Jquery JS framework for newsletter feature

// Creates popup for form submit
function createSubmitPopout(event) {
    console.log("creating popup!");

    const cover = $("#popup-cover")
    cover.css("display", "block");

    const popup = $("#popup-subscribed");
    window.setTimeout(function(){
        popup.css("transform","scale(1)");
    },0);

    event.preventDefault();
}

// Add event listener to form submit
const form = document.getElementById("subscribe");
form.addEventListener("submit", createSubmitPopout);

// Hide popup when close is pressed
function closePopup(event) {
    console.log("closing popup!");

    const cover = $("#popup-cover");
    const popup = $("#popup-subscribed");

    popup.css("transform","scale(0)");

    window.setTimeout(function(){
        cover.css("display","none");
    },700);
}

// // Add event listener to form submit
// const form = document.getElementById("subscribe");
// form.addEventListener("submit", createSubmitPopout);
//
// // Hide popup when close is pressed
// function closePopup(event) {
//     console.log("closing popup!");
//
//     const cover = document.getElementById("popup-cover")
//
//     const popup = document.getElementById("popup-subscribed");
//     popup.style.transform = 'scale(0)';
//
//     window.setTimeout(function(){
//         cover.style.display = 'none';
//     },700);
// }