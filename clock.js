const clockContainer = document.querySelector(".js-clock")
, clockTitle = document.querySelector("#title")

function init() {
    getTime();
    setInterval(getTime,1000);
}

function getTime(){
    const date = new Date();
    const year = date.getFullYear();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    //alert(year + " " +hour + ":" + min);
    //clockTitle.innerText = hour + ":" + min + ":" +sec;
    clockTitle.innerText = `${hour}:${min < 10 ? `0${min}` : `${min}`}:${sec < 10 ? `0${sec}` : `${sec}`}`;
}

init();