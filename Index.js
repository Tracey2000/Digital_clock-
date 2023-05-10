const  hourE1 = document.getElementById("Hours");
const  minutesE1 = document.getElementById("Minutes");
const  secondsE1 = document.getElementById("Seconds");
const  amPmE1 = document.getElementById("AmPm");

function updateClock(){
     let h = new Date().getHours()
     let m = new Date().getMinutes()
     let s = new Date().getSeconds()
     let ampm = "AM"
    
     if(h>12){
      h = h - 12;
        ampm = "Pm"
     }
     hourE1.innerHTML = h;
     minutesE1.innerHTML = m;
     secondsE1.innerHTML = s;
    amPmE1.innerHTML = ampm;
    setTimeout(() => {
        updateClock();
    }, 1000);

}

updateClock()