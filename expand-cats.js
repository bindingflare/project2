// Creates 3 cat images in a row and expands catalogue
function addMoreCats(event) {
    console.log("adding more cats!");
    const grid = document.getElementById("expand-cat-grid");

    let limit = window.getComputedStyle(grid).gridTemplateColumns.split(" ").length;
    for (let i = 0; i < limit; i++) {
        const griditem = document.createElement("div")
        griditem.setAttribute("class", "grid-item");
        griditem.style.width = "100%";
        griditem.style.animationName = "change-height";
        griditem.style.animationDuration = ".4s";
        griditem.style.animationTimingFunction = "linear";

        // create an image element of img-cat class
        const img = document.createElement('img');
        img.setAttribute("class","img-cat");
        img.setAttribute("src","assets/images/cats/cat1.jpg");
        img.setAttribute("alt", "cat image " + i);
        img.style.transition = ".4s ease";
        
        // Add to grid
        griditem.appendChild(img);
        grid.appendChild(griditem);

        window.setTimeout(function () {
            griditem.style.transform = "scale(1)";
        }, 10);

        window.setTimeout(function () {
            img.style.opacity = "0";
        }, 50);

        window.setTimeout(function () {
            img.style.opacity = "1";
        }, 450);
    }

    event.preventDefault();
}

// Add event listener to show more button
const expandbtn = document.getElementById("expand-cats");
expandbtn.addEventListener("click", addMoreCats);