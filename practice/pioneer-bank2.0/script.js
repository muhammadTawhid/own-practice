// enter btn event handlaer
const loginPage = document.getElementById("login-page");
const enterBtn = document.getElementById("enterBtn");
const transitionPage = document.getElementById("transition-area");
enterBtn.addEventListener("click", function () {
  loginPage.style.display = "none";
  transitionPage.style.display = "block";
});

// deposit btn event handler
const addDeposit = document.getElementById("addDeposit");
addDeposit.addEventListener("click", function () {
  // const depositInput = document.getElementById("depositInput").value;
  // const depositNumber = parseFloat(depositInput);
  const depositNumber = getInputNumber("depositInput");

  // const currentDeposit = document.getElementById("currentDeposit").innerText;
  // const currentNumber = parseFloat(currentDeposit);
  // const total = depositNumber + currentNumber;
  // document.getElementById("currentDeposit").innerText = total;
  calculate("currentDeposit", depositNumber);
  calculate("currentBalance", depositNumber);

  document.getElementById("depositInput").value = "";
});

// withdraw btn event handler
const addWithdraw = document.getElementById("addWithdraw");
addWithdraw.addEventListener("click", function () {
  // const withdrawInput = document.getElementById("withdrawInput").value;
  // const withdrawNumber = parseFloat(withdrawInput);
  const withdrawNumber = getInputNumber("withdrawInput");
  calculate("currentWithdraw", withdrawNumber);
  calculate("currentBalance", -1 * withdrawNumber);

  document.getElementById("withdrawInput").value = "";
});

function getInputNumber(id) {
  const amountInput = document.getElementById(id).value;
  const amountNumber = parseFloat(amountInput);
  return amountNumber;
}

function calculate(id, depositNumber) {
  const amount = document.getElementById(id).innerText;
  const amountNumber = parseFloat(amount);
  const totalAmount = depositNumber + amountNumber;
  document.getElementById(id).innerText = totalAmount;
}
