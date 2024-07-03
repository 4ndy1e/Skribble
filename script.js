// sketch container elements
const sketchContainer = document.querySelector(".sketch-container");
const width = sketchContainer.offsetWidth;
const height = sketchContainer.offsetHeight;

console.log(width);
console.log(height);


// create first column 
let column = document.createElement("div");
let squaresTotal = 16; // user promted 

let squareWidthHeight = width / squaresTotal;
console.log(squareWidthHeight);

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
