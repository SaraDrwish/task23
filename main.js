

var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
var res = document.getElementById("res").value;
var btn = document.getElementById("btn");

document.getElementById("btn").onclick = function(){


if (document.getElementById("oporation").value== "-") {

    alert(Math.round(num1 - num2));

    //   document.getElementById("res")= num1-num2;

}if (document.getElementById("oporation").value=="/") {

       document.getElementById("res").innerHTML= num1 / num2;

    // alert(num1/num2);

  
} if (document.getElementById("oporation").value== "*") {
    res.innerHTML= num1 * num2 ;

}else{   //    (document.getElementById("oporation").value == " \" + \" ")
    res.innerHTML= num1 + num2 ;

}

}