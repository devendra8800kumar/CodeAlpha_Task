const display = document.getElementById("screen");
const buttons = document.querySelectorAll("button");

let input = "";

function updatescreen() {
  display.value = input;
}

function calculate() {
  try {
    input = eval(input).toString();
  } catch {
    input = "Error";
  }
  updatescreen();
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const key = button.getAttribute("key");

    if (key === "C") {
      input = "";
    } else if (key === "Enter") {
      calculate();
    } else {
      input += key;
    }

    updatescreen();
  });
});

document.addEventListener("keydown", (e) => {
  if ((e.key >= '0' && e.key <= '9') || "+-*/.".includes(e.key)) {
    input += e.key;
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    input = currentInput.slice(0, -1);
  } else if (e.key === "Escape") {
    input = "";
  }

  updatescreen();
});
