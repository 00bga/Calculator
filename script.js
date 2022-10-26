'use strict';

const dot = document.getElementById("dot");
const input = document.querySelector(".input");
const equal = document.querySelector(".equal");
const buttons = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
const action = document.querySelectorAll(".action");
const number = document.querySelectorAll(".number");

//Theme
const body = document.querySelector("body");
const keypad = document.querySelector(".keypad");
const theme1 = document.getElementById("chk1");
const theme2 = document.getElementById("chk2");
const theme3 = document.getElementById("chk3");
const num = document.querySelectorAll(".num");
const text = document.querySelectorAll(".text");
const dr = document.querySelectorAll(".dr");

function defaultTheme() {
    for (let i = 0; i < num.length; i++) {
        num[i].style.backgroundColor = "hsl(30, 25%, 89%)";
        num[i].style.color = "hsl(60, 10%, 19%)";
        num[i].style.boxShadow = "0 4px hsl(28, 16%, 65%)";
        for (let j = 0; j < dr.length; j++) {
            dr[j].style.backgroundColor = "hsl(225, 21%, 49%)";
            dr[j].style.boxShadow = "0 4px hsl(224, 28%, 35%)";
            dr[j].style.color = "#FFFFFF";
        }
    }
    for (let i = 0; i < text.length; i++) {
        text[i].style.color = "#FFFFFF";
    }
    body.style.backgroundColor = "hsl(222, 26%, 31%)";
    keypad.style.backgroundColor = "hsl(223, 31%, 20%)";
    equal.style.backgroundColor = "hsl(6, 63%, 50%)";
    equal.style.boxShadow = "0 4px hsl(6, 70%, 34%)";
    equal.style.color = "#FFFFFF";
    input.style.backgroundColor = "hsl(224, 36%, 15%)";
    input.style.color = "#FFFFFF";
}

function lightTheme() {
    for (let i = 0; i < num.length; i++) {
        num[i].style.backgroundColor = "#FFFFFF";
        num[i].style.color = "hsl(60, 10%, 19%)";
        num[i].style.boxShadow = "0 4px hsl(35, 11%, 61%)";
        for (let j = 0; j < dr.length; j++) {
            dr[j].style.backgroundColor = "hsl(185, 42%, 37%)";
            dr[j].style.boxShadow = "0 4px hsl(185, 58%, 25%)";
            dr[j].style.color = "#FFFFFF";
        }
    }
    for (let i = 0; i < text.length; i++) {
        text[i].style.color = "hsl(60, 10%, 19%)";
    }
    body.style.backgroundColor = "hsl(0, 0%, 90%)";
    input.style.backgroundColor = "hsl(0, 0%, 93%)";
    input.style.color = "hsl(221, 14%, 31%)";
    keypad.style.backgroundColor = "hsl(0, 5%, 81%)";
    equal.style.backgroundColor = "hsl(25, 98%, 40%)";
    equal.style.boxShadow = "0 4px hsl(25, 99%, 27%)";
    equal.style.color = "#FFFFFF";
}

function violetTheme() {
    for (let i = 0; i < num.length; i++) {
        num[i].style.backgroundColor = "hsl(268, 47%, 21%)";
        num[i].style.color = "hsl(52, 100%, 62%)";
        num[i].style.boxShadow = "0 4px hsl(290, 70%, 36%)";
        for (let j = 0; j < dr.length; j++) {
            dr[j].style.backgroundColor = "hsl(281, 89%, 26%)";
            dr[j].style.boxShadow = "0 4px hsl(285, 91%, 52%)";
            dr[j].style.color = "#FFFFFF";
        }
    }
    for (let i = 0; i < text.length; i++) {
        text[i].style.color = "hsl(52, 100%, 62%)";
    }
    body.style.backgroundColor = "hsl(268, 75%, 9%)";
    keypad.style.backgroundColor = "hsl(268, 71%, 12%)";
    equal.style.backgroundColor = "hsl(176, 100%, 44%)";
    equal.style.boxShadow = "0 4px hsl(177, 92%, 70%)";
    input.style.backgroundColor = "hsl(268, 71%, 12%)";
    input.style.color = "hsl(52, 100%, 62%)";
}

