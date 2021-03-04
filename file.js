
// функція додавання
function plus () {
    document.getElementById('Result').innerHTML =
    'Result: ' + (parseInt(document.getElementById('n1').value) + parseInt(document.getElementById('n2').value));
}

// функція віднімання
function minus() {
    document.getElementById('Result').innerHTML =
    'Result:' + (parseInt(document.getElementById('n1').value)-parseInt(document.getElementById('n2').value));
}

// множення 
 function multiply() {
    document.getElementById('Result').innerHTML = 
    'Result:' + (parseInt(document.getElementById('n1').value)*parseInt(document.getElementById('n2').value));
}

 // ділення 
 function divide() {
    if (document.getElementById('n2').value == '0') {
        document.getElementById('Result').innerHTML = 'You can\'t divide by 0';
        return;
    }
    document.getElementById('Result').innerHTML =
        "Result: " + (parseInt(document.getElementById('n1').value) / parseInt(document.getElementById('n2').value));
}


