function getPin() {
  const randomNbr = Math.random() * 10000;
  const pin = (randomNbr + "").split(".")[0];
  if (pin.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

// display random generated pin
function displayPin() {
  document.getElementById("generatedPin").value = getPin();
}

// digits event works
const digitsBtn = document
  .getElementById("btn-list")
  .addEventListener("click", function () {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
      if (digit === "C") {
        document.getElementById("typed-pin").value = "";
      }
      if (digit === "DEL") {
        const typedValue = document.getElementById("typed-pin").value;
        const newTypedValue = typedValue.slice(0, -1);
        document.getElementById("typed-pin").value = newTypedValue;
      }
    } else {
      const typeInput = document.getElementById("typed-pin");
      typeInput.value = typeInput.value + digit;
    }
  });

function verifyPin() {
  const pin = document.getElementById("generatedPin").value;
  const typedPin = document.getElementById("typed-pin").value;
  if (pin === typedPin) {
    handleDisplayMsg("block", "none");
  } else {
    handleDisplayMsg("none", "block");
  }
}

function handleDisplayMsg(correct, incorrect) {
  document.getElementById("correct-pin").style.display = correct;
  document.getElementById("incorrect-pin").style.display = incorrect;
}