//Displaying input
function display(num) {
    let showNum = input.textContent;

    if (showNum.length >= 10) {
        input.textContent = "";
    }
    
    if (showNum == "0" && num != "." && num != "/" && num != "x") {
        showNum = num;
        input.textContent = showNum;
    }
    else {
        input.textContent = showNum + num;
    }
}

//Doing operations
function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

//Returns true if an input contains 2 of the "-" characters
function checkMinus(str) {
    return str.replace(/[^-]/g, "").length == 2;
}

//Returns true if an input contains 2 of the "." characters
function checkPoint(str) {
    return str.replace(/[^.]/g, "").length == 2;
}

function doMath() {
    // Addition
    let currentInput = input.textContent;
    let checkSum = currentInput.includes("+");
    let arraySum = currentInput.split("+");
    
    if (checkSum) {
        let val1 = arraySum[0];
        let val2 = arraySum[1];
        
        //Checks for floating point numebrs
        if (val1.includes(".")) {
            val1 = parseFloat(arraySum[0]);
        }
        else {
            val1 = parseInt(arraySum[0]);
        }
        if (val2.includes(".")) {
            val2 = parseFloat(arraySum[1]);
        }
        else {
            val2 = parseInt(arraySum[1]);
        }
        
        input.textContent = addition(val1, val2);
    }
    
    //Subtraction
    let checkSub = currentInput.includes("-");
    let arrayChar = currentInput.split("");
    let arraySub = currentInput.split("-");
    
    if (checkSub && arrayChar[0] != "-") {
        let val1 = arraySub[0];
        let val2 = arraySub[1];

        //Checks for floating point numebrs
        if (val1.includes(".")) {
            val1 = parseFloat(arraySub[0]);
        }
        else {
            val1 = parseInt(arraySub[0]);
        }
        if (val2.includes(".")) {
            val2 = parseFloat(arraySub[1]);
        }
        else {
            val2 = parseInt(arraySub[1]);
        }
        input.textContent = subtraction(val1, val2);
    }
    
    //Does a calculation for negative number subtraction. For example: -4-6 = -10
    if(checkMinus(currentInput)) {
        let val1 = arraySub[1];
        let val2 = arraySub[2];

        //Checks for floating point numebrs
        if (val1.includes(".")) {
            val1 = -Math.abs(parseFloat(arraySub[1]));
        }
        else {
            val1 = -Math.abs(parseInt(arraySub[1]));
        }
        if (val2.includes(".")) {
            val2 = parseFloat(arraySub[2]);
        }
        else {
            val2 = parseInt(arraySub[2]);
        }
        input.textContent = subtraction(val1, val2);
    }
    
    //Multiplication
    let checkMult = currentInput.includes("x");
    let arrayMult = currentInput.split("x");

    if (checkMult) {
        let val1 = arrayMult[0];
        let val2 = arrayMult[1];

        //Checks for floating point numebrs
        if (val1.includes(".")) {
            val1 = parseFloat(arrayMult[0]);
        }
        else {
            val1 = parseInt(arrayMult[0]);
        }
        if (val2.includes(".")) {
            val2 = parseFloat(arrayMult[1]);
        }
        else {
            val2 = parseInt(arrayMult[1]);
        }
        input.textContent = multiplication(val1, val2);
    }
    
    //Division
    let checkDiv = currentInput.includes("/");
    let arrayDiv = currentInput.split("/");

    if (checkDiv) {
        let val1 = arrayDiv[0];
        let val2 = arrayDiv[1];

        //Checks for floating point numebrs
        if (val1.includes(".")) {
            val1 = parseFloat(arrayDiv[0]);
        }
        else {
            val1 = parseInt(arrayDiv[0]);
        }
        if (val2.includes(".")) {
            val2 = parseFloat(arrayDiv[1]);
        }
        else {
            val2 = parseInt(arrayDiv[1]);
        }
        input.textContent = division(val1, val2);
    }
}

