var tablinks = document.getElementsByClassName ("tab-link");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab (tabname) {
    for (tablink of tablinks){
        tablink.classList.remove("active");
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active");
}

var nav = document.getElementById("nav");

function openmenu(){
    nav.style.right = "0";
}
function closemenu(){
    nav.style.right = "-200px";
}