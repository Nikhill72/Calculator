
const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");


let inputValue = "";


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;

    if (buttonText === "AC") {
  
      inputValue = "";
      inputBox.value = "0";
    } else if (buttonText === "DEL") {
     
      inputValue = inputValue.slice(0, -1);
      inputBox.value = inputValue || "0"; 
    } else if (buttonText === "=") {
      try {
        
        inputValue = eval(inputValue).toString();
        inputBox.value = inputValue;
      } catch (error) {
       
        inputBox.value = "Error";
        inputValue = "";
      }
    } else {
     
      inputValue += buttonText;
      inputBox.value = inputValue;
    }
  });
});
