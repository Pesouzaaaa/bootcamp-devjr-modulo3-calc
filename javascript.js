function calc(op){

    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var output = 0;

    switch(op){
        case '+' : output = n1 + n2; break;
        case '-' : output = n1 - n2; break;
        case '*' : output = n1 * n2; break;
        case '/' : output = n1 / n2; break;
    }

    document.getElementById("output").value = output;
}    