//plus btn event handler
// btnActivity("plusBtn"); // arekta parameter dite hoibo;

const plusBtn = document.getElementById("plusBtn");
plusBtn.addEventListener("click", function () {
  btnCalculation("inputQuantity", 1, "castValue")
});

// minus btn event handler
btnActivity("minusBtn")

// const minusBtn = document.getElementById("minusBtn");
// minusBtn.addEventListener("click", function () {
//   btnCalculation("inputQuantity", -1, "castValue")
// });

function btnActivity(id){
  const minusBtn = document.getElementById(id);
  minusBtn.addEventListener("click", function () {
  btnCalculation("inputQuantity", -1, "castValue")
});
}

function btnCalculation(id, quantityNum, id2){
  const inputQuantity = document.getElementById(id).value;
  const quantityNumber = parseFloat(inputQuantity);
  const totalQuantity = quantityNumber + quantityNum;
  document.getElementById(id).value = totalQuantity;

  // calculate
  // const castValue = document.getElementById(id2).innerText;
  // const castValueNumber = parseFloat(castValue);
  const totalItemCost = totalQuantity * 1219;
  document.getElementById(id2).innerText = totalItemCost;
}
