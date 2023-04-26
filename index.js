const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const milsecond = document.querySelector(".milsecond");

//let clock = [hour.value, minute.value, second.value, milsecond.value];

let timer = null;

function start(){
    timer = null;

    timer = setInterval(run, 10);
}

function run(){
    milsecond.value =  +milsecond.value + 10;
    
    if(milsecond.value == 1000){
        second.value = +second.value + 1;
        milsecond.value = 0;
    }
    if(second.value == 60){
        minute.value = +minute.value + 1;
    }
    if(minute.value == 60){
        hour.value = +hour.value + 1;
    }
}

function stop(){
    clearInterval(timer);
    timer = null;
}

function reset(){
    stop();
    hour.value = 0;
    minute.value = 0;
    second.value = 0;
    milsecond.value = 0;
}