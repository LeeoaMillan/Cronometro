var hour = document.getElementById('hour').innerText;
var minute = document.getElementById('minute').innerText;
var second = document.getElementById('second').innerText;
var cron;
function start (){
    pause();
    cron = setInterval (() => {timer (); }, 1);
}

function pause (){
    clearInterval(cron);
}

function reset (){

}

function timer (){

    if (second == 60){
        second = 0;
        minute ++;

    }
    if (minute == 60){
        minute = 0;
        hour ++;
    }
}
document.getElementById('second').innerText = data(second);


function data (input){
    return input;
}