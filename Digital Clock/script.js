function digitalClock() {

  var date = new Date();
  var hours = date.getHours() + '';
  var minutes = date.getMinutes() + '';
  var seconds = date.getSeconds() + '';
  var day = date.getDay();

  if(hours < 2) {
    hours = '0' + hourse;
  } 

  if(minutes < 2) {
    minutes = '0' + minutes;
  }

  if(seconds < 2) {
    seconds = '0' + seconds;
  } 

  var weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] 
   
  var clock = weekDays[day] + ' ' + hours + ':' + minutes + ':' + seconds;

  document.getElementById("clock").innerHTML = clock;
  
}

digitalClock();

setInterval(digitalClock, 1000);