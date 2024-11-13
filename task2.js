function verify() {
    console.log("a, b, c, d")
    let a = parseFloat(elementA.value);
    let b = parseFloat(elementB.value);
    let c = parseFloat(elementC.value);
    let d = parseFloat(elementD.value);
    console.log(a, b, c, d)

    if (a <= 0 || b <= 0 || c <= 0 || d <= 0) {
        result = "недопустимые значения";
        check = false;
    }

    let low1, high1 
    if (a < b) {
        low1 = a;
        high1 = b;
    }

    else{
        low1 = b;
        high1 = a;
    }

    let low2, high2
    if (c < d){
        low2 = c;
        high2 = d;
    }

    else{
        low2 = d;
        high2 = c;
    }

    if (low1 <= low2 && high1 <= high2) {
        result = "Прямоугольник может быть вписан";
        check = true;
    }
    else {
        result = "Прямоугольник не может быть вписан";
        check = false;
    }
     document.getElementById("result").value = result; 
}
    


function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    }
    else {
        alert("Есть недостатки. Повторите ввод")
    }
}


let result;
let check;

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");
const elementD = document.getElementById("d");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
