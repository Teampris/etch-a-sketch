const container = document.getElementById('container');
const randomColor = () => Math.floor(Math.random() * 256);
const blackButton = document.getElementById('btn-1');
const eraseButton = document.getElementById('btn-2');
const rainbowButton = document.getElementById('btn-3');
const sizeButton = document.getElementById('size');

let canvasSize = 16;

let currentFunction = 'black';

function setFunction(event) {
    currentFunction = event.target.dataset.function;
  }


function createCanvas() {
  for(let i = 1 ; i <= canvasSize ; i++) {
    for(let j = 1 ; j <= canvasSize ; j++) {
      const pixel = document.createElement('div');
      pixel.setAttribute('id', `${i};${j}`);
      pixel.style.backgroundColor = 'white';
      pixel.style.width = `${256/canvasSize}px`;
      pixel.style.height = `${256/canvasSize}px`;
      container.appendChild(pixel);
      console.log(pixel.id);
      pixel.addEventListener('mouseover', function() {
          this.style.backgroundColor = 'black';
      });
    }
  }
}

function deleteCanvas() {
  const canvasPixels = document.querySelectorAll('#container div');
  for (let i = 0; i < canvasPixels.length; i++) {
    canvasPixels[i].remove();
  }
}

function handleHover(event) {
    if (currentFunction === 'black') {
      event.target.style.backgroundColor = 'black';
    } else if (currentFunction === 'erase') {
      event.target.style.backgroundColor = 'white';
    } else if (currentFunction === 'rainbow') {
      const randomColor = () => Math.floor(Math.random() * 256);
      event.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    }
  }

function setSize(event) {
  canvasSize = prompt('set size of canvas up to 100 pixels');
  deleteCanvas();
  createCanvas();
}

blackButton.addEventListener('click', setFunction);
eraseButton.addEventListener('click', setFunction);
rainbowButton.addEventListener('click', setFunction);

container.addEventListener('mouseover', handleHover);

sizeButton.addEventListener('click', setSize);

createCanvas();