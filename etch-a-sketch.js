let gridSize = 16;
let coloredCells = [];

const gridContainer = document.querySelector("#grid-container");
const clearButton = document.querySelector("#clear");
const newDrawpad = document.querySelector("#new-drawpad");

subscribeToEvents();
drawGrid(gridSize, gridSize);

function subscribeToEvents()
{
    gridContainer.addEventListener("mouseover", (event)=>{
        colorCell(event.target.id);
    });

    clearButton.addEventListener("click", onClearDrawpadOnClick);
    newDrawpad.addEventListener("click", onNewDrawpadOnClick);
}

function onNewDrawpadOnClick(){
    console.log("New drawpad!");
}

function onClearDrawpadOnClick(){
    console.log("Clearing drawpad");
}

function drawGrid(width, height){
    if(typeof width != "number" || typeof height != "number"){ return "ERROR: Grid width and height must be numbers!"}
    
    for(let y = 0; y < height; y++){
        let gridRow = createGridRow();

        for(let x = 0; x < width; x++)
        {
            gridRow.appendChild(createGridCell(`${y*width + x}`));
            coloredCells[y*width + x] = 0.0;
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
    let cellParent = document.createElement("div");
    cellParent.classList.add("grid-cell-parent");
    
    let cell = document.createElement("div");
    cell.id = "cell-"+cellName;
    cell.classList.add("grid-cell");
    cell.style.opacity = 0;

    cellParent.appendChild(cell);
    return cellParent;
}

function colorCell(cellId)
{
    if(cellId.includes("cell"))
    {
        let cellIndex = parseInt(cellId.replace("cell-", ""));
        let cell = document.querySelector(`#${cellId}`);
        let currentOpacity = coloredCells[cellIndex];
        currentOpacity += 0.1;
        coloredCells[cellIndex] = clampValue(currentOpacity, 0.0, 1.0);
        cell.style.opacity = currentOpacity;
    }
}

function clampValue(value, min, max)
{
    if(value < min){
        return min;
    }

    if(value > max){
        return max;
    }

    return value;
}

