document.getElementById("first-plus").addEventListener("click", function(){
    const firstInput = document.getElementById("first-input");
    const firstInputNumber = parseFloat(firstInput.value);
    const newInputValue = firstInputNumber + 1;
    document.getElementById("first-input").value = newInputValue;
    const subtotalValue = newInputValue * 150;
    document.getElementById("subtotal").innerText = "$" + subtotalValue;
})

document.getElementById("first-minus").addEventListener("click", function(){
    const firstInput = document.getElementById("first-input");
    const firstInputNumber = parseInt(firstInput.value);
    const newInputValue = firstInputNumber - 1;
    document.getElementById("first-input").value = newInputValue;
    const subtotal = newInputValue * 150;
    document.getElementById("subtotal").innerText = subtotal;
})