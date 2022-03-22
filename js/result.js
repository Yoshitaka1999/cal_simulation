'use strict'

window.onload = function(){
    var data = location.href.split("?")[1];
    var cost = Number(data.split("=")[1].replace(/[^0-9]/g, ''));
    var client = Number(data.split("=")[2].replace(/[^0-9]/g, ''));
    var churn_rate = Number(data.split("=")[3]);

    function getImprovedrate() {
        if (0.1 <= churn_rate && churn_rate <= 1) {
            return (churn_rate - 0.1);
        } else {
            return (churn_rate - 1);
        }
    }

    var improve_rate = getImprovedrate();
    
    document.querySelector(".currentMRR").innerHTML = (client * cost * (churn_rate * 0.01)).toLocaleString();
    document.querySelector(".currentARR").innerHTML = (client * cost * (churn_rate * 0.01) * 12).toLocaleString();
    document.querySelector(".improvedMRR").innerHTML = (client * cost * (improve_rate * 0.01)).toLocaleString();
    document.querySelector(".improvedARR").innerHTML = (client * cost * (improve_rate * 0.01) * 12).toLocaleString();
}