'use strict'

window.onload = function(){
    var data = location.href.split("?")[1];
    var client = Number(data.split("=")[1].replace(/[^0-9]/g, ''));
    var cost = Number(data.split("=")[2].replace(/[^0-9]/g, ''));
    var churn_rate = Number(data.split("=")[3]);

    function getImprovedrate() {
        if (0.1 <= churn_rate && churn_rate < 1) {
            return (churn_rate - 0.1);
        } else {
            return (churn_rate - 1);
        }
    }

    var improve_rate = getImprovedrate();
    
    document.getElementById("currentMRR").innerHTML = (client * cost * (churn_rate * 0.01));
    document.getElementById("currentARR").innerHTML = (client * cost * (churn_rate * 0.01) * 12);
    document.getElementById("MRR").innerHTML = (client * cost * (improve_rate * 0.01));
    document.getElementById("ARR").innerHTML = (client * cost * (improve_rate * 0.01) * 12);
}