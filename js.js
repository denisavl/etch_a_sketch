const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const valueSlider = document.querySelector('.value');
const valueSlider1 = document.querySelector('.value1');
const clean = document.querySelector('.clean');
const rainbow = document.querySelector('.rainbow');
const colorPicker = document.querySelector('.colorPicker');


function createDefaultGrid() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const divs = document.createElement("div");
      divs.className = "divs";
      container.appendChild(divs);

      divs.addEventListener("mousemove", () => {
        divs.style.backgroundColor = "#ADD8E6";
      });
    }
  }
}

window.addEventListener('load', createDefaultGrid);

function clear_all(){
  const divs = document.querySelectorAll(".divs");
  divs.forEach((div)=>{
    div.style.backgroundColor = "transparent";
  })
}

function random_bg_color(){
  const divs = document.querySelectorAll(".divs");
  divs.forEach((div)=>{
    div.addEventListener('mousemove',()=>{
      let x = Math.floor(Math.random() * 256);
      let y = Math.floor(Math.random() * 256);
      let z = Math.floor(Math.random() * 256);
      let bgColor = "rgb(" + x + "," + y + "," + z + ")";
      div.style.backgroundColor = bgColor;
    })
  })
}

  colorPicker.addEventListener('input', (event) => {
    const color = event.target.value;
    const divs = document.querySelectorAll(".divs");
    divs.forEach((div)=>{
      div.addEventListener('mousemove',()=>{
      div.style.backgroundColor = color;
    })
  });
})

//new grid

function select_grid_size(){
  const divs = document.querySelectorAll(".divs");
  divs.forEach((div)=>{
    div.parentNode.removeChild(div);
  })
  let gridSize = prompt("Enter the size of the grid you want: ");
  if(Number(gridSize) !== null && Number.isInteger(+Number(gridSize)) && Number(gridSize) >= 1 && Number(gridSize) <= 64 && !(isNaN(gridSize))) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;  
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const divs = document.createElement('div');
      divs.className = "divs";
      container.appendChild(divs);
      divs.addEventListener("mousemove", () => {
        divs.style.backgroundColor = "#ADD8E6";
      });

    }
  }
  }
  else {
    alert("Enter a valid number between 1 and 64.");
  }
}



