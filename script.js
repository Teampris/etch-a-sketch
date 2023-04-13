const container = document.getElementById('container');
const randomColor = () => Math.floor(Math.random() * 256);
for(let i = 1 ; i <= 16 ; i++) {
    for(let j = 1 ; j <= 16 ; j++) {
        pixel = document.createElement('div');
        pixel.setAttribute('id', `${i};${j}`);
        pixel.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        pixel.style.width = '16px';
        pixel.style.height = '16px';
        container.appendChild(pixel);
        console.log(pixel.id);

    }
}
