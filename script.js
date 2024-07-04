// sketch container elements
const sketchContainer = document.querySelector(".sketch-container");
let width = sketchContainer.offsetWidth;
let height = sketchContainer.offsetHeight;
console.log(width);
console.log(height);

// generate pixels 
let squaresTotal = 64;

// generate pixels 
function generatePixels() {
  let squareWidthHeight = width / squaresTotal;
  console.log("WIDTH: " + squareWidthHeight);

  // Create and append squares to the container
  for(let i = 0; i < squaresTotal * squaresTotal; i++) {
    let square = document.createElement("div");

    square.style.width = `${squareWidthHeight}px`;
    square.style.height = `${squareWidthHeight}px`;
    square.classList.add("square");

    square.addEventListener("mouseover", () => {
      if(leftClick == true) { square.style.backgroundColor = "black";}
    });

    sketchContainer.appendChild(square);
  }
}

// initial generation
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


