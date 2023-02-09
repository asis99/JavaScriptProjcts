var bo=document.getElementById("body");
//.........................ADDING DARK MODE...................................
bo.addEventListener("click", function(){   
    bo.style.backgroundColor="black";
    bo.style.color="white";
});

bo.addEventListener("dblclick", function(){
    bo.style.backgroundColor="white";
    bo.style.color="black";
});
//.........................ADDING DARK MODE...................................
//.........................ADDING FUNCTION TO CHECK INTERNET CONNECTIVITY...................................
window.addEventListener("offline", function(){
    // this.setTimeout("offline()", 2000);
    offline();
})

window.addEventListener("online", function(){
    // this.setTimeout("online()", 2000);
    online();
})

function online(){
    var h1=document.getElementById("onoff");
    h1.style.backgroundColor="#3cb371";
    h1.innerHTML="Back online";
    setTimeout(() => {
        h1.innerHTML = null;
      }, 2000);
      
}
function offline(){
    var h1=document.getElementById("onoff");
    h1.style.backgroundColor="#0000ff";
    h1.innerText="No internet connection";
    setTimeout(() => {
        h1.innerHTML = null;
      }, 4000000);
}
//.........................ADDING FUNCTION TO CHECK INTERNET CONNECTIVITY...................................
