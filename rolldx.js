var current_sum = 0;

function roll(d) {
    return Math.ceil(Math.random()*d);
}

function roll_event(e) {
    if (e.target.tagName != "BUTTON")
        return false;
    
    var d = e.target.dataset.die*1;

    const out = document.querySelector('#output');

    if (current_sum > 0)
        out.value += '+ ';

    var result = roll(d);
    current_sum += result;

    out.value += result + '[d' + d + '] ';
}

function clear() {
    current_sum = 0;
    document.querySelector('#output').value = '';
}

function equals() {
    if (current_sum == 0)
        return false;
    
    const out = document.querySelector('#output');
    out.value += '= ' + current_sum + '\n';
    current_sum = 0;
}

document.addEventListener("DOMContentLoaded", function() {
    console.log('loaded');

    document.querySelector('#roll-buttons').addEventListener('click', roll_event);
    document.querySelector('#clear').addEventListener('click', clear);
    document.querySelector('#equals').addEventListener('click', equals);
});
