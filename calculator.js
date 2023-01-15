var Add=document.getElementById("add")

Add.addEventListener("click",function(){
    var resdisplay=document.getElementById("resdisplay")
    resdisplay.style.display="inline-block"
    var num1=document.getElementById("num1").value
    var num2=document.getElementById("num2").value 
    var sum=Number(num1)+Number(num2)
    var res=document.getElementById("resultadd")
    res.textContent="The Addition Value is :"+sum
})

var Sub=document.getElementById("sub")

Sub.addEventListener("click",function(){
    var resdisplay=document.getElementById("resdisplay")
    resdisplay.style.display="inline-block"
    var num1=document.getElementById("num1").value
    var num2=document.getElementById("num2").value 
    var sub=Number(num1)-Number(num2)
    var res=document.getElementById("resultsub")
    res.textContent="The Subtraction Value is :"+sub
})

var Mul=document.getElementById("mul")

Mul.addEventListener("click",function(){
    var resdisplay=document.getElementById("resdisplay")
    resdisplay.style.display="inline-block"
    var num1=document.getElementById("num1").value
    var num2=document.getElementById("num2").value 
    var mul=Number(num1)*Number(num2)
    var res=document.getElementById("resultmul")
    res.textContent="The Multiplication Value is :"+mul
})

var Div=document.getElementById("div")

Div.addEventListener("click",function(){
    var resdisplay=document.getElementById("resdisplay")
    resdisplay.style.display="inline-block"
    var num1=document.getElementById("num1").value
    var num2=document.getElementById("num2").value 
    var div=Number(num1)/Number(num2)
    var res=document.getElementById("resultdiv")
    res.textContent="The Divition Value is :"+div
})

var Rem=document.getElementById("rem")

Rem.addEventListener("click",function(){
    var resdisplay=document.getElementById("resdisplay")
    resdisplay.style.display="inline-block"     
    var num1=document.getElementById("num1").value
    var num2=document.getElementById("num2").value 
    var rem=Number(num1)%Number(num2)
    var res=document.getElementById("resultrem")
    res.textContent="The Subtraction Value is :"+rem
})



var reload=document.getElementById("reload")

reload.addEventListener("click",function(){
    
    var resdisplay=document.getElementById("resdisplay")
    resdisplay.style.display="none"
    window.location.reload()
})