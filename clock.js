// 12 hour = 360deg
// 1hour =360/12=30
// h hours = 30h+m/2


// 60 min=30deg
// 1min =30/60=1/2
// m min= m/2

// 60 min =360 deg
// 1min =360/60 = 6 deg
// m min =6 m

// 60 sec =360deg
// 1sec =360/60 =6deg
// s sec =6s


let hr= document.getElementById('hour');
let min= document.getElementById('min');
let sec= document.getElementById('sec');

function displayTime(){
     let date= new Date();

     // etting hour, mins,secs from date
     let hh= date.getHours();
     let mm=date.getMinutes();
     let ss= date.getSeconds();

     let hRotation = 30*hh + mm/2;
     let mRotation =6*mm ;
     let sRotation =6*ss;

     hr.style.transform=`rotate(${hRotation}deg)`;
     min.style.transform=`rotate(${mRotation}deg)`;
     sec.style.transform=`rotate(${sRotation}deg)`;
}

setInterval(displayTime,1000);