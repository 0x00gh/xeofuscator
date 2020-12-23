function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (seconds === 33) {
        document.getElementById("host").onclick = function () { location.href = '/login' }
    } else {
        document.getElementById("host").onclick = function () { }
    }
    var t_str = hours + ":" + minutes + ":" + seconds;
    document.getElementById("time").innerHTML = t_str;
}

setInterval(updateTime, 100);