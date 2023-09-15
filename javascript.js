function add (x, y) {
    return +x + +y;
}

function subtract (x, y) {
    return +x - +y;
}

function multiply (x, y) {
    return +x * +y;
}

function divide (x, y) {
    return +x / +y;
}

function operate (operation, x, y) {
    switch(operation) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y)
        case "*":
            return multiply(x, y);
        case "/":
            return divide(x, y);
    }
}

function updateDisplay(newContent, addOrDel) {
    let display = document.querySelector(".display")
    
    if (addOrDel.includes('clear')){
        display.textContent = 0;
    } else if (addOrDel.includes("del")){
        /*
        Erase last character from display.
        */
        if (display.textContent.length <= 1){
            display.textContent = 0;
        } else {
            display.textContent = display.textContent.slice(0, -1);
        }
    } else if (addOrDel.includes('op=')){
        /* 
        Perform arithmetic and display result.
        */
        let operation = display.textContent.match(/[\+\-\*\/]/);

        console.log(operation);
        let nums = display.textContent.split(/[\+\-\*\/]/);
        console.log(nums);
        let result = operate(operation[0], nums[0], nums[1])
        display.textContent = result;

    } else if (newContent.match(/[\+\-\*\/]/) && display.textContent.match(/[\+\-\*\/]/)) {

        console.log("Error, operation aleady has an operand.")

    } else {
        if (newContent.includes(".") && display.textContent.includes('.')) {
            console.log("Error, only one . allowed per operation.")
        } else if (display.textContent == "0" && addOrDel.includes("num")) {
            display.textContent = newContent;
        } else {
            display.textContent += newContent;
        }
    }
}

function parseOperation(button){
    updateDisplay(button.target.textContent, button.target.id)
    console.log(button.target.id);
}

let buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener("mousedown", parseOperation);
})