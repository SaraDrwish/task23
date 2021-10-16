 function btn(){

var num1 = parseFloat(document.getElementById("num1").value);
var num2 = parseFloat(document.getElementById("num2").value);
// var res = document.getElementById("res").value;
var oporation = document.getElementById("oporation").value;

// var btn = document.getElementById("btn");

// document.getElementById("btn").onclick = function{

if (oporation === '') {

    // alert(Math.round(num1 - num2));
    // document.getElementById("num1").type="number";
    // document.getElementById("num2").type="number";

   document.getElementById('res').value = num1-num2;

    // window.alert(num1 - num2);  
    //   document.getElementById("res")= num1-num2;

}if (oporation ==='/') {

    // document.getElementById("res").innerHTML= num1 / num2;
    // document.getElementById("res")= num1 / num2;
    // alert(num1 / num2);
   document.getElementById("res").value= num1 /num2;
  
} if (oporation === '*') {
    // res.innerHTML= num1 * num2 ;
    // alert(num1 * num2);
     document.getElementById("res").value= num1 * num2;

}else if  (oporation === '+'){   //    (document.getElementById("oporation").value == " \" + \" ")
     document.getElementById("res").value= num1+num2;

}
}