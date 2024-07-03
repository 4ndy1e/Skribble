// sketch container elements
const sketchContainer = document.querySelector(".sketch-container");
const width = sketchContainer.offsetWidth;
const height = sketchContainer.offsetHeight;

// create first column 
let column = document.createElement("div");
let squaresTotal = 4; // user promted 

let squareWidthHeight = width / squaresTotal;

for(let i = 0; i < squaresTotal; i++) {
  let square = document.createElement("div");
  square.style.width = `${squareWidthHeight}px`;
  square.style.height = `${squareWidthHeight}px`;
  square.classList.add("square");

  column.appendChild(square);
}

// clone first column and repeat until end of container 
for(let i = 0; i < squaresTotal; i++) {
  let cloneColumn = column.cloneNode(true);
  sketchContainer.appendChild(cloneColumn);
}

const pixel = document.querySelectorAll(".square");

pixel.forEach(square => {
  square.addEventListener("mouseover", () => {
    console.log("over");
  });
  square.addEventListener("mousedown", () => {
    console.log("down");
    square.style.backgroundColor = "yellow";
  });
  square.addEventListener("mouseup", () => {
    console.log("up");
  });
});

