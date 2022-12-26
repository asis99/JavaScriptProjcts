
var sec=0;
var min=0;
var hour=0;
var start_stop=true;
function Start_timer(){
    if (start_stop==false){
    sec++;
    if (sec<=9){
        sec="0"+parseInt(sec);
    }else{
        sec=sec;
    }
    if (sec==60){
        min++
        sec=0;
    }
    if (min <= 9){
        min="0"+parseInt(min);
    }else{
        min=min;
    }
    if (min==60){
        hour++
        min=0;
    }
    if (hour <= 9){
        hour="0"+parseInt(hour);
    }else{
        hour=hour;
    }
    document.getElementById("hr").innerHTML=hour;
    document.getElementById("min").innerHTML=min;
    document.getElementById("sec").innerHTML=sec;
    setTimeout("Start_timer()", 1000);
    }
}
function Start(){
    if(start_stop==true){
        start_stop=false;
        Start_timer();
    }
}
function Stop(){
    start_stop=true;
}

function Reset(){
   hour="00";
   sec="00";
   min="00";
   document.getElementById("hr").innerHTML=hour;
   document.getElementById("min").innerHTML=min;
   document.getElementById("sec").innerHTML=sec;
}
