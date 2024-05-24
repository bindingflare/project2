
// Creates popup for form submit
function createSubmitPopout(event) {
    console.log("creating popup!");

    const cover = document.getElementById("popup-cover")
    cover.style.display = "block";

    const popup = document.getElementById("popup-subscribed");
    window.setTimeout(function(){
        popup.style.transform = 'scale(1)';
    },0);

    event.preventDefault();
}

// Add event listener to form submit
const form = document.getElementById("subscribe");
form.addEventListener("submit", createSubmitPopout);

// Hide popup when close is pressed
function closePopup(event) {
    console.log("closing popup!");

    const cover = document.getElementById("popup-cover")

    const popup = document.getElementById("popup-subscribed");
    popup.style.transform = 'scale(0)';

    window.setTimeout(function(){
        cover.style.display = 'none';
    },700);
}