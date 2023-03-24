let display = "";
let result;
let calculationExecution = false;
let mathematicalExpression = false;
document.getElementById("display").value = display

function addValue(value) {
  if(calculationExecution == true) {
    display = "";
    calculationExecution = false;
  }else if(display == "Infinity") {
    display = "";
  }
  if(value != ".") {
    if(display == "0") {
      display = "";
    }
    if(display[display.length - 1] == "0" && isOperator(display[display.length - 2])){
      display = display.slice(0, -1);
    }
  }else{
    if(isNaN(display[display.length - 1])) {
    value = "0.";
    }
    if(mathematicalExpression == true) {
      mathematicalExpression = false;
    }else if(display.indexOf('.') !== -1){
      return
    }
  }
  display += value;
  let formattedDisplay = formatDisplay(display);
  document.getElementById("display").value = formattedDisplay
  }
  
function addOperator(operator) {
  if(display == "Infinity") {
    return 
  }else if(display[display.length - 1] == "."){
    return
  }else if(display === ""){
    return
  }
  if (isOperator(display[display.length - 1])) {
      display = display.slice(0, -1);
  }
    display += operator;
    let formattedDisplay = formatDisplay(display);
    document.getElementById("display").value = formattedDisplay;
    calculationExecution = false;
    mathematicalExpression = true;
  } 
  
function calculate() {
  result = eval(display);  
  if (result % 1 != 0) { 
    let numStr = result.toString(); 
    let decimalIndex = numStr.indexOf('.'); 
    if (decimalIndex != -1 && numStr.substring(decimalIndex + 1).length >= 5) { 
      result = parseFloat(result.toFixed(5)); 
    }
  }
  let formattedResult = formatDisplay(result.toString());
  document.getElementById("display").value = formattedResult;
  display = document.getElementById("display").value;
  calculationExecution = true;
  mathematicalExpression = false;
}
  
function deleteCharacter(value) {
  if (value == "AC" || calculationExecution == true) {
    display = "";
  } else {
    display = display.slice(0, -1);
  }
  document.getElementById("display").value = display;
}

function formatDisplay(display) {
  display = display.replace(/\*/g, "×");
  display = display.replace(/\//g, "÷"); 
  return display;
}

function isOperator(operator) {
  return operator === "+" || operator === "-" || operator === "*" || operator === "/";
}

function isNotOperator(operator) {
  return !(operator === "+" || operator === "-" || operator === "*" || operator === "/");
}
  