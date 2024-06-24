function getTimeDate(){
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let year = dateTime.getFullYear();
    document.getElementById("date").innerHTML = year;
    document.getElementById("hr").innerHTML = padZero(hr);
    document.getElementById("min").innerHTML = padZero(min);
    document.getElementById("sec").innerHTML = padZero(sec);
    if(hr > 12){
        hr = hr - 12;
        document.getElementById("ampm").innerHTML = "PM";
    }
}
function padZero(num){
    if(num < 10){
        return "0" + num;
    }
    return num;
}
setInterval(getTimeDate,500);