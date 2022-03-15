'use strict'

window.onload = function(){
    var data = location.href.split("?")[1];
    var text = data.split("=")[1];
    document.getElementById("currentMRR").innerHTML = decodeURIComponent(text);
    document.getElementById("currentARR").innerHTML = decodeURIComponent(text);
    document.getElementById("MRR").innerHTML = decodeURIComponent(text);
    document.getElementById("ARR").innerHTML = decodeURIComponent(text);
}