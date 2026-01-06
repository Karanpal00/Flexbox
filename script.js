const div = document.getElementById("container");
const computedStyle = window.getComputedStyle(div);
const divWidth = parseInt(computedStyle.width);
const divHeight = parseInt(computedStyle.height);


const sizeOfGrid = prompt("Enter numer of grid between 2 to 100.");

for (let i = 0; i < sizeOfGrid*sizeOfGrid; ++i) {
    let newDiv = document.createElement("div");

    newDiv.classList.add("item");
    newDiv.style.width = (divWidth/sizeOfGrid).toString()+"px";
    newDiv.style.height = (divHeight/sizeOfGrid).toString()+"px";

    div.appendChild(newDiv);
}

function changeColor(e) {
    const red = parseInt(Math.random()*255);
    const blue = parseInt(Math.random()*255);
    const green = parseInt(Math.random()*255);
    e.target.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
}

const divItems = document.querySelectorAll(".item");

divItems.forEach((item)=> {
    item.addEventListener("mouseenter", changeColor);
});

const btn = document.getElementById("btn-1");
btn.addEventListener("click", ()=> {
    divItems.forEach((item)=>item.style.backgroundColor = "transparent");
});