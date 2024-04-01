var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var t;
setInterval(digit, 1000);
function digit() {
    if (s == 60) {
        m++;
        s = 0;
        if (m == 60) {
            h++;
            m = 0;
            if (h == 24) {
                h = 0;
            }
        }
    }
    s++;
    document.getElementById("hour").innerText = h;
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;
}
if (h > 12 && h < 24) {
    h = h - 12;
    t = "PM";
}
else if (h == 24) {
    h = 0;
    t = "AM";
}
else if (h == 12) {
    h = 12;
    t = "PM";
}
else {
    t = "AM";
}

if (h < 10) {
    h = "0" + h
}
document.getElementById("hour").innerText = h;
document.getElementById("minute").innerText = m;
document.getElementById("second").innerText = s;
document.getElementById("AP").innerText = t;
//Fatemeh Madihi
