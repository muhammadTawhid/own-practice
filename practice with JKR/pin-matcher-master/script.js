function getPin(){
    const random = Math.random() * 10000;
    const pin = (random + "").split(".")[0];
    if(pin.length == 4){
        return pin;
    }
    else{
       return getPin();
    }
}

// display generated pin
function generatePin(){
    const pinInput = document.getElementById("pin");
    pinInput.value = getPin();
}

// handle calculator btn event
const buttonContainer = document.getElementById("digits-container");
buttonContainer.addEventListener("click", function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        if(digit === 'C'){
            const typeInput = document.getElementById("typed-pin");
            typeInput.value = "";
        }
    }
    else{
        const typeInput = document.getElementById("typed-pin");
        typeInput.value = typeInput.value + digit;
        console.log(typeInput.value);
    }
})


function verifyPin(){
    const pin = document.getElementById("pin").value;
    const typePin = document.getElementById("typed-pin").value;

    if(pin === typePin){
        // const correct = document.getElementById("correct-pin")
        // correct.style.display = "block";
        // const incorrect = document.getElementById("incorrect-pin");
        // incorrect.style.display = "none";
        displayMatchResult("block", "none");
    }
    else{
        // const incorrect = document.getElementById("incorrect-pin");
        // incorrect.style.display = "block";
        // const correct = document.getElementById("correct-pin")
        // correct.style.display = "none";
        displayMatchResult("none", "block");

    }
}

function displayMatchResult(correctStatus, incorrectStatus ){
        const correct = document.getElementById("correct-pin")
        correct.style.display = correctStatus;
        const incorrect = document.getElementById("incorrect-pin");
        incorrect.style.display = incorrectStatus;
}