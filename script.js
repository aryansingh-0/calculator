let buttons = document.querySelectorAll(".circle");

let inputBox = document.getElementById("input");
inputBox.value = "0";
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.textContent === "=") {
      try {
        let result = eval(inputBox.value);
        inputBox.value = result;
      } catch (error) {
        inputBox.value = "Error";
      }
    } else if (button.textContent == "C") {
      inputBox.value = "0";
    } else {
        if(inputBox.value === "0" && !["+" ,"-","*", "/"].includes(button.textContent) ){
            inputBox.value = button.textContent;
        }else{
            inputBox.value += button.textContent;

        }
    }
  });
});