//Delete characters
function del() {
    let inputArray = input.textContent.split("");
    console.log(inputArray);
    inputArray.pop();
    
    if (inputArray.length === 0) {
        inputArray.push("0");
    }
    input.textContent = inputArray.join("");
}

//Reset
function reset() {
    let inputArray = input.textContent.split();
    
    for (let i = 0; i < inputArray.length; i++) {
        inputArray.pop();
    }
    
    if (inputArray.length === 0) {
        inputArray.push("0");
    }
    input.textContent = inputArray;
}

//Displays input in the number field
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        display(buttons[i].textContent);
    })
}

//Implements functionality to display input from key presses
document.addEventListener("keydown", function (e) {
    for (let i = 0; i < number.length; i++) {
        if (e.key === `${i}`) {
            display(String(i));
        }
    }
    if (e.key === "+" && input.textContent.includes("+") === false && input.textContent[0] !== "0") {
        display("+");
    }
    else if (e.key === "-" && checkMinus(input.textContent) === false) {
        display("-");
    }
    else if (e.key === "*" && input.textContent.includes("x") === false) {
        display("x");
    }
    else if (e.key === "/" && input.textContent.includes("/") === false) {
        display("/");
    }
    else if (e.key === "." && checkPoint(input.textContent) === false) {
        display(".");
    }
    else if (e.key === "Delete") {
        del();
    }
    else if (e.key === "Escape") {
        reset();
    }
    else if (e.key === "Enter") {
        doMath();
    }
})

//Function Calls
for (let i = 0; i < operation.length; i++) {
    operation[i].addEventListener("click", function () {
        //Removes functionality from a button if it is clicked unnecessary amount of times
        if(input.textContent === "0" && operation[i].id !== "dot" && operation[i].id !== "minus" && operation[i].id !== "divide"
            && operation[i].id !== "multiply") {
            operation[i].removeEventListener();
        }
        if (checkMinus(input.textContent) && operation[i].id === "minus" && input.textContent[0] === "-") {
            operation[i].removeEventListener();
        }
        if (operation[i].id === "minus" && input.textContent[0] !== "-" && input.textContent.includes("-") === true) {
            operation[i].removeEventListener();
        }
        if (checkPoint(input.textContent) && operation[i].id == "dot"){
            operation[i].removeEventListener();
        }
        if (operation[i].id !== "dot" && input.textContent.includes("+") || input.textContent.includes("x") || input.textContent.includes("/")) {
            operation[i].removeEventListener();
        }
        //Displays operations inside the input field
        if (operation[i].id === "plus" && input.textContent.includes("+") === false) {
            display(operation[i].textContent);
        }
        else if (operation[i].id === "minus") {
            display(operation[i].textContent);
        }
        else if (operation[i].id === "multiply" && input.textContent.includes("x") === false) {
            display(operation[i].textContent);
        }
        else if (operation[i].id === "divide" && input.textContent.includes("/") === false) {
            display(operation[i].textContent);
        }
        else if (operation[i].id === "dot") {
            display(operation[i].textContent);
        }
        
        //Delete function
        else if (operation[i].id === "delete") {
            del();
        }
        //Reset Function
        else if (operation[i].id === "reset") {
            reset();
        }
    })
}

for (let i = 0; i < action.length; i++) {
    action[i].addEventListener("click", function () {
        if (action[i].id === "delete") {
            del();
        }
        //Reset Function
        else if (action[i].id === "reset") {
            reset();
        }
    })
}

equal.addEventListener("click", function () {
    doMath();
})

theme1.addEventListener("change", function () {
    if (theme1.checked) {
        defaultTheme();
    }
})

theme2.addEventListener("change", function () {
    if (theme2.checked) {
        lightTheme();
    }
})

theme3.addEventListener("change", function () {
    if (theme3.checked) {
        violetTheme();
    }
})