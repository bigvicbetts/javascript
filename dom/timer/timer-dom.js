console.log("time to start the timer!");

let mins;
let ones;
let tens;

function reset() {
    mins = 0;
    ones = 0;
    tens = 0;
}

function startTimer() {
    console.log(mins, tens, ones);
    ones ++;
    if (ones > 9) {
        ones = 0;
        tens ++;
    }

    if (tens > 5) {
        tens = 0;
        mins ++
    }
    document.getElementById('digits').textContent = mins + ':' + tens + ones;  
}

reset();

document.getElementById('start').addEventListener('click', function() {
    timer = setInterval(startTimer, 1000);
});

document.getElementById('stop').addEventListener('click', function() {
    clearInterval(timer);
    document.getElementById('digits').textContent = mins + ':' + tens + ones;
});

document.getElementById('reset').addEventListener('click', function () {
    clearInterval(timer);
    reset();
    document.getElementById('digits').textContent = mins + ':' + tens + ones;
});