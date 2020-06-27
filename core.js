function getNumber(num){
    var res = document.getElementById("res");
    res.value += num;   
}

function clearSpace(){
    var res = document.getElementById("res");
    res.value = ""
    
}
function calc(){
    var res = document.getElementById("res");
    res.value = eval(res.value);
    
}
 