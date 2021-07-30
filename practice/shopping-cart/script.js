//plus btn event handler
const plusBtn = document.getElementById("plusBtn");
plusBtn.addEventListener("click", function () {
  const inputQuantity = document.getElementById("inputQuantity").value;
  const quantityNumber = parseFloat(inputQuantity);
  // console.log(quantityNumber);
  const totalQuantity = quantityNumber + 1;
  document.getElementById("inputQuantity").value = totalQuantity;

  // calculate
  const castValue = document.getElementById("castValue").innerText;
  const castValueNumber = parseFloat(castValue);
  const totalItemCost = totalQuantity * 1219;
  document.getElementById("castValue").innerText = totalItemCost;
});

// minus btn event handler
const minusBtn = document.getElementById("minusBtn");
minusBtn.addEventListener("click", function () {
  const inputQuantity = document.getElementById("inputQuantity").value;
  const quantityNumber = parseFloat(inputQuantity);
  // console.log(quantityNumber);
  const totalQuantity = quantityNumber - 1;
  document.getElementById("inputQuantity").value = totalQuantity;

  // calculate
  const castValue = document.getElementById("castValue").innerText;
  const castValueNumber = parseFloat(castValue);
  const totalItemCost = totalQuantity * 1219;
  document.getElementById("castValue").innerText = totalItemCost;
});
