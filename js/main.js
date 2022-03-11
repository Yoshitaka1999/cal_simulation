'use strict'

{
    function getValue1() {
        return Number(document.querySelector("#value1"));
    }
    function getValue2() {
        return Number(document.querySelector("#value2"));
    }
    function getValue3() {
        return Number(document.querySelector("#value3"));
    }

    document.getElementById('cal').addEventListener('click',
        function() {
            let value1 = getValue1();
            let value2 = getValue2();
            let value3 = getValue3();
            document.getElementById('total') = (value1 * value2 * value3);
        }
    )
}