'use strict'

{
    function getClient() {
        return Number(document.querySelector("#client").value);
    }
    function getCost() {
        return Number(document.querySelector("#cost").value);
    }
    function getChurnrate() {
        let rate = Number(document.querySelector("#churn_rate").value);
        if (0.1 <= rate) {
            return rate;
        }
    }
    function getImprovedrate() {
        let rate = Number(document.querySelector("#churn_rate").value);
        if (0.1 <= rate && rate < 1 )　{
            return (rate - 0.1);
        } else {
            return (rate - 1);
        }
    }



    document.getElementById('cal').addEventListener('click', 
        function() {
            let client = getClient();
            let cost = getCost();
            let churn_rate = getChurnrate();
            let improved_rate = getImprovedrate();

            document.getElementById('currentMRR').value = (client * cost * (churn_rate * 0.01));
            document.getElementById('currentARR').value = (client * cost * (churn_rate * 0.01) * 12);
            document.getElementById('MRR').value = (client * cost * (improved_rate * 0.01));
            document.getElementById('ARR').value = (client * cost * (improved_rate * 0.01) * 12);
        }
    )
}

