let count = 0;

const COUNTERDISPLAY = document.getElementById('counter');
const INCREMENTBUTTON = document.getElementById('increment');
const DECREMENTBUTTON = document.getElementById('decrement');


INCREMENTBUTTON.addEventListener('click', ()=>{
    count++;
    COUNTERDISPLAY.textContent = count;
})

DECREMENTBUTTON.addEventListener('click', ()=>{
    count--;
    COUNTERDISPLAY.textContent = count;
})
