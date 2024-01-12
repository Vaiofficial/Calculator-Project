//selecting all btns
let btns = document.querySelectorAll(".num-btn");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelector("#result-box");
let clearBtn = document.querySelector("#clear");
let total = document.querySelector("#total");
let deleteButton = document.querySelector("#deleteBtn");
let sinBtn = document.querySelector("#sin");
let cosBtn = document.querySelector("#cos");
let tanBtn = document.querySelector("#tan");

//creating array and storing all the buttons
let btnSpread = [...btns];
let allBtnsSpread = [...allBtns];


//taking input in calculator
btnSpread.forEach((button, i) => {
  button.addEventListener("click", () => {
    if (resultBox.innerHTML == "0") {
      resultBox.innerHTML = "";
    }

    let value = btns[i].innerHTML;
    resultBox.innerHTML += value;
  });
});


//function to evalute strings
//agar statement fn = 2+3 hai so I am creating a new function which is : function(return 2+3) and () ye parentheses call karega function ko jaise hi create hota h.
function evalute(fn) {
  return new Function("return " + fn)();
}


//calculating all inputs
total.addEventListener("click", () => {
  let allInputs = resultBox.innerHTML;

  try {
    let result = evalute(allInputs);

    if (isNaN(result) || !isFinite(result)) {
      throw new Error("Invalid Result");
    }
    //update the result box
    resultBox.innerHTML = result;
  } catch (error) {
    resultBox.innerHTML = "Not Defined";
  }
});



//calling sin , cos and tan
sinBtn.addEventListener("click", () => {
  handleTrigonometric("sin");
});

cosBtn.addEventListener("click", () => {
  handleTrigonometric("cos");
});

tanBtn.addEventListener("click", () => {
  handleTrigonometric("tan");
});

//Implemented the trigonometric calculation function.
function handleTrigonometric(operation) {
  let currentValue = parseFloat(resultBox.innerHTML);

  if (!isNaN(currentValue)) {
    try {
      switch (operation) {
        case "sin":
          resultBox.innerHTML = Math.sin(
            currentValue * (Math.PI / 180)
          ).toFixed(5);
          break;
        case "cos":
          resultBox.innerHTML = Math.cos(
            currentValue * (Math.PI / 180)
          ).toFixed(5);
          break;
        case "tan":
          resultBox.innerHTML = Math.tan(
            currentValue * (Math.PI / 180)
          ).toFixed(5);
          break;
        default:
          throw new Error("Invalid Operation");
      }
    } catch (error) {
      resultBox.innerHTML = "Error";
      console.log("trigonometric error: ", error);
    }
  } else {
    resultBox.innerHTML = "Not Defined";
  }
}

//delete number or operator
deleteButton.addEventListener("click", () => {
  let currentValue = document.getElementById("result-box").innerHTML;

  if (currentValue === "0") {
    document.getElementById("result-box").innerHTML = currentValue;
  } else {
    //removing the last entered number
    let newValue = currentValue.slice(0, -1);
    //updating the innerHTML of resultbox
    document.getElementById("result-box").innerHTML = newValue;
  }
});


//clear all inputs
clearBtn.addEventListener("click", () => {
  resultBox.innerHTML = "0";
});


//Implementing darkmode feature
document.addEventListener("DOMContentLoaded", function () {
  let darkModeBtn = document.getElementById("dark");
  const calculatorContainer = document.querySelector(".container");

  let isDarkMode = localStorage.getItem("darkMode") === "enabled";

  if (isDarkMode) {
    enableDarkMode();
  }

  darkModeBtn.addEventListener("click", () => {
    if (isDarkMode) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });

  //Enable an disable functions
  function enableDarkMode() {
    calculatorContainer.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
    isDarkMode = true;
    updateButtonText();
  }
  function disableDarkMode() {
    calculatorContainer.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
    isDarkMode = false;
    updateButtonText();
  }


  //updating icon of dark mode button after click
  function updateButtonText() {
    darkModeBtn.innerHTML = isDarkMode
      ? '<i class = "fas fa-sun"></i>'
      : '<i class = "fas fa-moon"></i>'
  }
});
