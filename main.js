//selecting all btns
let btns = document.querySelectorAll(".num-btn");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelector("#result-box");
let clearBtn = document.querySelector("#clear");
let total = document.querySelector("#total");
let memoryStorage = 0;
let mcButton = document.querySelector('#mcButton')

//creating array and storing all the buttons
let btnSpread = [...btns];
let allBtnsSpread = [...allBtns];

// taking input in calculator

btnSpread.forEach((button, i) => {
    button.addEventListener('click', () => {

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
    return new Function('return ' + fn)();
}

//calculating all inputs
total.addEventListener('click', () => {
    let allInputs = resultBox.innerHTML;

    //passing the statements into evaluate function.
    resultBox.innerHTML = evalute(allInputs);

    console.log(evalute(allInputs));
})

//memory clean  - MC Button

mcButton.addEventListener('click', () => {
    memoryStorage = 0;
    console.log("Memory Cleared:", memoryStorage);
})

//clear all inputs
clearBtn.addEventListener('click', () => {
    resultBox.innerHTML = "0";
})

