// document.getElementById("first-plus").addEventListener("click", function(){
//     // const firstInput = document.getElementById("first-input");
//     // const firstInputNumber = parseInt(firstInput.value);
//     // const newInputValue = firstInputNumber + 1;
//     // document.getElementById("first-input").value = newInputValue;
//     // const subtotal = newInputValue * 150;
//     // document.getElementById("subtotal").innerText = "$" + subtotal;
//     handlePlusMinus(true);
// })

// document.getElementById("first-minus").addEventListener("click", function(){
//     // const firstInput = document.getElementById("first-input");
//     // const firstInputNumber = parseInt(firstInput.value);
//     // const newInputValue = firstInputNumber - 1;
//     // document.getElementById("first-input").value = newInputValue;
//     // const subtotal = newInputValue * 150;
//     // document.getElementById("subtotal").innerText = "$" + subtotal;
//     handlePlusMinus(false); 
// })

function handlePlusMinus(isIncrease, product){
    console.log(product);
    const firstInput = document.getElementById(product + "-input");
    const firstInputNumber = parseInt(firstInput.value);
    newInputValue = firstInputNumber;
    if(isIncrease == true){
        newInputValue = firstInputNumber + 1;
    }
    if(isIncrease == false && 0 < newInputValue){
        newInputValue = firstInputNumber - 1;
    }
    document.getElementById(product + "-input").value = newInputValue;
    const subtotal = newInputValue * 150;
    document.getElementById("subtotal").innerText = "$" + subtotal; 
}