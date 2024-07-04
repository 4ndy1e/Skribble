// sketch container elements
const sketchContainer = document.querySelector(".sketch-container");
const width = sketchContainer.offsetWidth;
const height = sketchContainer.offsetHeight;

// create first column 
let column = document.createElement("div");
let squaresTotal = 16; // user promted 

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

// detect left click
let leftClick = false; 
sketchContainer.addEventListener("mousedown", () => {
  leftClick = true;
  console.log(leftClick);
});
sketchContainer.addEventListener("mouseup", () => {
  leftClick = false;
  console.log(leftClick);
});

// create drawing effect 
const pixel = document.querySelectorAll(".square");

pixel.forEach(square => {
  square.addEventListener("mousedown", () => {
    square.style.backgroundColor = "black";
  })
  square.addEventListener("mouseover", () => {
    if(leftClick == true) {
      square.style.backgroundColor = "black";
    }
  });
});

