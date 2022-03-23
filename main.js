window.addEventListener("load", tellTime)
function tellTime() {
    var date = new Date();
    var dayNum = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var green = hour > 12 ? "PM": "AM"; 
    var daysOfTheWeek = ["SUN","MON","TUE","WED","THUR","FRI","SAT"]
    
    hour = hour % 12 ;
    hour = hour ? 12: "12" ;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;


    document.getElementById("day").innerHTML = daysOfTheWeek[dayNum];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("green").innerHTML = green;

    setTimeout(tellTime, 200);
}
