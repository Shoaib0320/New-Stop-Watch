var hours = 00;
var minutes = 00;
var seconds = 00;
var milliseconds = 00;

var h = document.querySelector("#hours");
var m = document.querySelector("#minutes");
var s = document.querySelector("#seconds");
var ms = document.querySelector("#milliseconds");
var start = document.querySelector("#startBtn");
var stop = document.querySelector("#stopBtn");
var reset = document.querySelector("#resetBtn");
let interval;

function startTimer(){
  
  milliseconds++;
//Add 0 before millisecond count under 10
  if (milliseconds < 10){
    ms.innerHTML = "0" + milliseconds;
  }
//Remove 0 above 10
  if (milliseconds > 10){
    ms.innerHTML = milliseconds;
  }
//Add a second, reinitiate millisecond count 
  if (milliseconds > 99){
    seconds++;
    s.innerHTML = seconds;
    milliseconds = 0;
    ms.innerHTML = "0" + 0;
  }
//Add 0 before second count under 10
  if (seconds < 10){
    s.innerHTML = "0" + seconds;
  }
//Remove 0 above 10
  if (seconds > 10){
    s.innerHTML = seconds;
  }
//Add a minute, reinitiate second count   
  if (seconds > 59){
    minutes++;
    m.innerHTML = minutes;
    seconds = 0;
    s.innerHTML = "0" + 0;
  }
 //Add 0 before minute count under 10 
  if (minutes < 10){
    m.innerHTML = "0" + minutes;
  }
 //Remove 0 above 10
  if (minutes > 10){
    m.innerHTML = minutes;
  }
 //Add a hour, reinitiate minute count 
  if (minutes > 59){
    hours++;
    h.innerHTML = hours;
    minutes = 0;
    m.innerHTML = "0" + 0;
  }
 //Add 0 if hour under 10
    if (hours < 10) {
    h.innerHTML = "0" + hours;
  }
}

start.addEventListener('click', function(){
  clearInterval(interval);
  var oneSecond = 10;
  interval = setInterval( startTimer, oneSecond);
})

stop.addEventListener('click', function(){
  clearInterval(interval);
});

reset.addEventListener('click', function(){
  clearInterval(interval);
  hours = 00;
  minutes = 00;
  seconds = 00;
  milliseconds = 00;
  h.innerHTML = "0" + hours;
  m.innerHTML = "0" + minutes;
  s.innerHTML = "0" + seconds;
  ms.innerHTML = "0" + milliseconds;
  
})
