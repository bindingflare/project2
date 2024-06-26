var extraImgCount = 0;

// creates images in a row and expands catalogue
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
        let num = Math.floor(Math.random() * 100);
        img.setAttribute("class","img-cat"); // NOTE: in Jquery can use .attr()
        img.setAttribute("src","https://picsum.photos/id/" + num + "/300");
        img.setAttribute("alt", "cat image " + num);
        img.style.transition = ".4s ease";
        img.style.opacity = "0";
        
        // add to grid
        griditem.appendChild(img);
        grid.appendChild(griditem);

        window.setTimeout(function () {
            img.style.opacity = "1";
        }, 400);

        new_height = griditem.clientHeight;
        extraImgCount++;
    }

    grid.style.maxHeight = new_height + height + "px";

    window.setTimeout(function () {
        grid.style.maxHeight = "";
    }, 400);

    // if reach expand limit set by extraImgCount, convert expand button to something else
    if(extraImgCount >= 9) {
        btnexpand.innerText = "Lets go HODU!";
        btnexpand.style.backgroundColor = "#263140";
        btnexpand.removeEventListener("click", addMoreCats); // TODO make another webpage for more HODU content
    }
    
    event.preventDefault();
}

// add event listener to show more button
const btnexpand = document.getElementById("expand-cats");
btnexpand.addEventListener("click", addMoreCats);