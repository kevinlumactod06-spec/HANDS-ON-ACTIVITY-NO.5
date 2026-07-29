const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const resultTxt = document.getElementById("sum");
const resultTxt1 = document.getElementById("Difference");
const resultTxt2 = document.getElementById("Product");
const resultTxt3 = document.getElementById("Quotient");

let sum = 0;
let Difference = 0;
let Product = 0;
let Quotient = 0;


function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        resultTxt.innerHTML = sum;

        Difference = parseInt(num1Txt.value) - parseInt(num2Txt.value);
        resultTxt1.innerHTML = Difference;

        Product = parseInt(num1Txt.value) * parseInt(num2Txt.value);
        resultTxt2.innerHTML = Product;

        Quotient = parseInt(num1Txt.value) / parseInt(num2Txt.value);
        resultTxt3.innerHTML = Quotient;
    }

}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = "";
    resultTxt.innerHTML = "";
    resultTxt1.innerHTML = "";
    resultTxt2.innerHTML = "";
    resultTxt3.innerHTML = "";
    sum = 0;
    Difference = 0;
    Product = 0;
    Quotient = 0;

}