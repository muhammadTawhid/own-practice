function handlePlusMinus(isIncrease, product) {
  const firstInput = document.getElementById(product + "-input");
  const firstInputNumber = parseInt(firstInput.value);
  newInputValue = firstInputNumber;
  if (isIncrease == true) {
    newInputValue = firstInputNumber + 1;
  }
  if (isIncrease == false && 0 < newInputValue) {
    newInputValue = firstInputNumber - 1;
  }
  document.getElementById(product + "-input").value = newInputValue;
  let subtotal = 0;
  if (product == "first") {
    document.getElementById("first-ticket").innerText = newInputValue;
  } else if (product == "second") {
    document.getElementById("economy-ticket").innerText = newInputValue;
  }
  calculateTotal();
}

function calculateTotal() {
  const firstInput = document.getElementById("first-input");
  const firstInputNumber = parseInt(firstInput.value);

  const secondInput = document.getElementById("second-input");
  const secondInputNumber = parseInt(secondInput.value);

  const subtotal = firstInputNumber * 150 + secondInputNumber * 100;
  document.getElementById("subtotal").innerText = "$" + subtotal;
  document.getElementById("confirmation-subtotal").innerText = "$" + subtotal;

  const Vat = Math.round(subtotal * 0.1);
  document.getElementById("vat").innerText = "$" + Vat;
  document.getElementById("confirmation-vat").innerText = "$" + Vat;

  const total = subtotal + Vat;
  document.getElementById("total").innerText = "$" + total;
  document.getElementById("confirmation-total").innerText = "$" + total;
}

function successAlert() {
  document.getElementById("confirmation-box").style.display = "block";
}

function handleOk() {
  document.getElementById("confirmation-box").style.display = "none";
}
