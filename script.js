// day and month array-->
const monthName = ['January', 'Febuary','March','April','May', 'June','July','August','September','October','November','December'];
const dayName = ['Satur','Sun','Mon','Tues','Wednes','Thurs','Fri','Satur','Sun'];


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
  var dayNo = serverTime.getDate();
  var month = serverTime.getMonth();
  var year = serverTime.getFullYear();

// updating values according to the city
let updatedValues = cityTime();
var minutes = min + updatedValues[1];
var hours = hour + updatedValues[0];

// checking the hr and min to be adjusted between the required params
// and to set the day if any changes required
if(minutes<0){
  minutes = 60 + minutes;
  hours -= 1;
}else if(minutes>60){
  minutes = minutes -60;
  hours += 1;
}
if(hours>24){
  hours = hours -24;
  day += 1;
}else if(hours<0){
  hours = hours + 24;
  day-= 1;
}

// manipulating the data retrieved from Date(Obj)-->
  var centiseconds = parseInt(milliseconds/100);


  var hourFor = 0;

 // 12/24 hrs format and display of the meridian 
  if(value === true){
    document.getElementById('meridian').innerText = hours>11 ? 'PM' : 'AM';
    document.getElementById('meridian').style.backgroundColor = hours>11 ? 'blue' : 'white';
    document.getElementById('meridian').style.color = hours>11 ? 'white' : 'blue';
    document.getElementById('meridian').style.display='inline';
    document.getElementById('toggleHrs').innerText='Change to 24Hr';
    hourFor = hours >12 ? hours-12:hours;
  }else{
    hourFor = hours;
    document.getElementById('meridian').innerText ='';
    document.getElementById('meridian').style.display='none';
    document.getElementById('toggleHrs').innerText='Chnage to 12Hr'; 
  }


//rest parameters
  document.getElementById('hr').innerText = hourFor>9 ? hourFor:'0'+hourFor;
  document.getElementById('min').innerText = minutes>9 ? minutes:'0'+minutes ;
  document.getElementById('sec').innerText = seconds>9 ? seconds:'0'+seconds ;
  document.getElementById('centiseconds').innerText = '.' + centiseconds;
  document.getElementById('year').innerText = year;
  document.getElementById('month').innerText = monthName[month]+',';
  document.getElementById('day').innerText = dayName[day+1]+'day,';

// displaying date for india only  
  if(document.getElementById('city').value==='india'){
    document.getElementById('dayNo').innerText = dayNo
  }else {
    document.getElementById('dayNo').innerText = '';
  }
};


setInterval(updateTime,100);

//function for viewing other time zones
// india has +5:30 with GMT 
// refernce is india

// we can add more cities for our list right here

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

