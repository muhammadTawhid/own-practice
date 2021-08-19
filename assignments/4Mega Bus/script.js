function handlePlusMinus(isIncrease, product) {
  const inputValue = document.getElementById(product + "-input").value;
  const inputValueNumber = parseInt(inputValue);
  let newInputValue = inputValueNumber;
  if (isIncrease == true) {
    newInputValue = inputValueNumber + 1;
  } else if (isIncrease == false && inputValueNumber > 0) {
    newInputValue = inputValueNumber - 1;
  }
  document.getElementById(product + "-input").value = newInputValue;
  calculateTotal();
}

function calculateTotal() {
  const firstQuantity = getQuantity("first");
  const economyQuantity = getQuantity("second");

  document.getElementById("first-ticket").innerText =
    firstQuantity + " pieces ";
  document.getElementById("economy-ticket").innerText =
    economyQuantity + " pieces ";

  const subtotal = firstQuantity * 150 + economyQuantity * 100;
  document.getElementById("subtotal").innerText = "$" + subtotal;

  const vat = Math.round(subtotal * 0.1);
  document.getElementById("vat").innerText = "$" + vat;

  const total = subtotal + vat;
  document.getElementById("total").innerText = "$" + total;
  document.getElementById("confirmation-total").innerText = "$" + total;
}

function getQuantity(id) {
  const inputValue = document.getElementById(id + "-input").value;
  const quantity = parseInt(inputValue);
  return quantity;
}

function showDialogBox() {
  document.getElementById("confirmation-box").style.display = "block";
}

function closeDialogBox() {
  document.getElementById("confirmation-box").style.display = "none";
}
