'use strict'

const submit = document.getElementById("sendButton");
const form = document.getElementById("form");

submit.addEventListener('click', (e) => {
    e.preventDefault();

    const cost = document.getElementById('cost');
    const errMsgCost = document.querySelector('.err-msg-cost');
    if(!cost.value.match(/(?!0+$)^[0-9]+$/)) {
        errMsgCost.classList.add('form-invalid');
        errMsgCost.textContent = '空欄もしくは入力に誤りがあります';
        cost.classList.add('input-invalid');
        return;
    } else {
        errMsgCost.textContent ='';
        cost.classList.remove('input-invalid');
    }

    const client = document.getElementById('client');
    const errMsgClient = document.querySelector('.err-msg-client');
    if(!client.value.match(/(?!0+$)^[0-9]+$/)) {
        errMsgClient.classList.add('form-invalid');
        errMsgClient.textContent = '空欄もしくは入力に誤りがあります';
        client.classList.add('input-invalid');
        return;
    } else {
        errMsgClient.textContent ='';
        client.classList.remove('input-invalid');
    }

    const churn_rate = document.getElementById('churn_rate');
    const errMsgRate = document.querySelector('.err-msg-churn-rate');
    if(!churn_rate.value.match(/(?!0+$)^([1-9]\d*|0)(\.\d{1})?$/)) {
        errMsgRate.classList.add('form-invalid');
        errMsgRate.textContent = '空欄もしくは入力に誤りがあります';
        churn_rate.classList.add('input-invalid');
        return;
    } else {
        errMsgRate.textContent ='';
        churn_rate.classList.remove('input-invalid');
    }

    form.method = "GET";
    form.action = "result.html";
    form.submit();
})

    
