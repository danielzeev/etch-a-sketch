// Selectors
let body             = document.querySelector("body")
let gridContainerDiv = document.querySelector(".grid-container")
let rangeInputSlider = document.getElementById("range-input"); // change to gridSizeSlider?
let rangeText        = document.getElementById("range-output");
let clearBtn         = document.getElementById("clear-button");
let rainbowBtn       = document.getElementById("rainbow-button");
let colorBtn         = document.getElementById("color-button");
let rainbowMode      = false;
let squareColor      = colorBtn.value;

// rangeText.textContent = `${rangeInputSlider.value} x ${rangeInputSlider.value}`;


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Create the grid of squares
function createGrid(gridSize) {
    
    // Clear gird
    removeAllChildNodes(gridContainerDiv);

    // Grid creation
    for (let i = 1; i <= gridSize; i++) {
        
        // Create a div to hold the entire row 
        let row = document.createElement("div");
        row.className = "row";
        
        // Populate row with `gridSize` squares 
        for (let i = 1; i <= gridSize; i++) {
            let singleSquare = document.createElement("div");
            singleSquare.className    = "square";
            
            // Append square to row
            row.appendChild(singleSquare);
        }
        // Append row to grid
        gridContainerDiv.appendChild(row)
    }
}

// Create random color
function randomColor() {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    return `rgb(${R}, ${G}, ${B})`;
}

// Grid size change (slider)
rangeInputSlider.addEventListener('input', (event) => {
    gridSize = Number(event.target.value);
    rangeText.textContent = `${gridSize} x ${gridSize}`;
    createGrid(gridSize);
});

// Grid drawing 
gridContainerDiv.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('square')) {
        if (rainbowMode) {
            event.target.style.backgroundColor = randomColor();
        } else {
            event.target.style.backgroundColor = squareColor;
        }        
    }
});

// Erase single square 
gridContainerDiv.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('square')) {
        event.target.style.backgroundColor = body.style.backgroundColor; //grid color?
    }
});

// Clear canvas 
clearBtn.addEventListener('click', () => {
    createGrid(gridSize);
});


// Rainbow mode 
rainbowBtn.addEventListener('click', () => {
    rainbowMode = !rainbowMode;
    rainbowBtn.style.backgroundColor = (rainbowMode) ? "rgb(47,47,47)" : "";
    rainbowBtn.style.color           = (rainbowMode) ? "white" : "";
});


// Color selection
colorBtn.addEventListener('input', () => {
    colorBtn.style.backgroundColor = colorBtn.value
    squareColor = colorBtn.value;    
})






// Initialize grid
// let gridSize = rangeInputSlider.value; // need better name for this?
// createGrid(gridSize);
createGrid(gridSize=rangeInputSlider.value);

