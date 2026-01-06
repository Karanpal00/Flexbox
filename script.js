const div = document.getElementById("container");
const computedStyle = window.getComputedStyle(div);
const divWidth = parseInt(computedStyle.width);
const divHeight = parseInt(computedStyle.height);
let divItems;

function generateGrid() {
    reset();

    const sizeOfGrid = getInput();

    for (let i = 0; i < sizeOfGrid*sizeOfGrid; ++i) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");

        newDiv.style.width = (divWidth/sizeOfGrid).toString()+"px";
        newDiv.style.height = (divHeight/sizeOfGrid).toString()+"px";

        div.appendChild(newDiv);
    }
    addInteration();
    
}

function getInput() {
    let sizeOfGrid = 0;

    while (sizeOfGrid < 2 || sizeOfGrid > 100) {
        sizeOfGrid = parseInt(prompt("Enter numer of grid between 2 to 100."));
    }   

    sizeOfGrid = Number.isInteger(sizeOfGrid)? sizeOfGrid: 16;

    const p = document.querySelector("p");
    p.textContent = `Color Changing Grid.
        \nGrid size = ${sizeOfGrid}X${sizeOfGrid}`;

    return sizeOfGrid;
}

function reset() {
    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

function addInteration() {
    divItems = document.querySelectorAll(".item");
    divItems.forEach((item)=> {
        item.addEventListener("mouseenter", changeColor);
    });
}

function changeColor(e) {
    const red = parseInt(Math.random()*255);
    const blue = parseInt(Math.random()*255);
    const green = parseInt(Math.random()*255);
    e.target.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
}

generateGrid()


const btn1 = document.getElementById("btn-1");
btn1.addEventListener("click", ()=> {
    divItems.forEach((item)=>item.style.backgroundColor = "transparent");
});

const btn2 = document.getElementById("btn-2");
btn2.addEventListener("click", generateGrid);
