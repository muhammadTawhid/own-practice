//plus btn event handler
btnActivity("plusBtn", 1);
btnActivity2("plusBtn2", 1);


// minus btn event handler
btnActivity("minusBtn", -1)
btnActivity2("minusBtn2", -1)


function btnActivity(id, quantityNum){
  const quantityBtn = document.getElementById(id);
  quantityBtn.addEventListener("click", function () {
  btnCalculation("inputQuantity", quantityNum, "castValue")
  // btnCalculation2("inputQuantity2", quantityNum, "castValue2")
});
}
function btnActivity2(id, quantityNum){
  const quantityBtn = document.getElementById(id);
  quantityBtn.addEventListener("click", function () {
  // btnCalculation("inputQuantity", quantityNum, "castValue")
  btnCalculation2("inputQuantity2", quantityNum, "castValue2")
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

function btnCalculation2(id, quantityNum, id2){
  const inputQuantity = document.getElementById(id).value;
  const quantityNumber = parseFloat(inputQuantity);
  const totalQuantity = quantityNumber + quantityNum;
  document.getElementById(id).value = totalQuantity;

  // calculate
  // const castValue = document.getElementById(id2).innerText;
  // const castValueNumber = parseFloat(castValue);
  const totalItemCost = totalQuantity * 59;
  document.getElementById(id2).innerText = totalItemCost;
  
  return totalItemCost;

}
