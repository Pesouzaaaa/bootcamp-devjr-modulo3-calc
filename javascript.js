function calc(){
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    
    var op = n1 + n2;

    document.getElementById("output").value = op;
}