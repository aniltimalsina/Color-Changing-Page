
const btn = document.querySelector('button');
const colorDiv = document.querySelector('#color-box');
let newP = document.createElement('p');

btn.addEventListener('click', function() {
    let x = Math.floor(Math.random() * 256 + 1);
    let y = Math.floor(Math.random() * 256 + 1);
    let z = Math.floor(Math.random() * 256 + 1);
    colorDiv.setAttribute('style', `background:rgb(${x},${y},${z})`); 
    //colorDiv.setAttribute('class', 'remove-border');
    let text = document.createTextNode(`rgb(${x},${y},${z})`);
    newP.textContent = '';
    newP.appendChild(text);
    colorDiv.appendChild(newP);
    newP.setAttribute('class', 'text-handle');     
});

let bodyElmt = document.querySelector('body');
bodyElmt.addEventListener('mousemove', mouseEvent);

function mouseEvent(e) {
    let b = Math.floor(Math.random() * 256 + 1);
    bodyElmt.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, ${b})`;
}


