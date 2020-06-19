// Select pixelCanvas
const canvas = document.getElementById("pixelCanvas");
// Select color input
let colorInput = document.getElementById("colorPicker");
// // Select size input
let hInput = document.getElementById("inputHeight");
let wInput = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid()
const size = document.getElementById("sizePicker");
size.addEventListener("submit", function(event){
  event.preventDefault();
  reset();
  makeGrid(hInput.value, wInput.value);
  changeColor();
});

// When "Choose for me" is clicked, randomly create canvas and choose color
const idk = document.getElementById("idk")
idk.addEventListener("click",function(event){
  event.preventDefault();
  reset();
  random();
  makeGrid(ranHInput, ranWInput);
  changeColor();
})

// Create canvas based on user input
function makeGrid(height, width){
  for(let i = 1; i <= height; i++){
    const row = canvas.insertRow(-1);
    for(let j = 1; j <= width; j++){
      const cell = row.insertCell(-1);
    }
  }
}

// Reset canvas
function reset(){
  var tr = document.getElementsByTagName("tr");
  for(let i = tr.length - 1; i >= 0; i--){
    tr[i].remove();
  }
  colorInput = document.getElementById("colorPicker");
}

// Change paint color based on user selection
function changeColor(){
  const td = document.getElementsByTagName("td");
  for(let i = 0; i < td.length; i++){
    td[i].addEventListener("click", function(){
      if(this.style.backgroundColor === ""){
        this.style.backgroundColor = colorInput.value;
      } else{
        this.style.backgroundColor = "";
      }
    });
  }
}

// Randomly choose a canvas and color
function random(){
  // Height and width max set to 30
  ranHInput = Math.floor(Math.random() * 30) + 1;
  ranWInput = Math.floor(Math.random() * 30) + 1;
  colorInput.value = ranColor();
}

// Randomly choose a color number with hex format
function ranColor(){
  const letters = "0123456789ABCDEF"
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[(Math.floor(Math.random() * 16))];
  }
  return color;
}
