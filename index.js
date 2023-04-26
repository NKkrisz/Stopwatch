const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const milsecond = document.querySelector(".milsecond");

hour.value = 0;
minute.value = 0;
second.value = 0;
milsecond.value = 0;

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
    if(second.value == 60 && mode == "normal"){
        minute.value = +minute.value + 1;
    } else if(second.value == 60 && mode == "minuteMode"){
        stop();
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

let mode = "normal";
const modeHTML = document.querySelector(".mode");

function setMode(){
    if(mode == "normal"){
        mode = "minuteMode";
        modeHTML.style.backgroundColor="green";
    }else{
        mode = "normal";
        modeHTML.style.backgroundColor="white";
    }
}