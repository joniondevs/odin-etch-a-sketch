let gridSize = 16;
const gridContainer = document.querySelector("#grid-container");
drawGrid(gridSize, gridSize);

function drawGrid(width, height){
    if(typeof width != "number" || typeof height != "number"){ return "ERROR: Grid width and height must be numbers!"}
    
    for(let y = 0; y < height; y++){
        let gridRow = createGridRow();

        for(let x = 0; x < width; x++)
        {
            gridRow.appendChild(createGridCell(`${x}-${y}`));
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
    cell.classList.add("grid-cell");
    cell.textContent = cellName;

    return cell;
}

