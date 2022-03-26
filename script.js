const serverTime = new Date();
console.log(serverTime);

// storing data from the Date Obj
const hours = serverTime.getHours();
const minutes = serverTime.getMinutes();
const seconds = serverTime.getSeconds();
const milliseconds = serverTime.getMilliseconds();
const day = serverTime.getDay();
const month = serverTime.getMonth();
const year = serverTime.getFullYear();

// manipulating the data retrieved from Date(Obj)-->
const monthName = ['January', 'Febuary','March','April','May', 'June','July','August','September','October','November','December'];
const dayName = ['Sun','Mon','Tues','Wednes','Thurs','Fri','Satur'];
const centiseconds = parseInt(milliseconds/100);
let hourFor = hours >12 ? hours-12:hours;;


// update time function
function updateTime(){
  document.getElementById('hr').innerText = hourFor>9 ? hourFor:'0'+hourFor;
  document.getElementById('min').innerText = minutes>9 ? minutes:'0'+minutes ;
  document.getElementById('sec').innerText = seconds>9 ? seconds:'0'+seconds ;
  document.getElementById('centiseconds').innerText = '.' + centiseconds;
  document.getElementById('year').innerText = year;
  document.getElementById('month').innerText = monthName[month]+',';
  document.getElementById('day').innerText = dayName[day]+'day,';
  document.getElementById('meridian').innerText = hours>11 ? 'PM' : 'AM';
}

updateTime();


// function for switching between 12hrs/24hrs format
let value = true;
function toggleHrs(){
    if(value === true) {
        value = false;
        hourFor = hours;
        document.getElementById('hr').innerText = hourFor>9 ? hourFor:'0'+hourFor;
    }
    else {
        value = true;
        hourFor = hours >12 ? hours-12:hours;
        document.getElementById('hr').innerText = hourFor>9 ? hourFor:'0'+hourFor;
    }
    
};

//function for viewing other time zones
function changeTimeZone(){

};



