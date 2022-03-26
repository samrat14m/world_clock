// day and month array-->
const monthName = ['January', 'Febuary','March','April','May', 'June','July','August','September','October','November','December'];
const dayName = ['Sun','Mon','Tues','Wednes','Thurs','Fri','Satur'];


// function for switching between 12hrs/24hrs format
var value = true;
function toggleHrs(){
    if(value === true) {
        value = false;
    }else {
        value = true;
    }   
}; 

// update time function
function updateTime(){

  const serverTime = new Date();

// storing data from the Date Obj
  var hour = serverTime.getHours();
  var min = serverTime.getMinutes();
  var seconds = serverTime.getSeconds();
  var milliseconds = serverTime.getMilliseconds();
  var day = serverTime.getDay();
  var month = serverTime.getMonth();
  var year = serverTime.getFullYear();

// updating values according to the city
let updatedValues = cityTime();
var hours = hour + updatedValues[0];
var minutes = min + updatedValues[1];

// manipulating the data retrieved from Date(Obj)-->
  var centiseconds = parseInt(milliseconds/100);


  var hourFor = 0;

 // 12/24 hrs format and display of the meridian 
  if(value === true){
    document.getElementById('meridian').innerText = hours>11 ? 'PM' : 'AM';
    document.getElementById('meridian').style.display='inline';
    document.getElementById('toggleHrs').innerText='24 Hr';
    hourFor = hours >12 ? hours-12:hours;
  }else{
    hourFor = hours;
    document.getElementById('meridian').innerText ='';
    document.getElementById('meridian').style.display='none';
    document.getElementById('toggleHrs').innerText='12 Hr'; 
  }

  document.getElementById('hr').innerText = hourFor>9 ? hourFor:'0'+hourFor;
  document.getElementById('min').innerText = minutes>9 ? minutes:'0'+minutes ;
  document.getElementById('sec').innerText = seconds>9 ? seconds:'0'+seconds ;
  document.getElementById('centiseconds').innerText = '.' + centiseconds;
  document.getElementById('year').innerText = year;
  document.getElementById('month').innerText = monthName[month]+',';
  document.getElementById('day').innerText = dayName[day]+'day,'; 
};


setInterval(updateTime,100);

//function for viewing other time zones
// india has +5:30 with GMT 
// refernce is india
function cityTime(){
  const city = document.getElementById('city').value
  switch(city){
    
    case 'india': return [0,0];
    case 'london': return [-5,-30];
    case 'beijing': return[3, 0];
    case 'paris': return[-4,-30];
    case 'new_york': return [-9,-30];        
  }
};



