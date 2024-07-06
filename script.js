// sketch container elements
const sketchContainer = document.querySelector(".sketch-container");
let width = sketchContainer.offsetWidth - 4;
let height = sketchContainer.offsetHeight - 4;
console.log(width); console.log(height);

// generate pixels 
let squaresTotal = 64;

// generate pixels 
function generatePixels() {
  let squareWidthHeight = width / squaresTotal;
  console.log("SQAURE WIDTH: " + squareWidthHeight);

  // Create and append squares to the container
  for(let i = 0; i < squaresTotal * squaresTotal; i++) {
    let square = document.createElement("div");

    square.style.width = `${squareWidthHeight}px`;
    square.style.height = `${squareWidthHeight}px`;
    square.classList.add("square");

    // drawing effect
    square.addEventListener("mouseover", () => {
      if(leftClick == true) { square.style.backgroundColor = currentColor.style.backgroundColor;}
    });
    square.addEventListener("mouseup", () => {
      square.style.backgroundColor = currentColor.style.backgroundColor;
    });

    sketchContainer.appendChild(square);
  }
}

// initial generation of pixels
generatePixels();

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

// pixels count
const slider = document.querySelector("#slider");
  let sliderValue;
const pixels = document.querySelector("#pixels");
let pixelsCount; 

slider.addEventListener("mouseup", () => {
  squaresTotal = slider.value;

  // Remove all child elements of the sketchContainer
  sketchContainer.replaceChildren();
  pixelsCount = slider.value;

  // Generate pixels with the new slider value
  generatePixels();
  pixels.textContent = `${pixelsCount}px`
});

// Color changer
const currentColor = document.querySelector(".currentColor");
currentColor.style.backgroundColor = "black";
let colorSquares = document.querySelectorAll(".colorSquare");
colorSquares.forEach(colorSquare => {
  colorSquare.addEventListener("mousedown", () => {
    console.log(colorSquare.style.backgroundColor);
    currentColor.style.backgroundColor = `${colorSquare.style.backgroundColor}`;
  });
});





