//get our buttons from the DOM
const buttons = document.querySelectorAll(".btn-number, .btn-operator");
const equalsButton = document.querySelector(".btn-equals");
const display = document.querySelector(".display");

let displayData = "";

//loop over the buttons
buttons.forEach((button) => {
  //for each button, we want to add a "click" event listener
  button.addEventListener("click", () => {
    //get the value of the clicked button from the attribute
    const buttonValue = button.getAttribute("data-num");

    //update our displayData variable with the value of the clicked button
    displayData += buttonValue;

    //output the displayData value to the display element
    display.textContent = displayData;
  });
});

// add an event listener to the equals button
equalsButton.addEventListener("click", () => {
  // use the eval() function to evaluate the expression and output it to the display
  displayData = eval(displayData);
  display.textContent = displayData;
});
