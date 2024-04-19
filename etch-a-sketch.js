let gridSize = 16;
const gridContainer = document.querySelector("#grid-container");
drawGrid(gridSize, gridSize);
gridContainer.addEventListener("mouseover", (event)=>{
    colorCell(event.target.id);
});


function drawGrid(width, height){
    if(typeof width != "number" || typeof height != "number"){ return "ERROR: Grid width and height must be numbers!"}
    
    for(let y = 0; y < height; y++){
        let gridRow = createGridRow();

        for(let x = 0; x < width; x++)
        {
            gridRow.appendChild(createGridCell(`${y*width + x}`));
        }

        gridContainer.appendChild(gridRow);
    }
}

function createGridRow()
{
    let gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");

    return gridRow;
}

function createGridCell(cellName)
{
    let cell = document.createElement("div");
    cell.id = "cell-"+cellName;
    cell.classList.add("grid-cell");
    cell.textContent = cellName;

    return cell;
}

function colorCell(cellId)
{
    if(cellId.includes("cell"))
    {
        let cell = document.querySelector(`#${cellId}`);
        cell.style.backgroundColor = "black";
    }
}

