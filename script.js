// fetching the elements from the arrows
const dateEl = document.getElementById("date")
const monthEl = document.getElementById("month")
const yearEl = document.getElementById("year")

// get the system date,month and year
const calender = new Date();


let date = calender.getDate();
let month = calender.getMonth();
let year = calender.getFullYear();

// initialize a array of months to get the month in string
var mont = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

// set the date ,month and year
dateEl.innerText = date;
monthEl.innerText = mont[month];
yearEl.innerText = year;

// fetching the week element
const weekEl = document.getElementById("week");

// initialize a week array
const week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

// get the day
let day = calender.getDay();

// set the week of day

weekEl.innerText = week[day];

// fetching the minute second and hour elements from the arrows
const secondsEl = document.querySelector(".second");
const minutesEl = document.querySelector(".minute");
const hoursEl = document.querySelector(".hour");

// fetching the digital elements
const digihEl = document.getElementById("left");
const digimEl = document.getElementById("middle");
const digisEl = document.getElementById("right");

function updateClock()
{
   
    let s = new Date().getSeconds();
    let m = new Date().getMinutes();
    let h = new Date().getHours();
    
    const hourdeg = (h/12)*360;
    hoursEl.style.transform = `rotate(${hourdeg}deg )`;

    const mindeg = (m/60)*360;
    minutesEl.style.transform = `rotate(${mindeg}deg )`;

    const secdeg = (s/60)*360;
    secondsEl.style.transform = `rotate(${secdeg}deg )`;
    
    digihEl.innerText = h-12 ;
    digisEl.innerText = s ;
    digimEl.innerText = m;

    setTimeout(()=>{
        updateClock();
    },1000)
}

updateClock();