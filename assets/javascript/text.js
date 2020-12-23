var i = 0;
function textType() {
    if (i < txt.length) {
        document.getElementById("host").innerHTML += txt.charAt(i);
        i++;
        setTimeout(textType, 180);
    } else {
        done();
    }
}