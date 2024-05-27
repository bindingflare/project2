// Creates 3 cat images in a row and expands catalogue
function addMoreCats(event) {
    console.log("adding more cats!");
    const grid = document.getElementById("expand-cat-grid");

    let height = grid.clientHeight;
    grid.style.maxHeight = height + "px";
    let new_height = height;

        let limit = window.getComputedStyle(grid).gridTemplateColumns.split(" ").length;
    for (let i = 0; i < limit; i++) {
        const griditem = document.createElement("div")
        griditem.setAttribute("class", "grid-item");

        // create an image element of img-cat class
        const img = document.createElement('img');
        img.setAttribute("class","img-cat"); // NOTE: in Jquery can use .attr()
        img.setAttribute("src","assets/images/cats/cat1.jpg");
        img.setAttribute("alt", "cat image " + i);
        img.style.transition = ".4s ease";
        img.style.opacity = "0";
        
        // Add to grid
        griditem.appendChild(img);
        grid.appendChild(griditem);

        window.setTimeout(function () {
            img.style.opacity = "1";
        }, 400);

        new_height = griditem.clientHeight;
    }

    grid.style.maxHeight = new_height + height + "px";

    window.setTimeout(function () {
        grid.style.maxHeight = "";
    }, 400);
    
    event.preventDefault();
}

// Add event listener to show more button
const btnexpand = document.getElementById("expand-cats");
btnexpand.addEventListener("click", addMoreCats);