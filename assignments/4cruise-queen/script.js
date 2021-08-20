function handlePlusMinus(isIncrease, product){
    const inputValue = document.getElementById(product + "-input").value;
    const inputValueNumber = parseInt(inputValue);
    let newInputValue = inputValueNumber;
    if(isIncrease == true){
        newInputValue = inputValueNumber + 1;
    }
    else if(isIncrease == false && inputValueNumber > 0){
        newInputValue = inputValueNumber - 1;
    }
    document.getElementById(product + "-input").value = newInputValue;
    calculateTotal();
}

function calculateTotal(){
    const firstQuantity = getQuantity("first");
    const secondQuantity = getQuantity("second");

    const subtotal = (firstQuantity * 150) + (secondQuantity * 100);
    document.getElementById("subtotal").innerText = "$" + subtotal;
    document.getElementById("confirmation-subtotal").innerText = "$" + subtotal;

    const vat = Math.round(subtotal * 0.1);
    document.getElementById("vat").innerText = vat;
    document.getElementById("confirmation-vat").innerText = vat;

    const total = subtotal + vat;
    document.getElementById("total").innerText = total;
    document.getElementById("confirmation-total").innerText = total;

}

function getQuantity(product){
    const inputValue = document.getElementById(product + "-input").value;
    const inputValueNumber = parseInt(inputValue);
    return inputValueNumber;
}