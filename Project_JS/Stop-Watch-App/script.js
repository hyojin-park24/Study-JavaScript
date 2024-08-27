appendSeconds = document.getElementById('seconds');
appendTens = document.getElementById('tens');
btnStart = document.getElementById('button-start');
btnStop = document.getElementById('button-stop');
btnReset = document.getElementById('button-reset');

let seconds = 0;
let tens = 0;
let interval = null;

btnStart.onclick = function(){
    if(interval === null){
        interval = setInterval(startTimer, 10);
    }
}

btnStop.onclick = function(){
    clearInterval(interval);
    interval = null;
}

btnReset.onclick = function() {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    tens = 0;

    appendSeconds.innerText = seconds;
    appendTens.innerText = tens;
}

function startTimer(){
    tens++;

    if(tens > 99){
        seconds++;
        appendSeconds.innerText = seconds;

        tens = 0;
        appendTens.innerText = tens;
    }
    else {
        appendTens.innerText = tens;
    }
}