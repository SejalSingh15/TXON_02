
function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}
    
let history=document.getElementById('hisbox') ;  
function cal() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    
}




