//plus btn event handler
btnActivity("plusBtn", 1);
// const plusBtn = document.getElementById("plusBtn");
// plusBtn.addEventListener("click", function () {
//   btnCalculation("inputQuantity", 1, "castValue")
  // const inputQuantity = document.getElementById("inputQuantity").value;
  // const quantityNumber = parseFloat(inputQuantity);
  // const totalQuantity = quantityNumber + 1;
  // document.getElementById("inputQuantity").value = totalQuantity;

  // // calculate
  // // const castValue = document.getElementById("castValue").innerText;
  // // const castValueNumber = parseFloat(castValue);
  // const totalItemCost = totalQuantity * 1219;
  // document.getElementById("castValue").innerText = totalItemCost;
// });

// minus btn event handler
btnActivity("minusBtn", -1)

// const minusBtn = document.getElementById("minusBtn");
// minusBtn.addEventListener("click", function () {
//   btnCalculation("inputQuantity", -1, "castValue")

  // const inputQuantity = document.getElementById("inputQuantity").value;
  // const quantityNumber = parseFloat(inputQuantity);
  // const totalQuantity = quantityNumber - 1;
  // document.getElementById("inputQuantity").value = totalQuantity;

  // // calculate
  // const castValue = document.getElementById("castValue").innerText;
  // // const castValueNumber = parseFloat(castValue);
  // const totalItemCost = totalQuantity * 1219;
  // document.getElementById("castValue").innerText = totalItemCost;
// });

function btnActivity(id, quantityNum){
  const quantityBtn = document.getElementById(id);
  quantityBtn.addEventListener("click", function () {
  btnCalculation("inputQuantity", quantityNum, "castValue")
});
}

function btnCalculation(id, quantityNum, id2){
  const inputQuantity = document.getElementById(id).value;
  const quantityNumber = parseFloat(inputQuantity);
  const totalQuantity = quantityNumber + quantityNum;
  console.log(totalQuantity);
  document.getElementById(id).value = totalQuantity;

  // calculate
  // const castValue = document.getElementById(id2).innerText;
  // const castValueNumber = parseFloat(castValue);
  const totalItemCost = totalQuantity * 1219;
  document.getElementById(id2).innerText = totalItemCost;
}
