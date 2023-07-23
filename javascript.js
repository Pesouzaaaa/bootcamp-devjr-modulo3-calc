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

    var newHistory = "<p>" + n1 + " " + op + " " + n2  +" = " + output + "</p>";
    var history = document.getElementById("history");

    history.innerHTML = newHistory + history.innerHTML;

    if(history.children.length > 10){
        history.removeChild(history.childNodes[10]);
    }
}    