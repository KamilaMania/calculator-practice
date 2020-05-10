let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector(".screen");

function buttonClick(value) {
  if (isNaN(value) === "number") {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  screen.innerText = buffer;
}

function handleSymbol(symbol) {
  //   if (symbol === "C") {
  //     buffer = "0";
  //     runningTotal = 0;
  //   }
  switch (value) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      break;
    case "&plus":
      handleMath(symbol);
      break;
    case "&divide":
      handleMath(symbol);
      break;
    case "&times":
      handleMath(symbol);
      break;
    case "&minus":
      handleMath(symbol);
      break;
  }
}
function handleMath(symbol) {
  if (buffer === "0") {
    return;
  }
  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  previousOperator = symbol;
  buffer = "0";
}
function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}

function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

init();
