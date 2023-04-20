const container = document.getElementById('container');
const randomColor = () => Math.floor(Math.random() * 256);
const blackButton = document.getElementById('btn-1')
const eraseButton = document.getElementById('btn-2')
const rainbowButton = document.getElementById('btn-3')

let currentFunction = 'black';

function setFunction(event) {
    currentFunction = event.target.dataset.function;
  }

for(let i = 1 ; i <= 16 ; i++) {
    for(let j = 1 ; j <= 16 ; j++) {
        const pixel = document.createElement('div');
        pixel.setAttribute('id', `${i};${j}`);
        pixel.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        pixel.style.width = '16px';
        pixel.style.height = '16px';
        container.appendChild(pixel);
        console.log(pixel.id);
        pixel.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'black';
        });
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

blackButton.addEventListener('click', setFunction);
eraseButton.addEventListener('click', setFunction);
rainbowButton.addEventListener('click', setFunction);

container.addEventListener('mouseover', handleHover);