document.getElementById("first-plus").addEventListener("click", function(){
    const firstInput = document.getElementById("first-input");
    const firstInputNumber = parseFloat(firstInput.value);
    const newInputValue = firstInputNumber + 1;
    document.getElementById("first-input").innerText = newInputValue;
    console.log('newInputValue', newInputValue);
    const subtotalValue = newInputValue * 150;
    document.getElementById("subtotal").innerText = "$" + subtotalValue;
})