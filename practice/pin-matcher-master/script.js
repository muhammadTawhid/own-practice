function handleGeneratePin(){
    const generateNumber =   Math.random() * 10000;
    const generateRoundNumber = Math.round(generateNumber);
    document.getElementById("generatedNumber").value = generateRoundNumber;
}
 
// function putPin(){
//     const numbers = document.querySelectorAll(".button");
//     for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];

//     document.getElementById("givePin").value = element.innerHTML
    
//     console.log(element.innerHTML);
//     }
// }

function putPin(number){
    const newNumber = number.toString();

    let beforeNumber = document.getElementById("givePin").value;

    const setNumber = beforeNumber + newNumber;
    document.getElementById("givePin").value = setNumber;
}

function handleNotify(){
    const generatedNumber = document.getElementById("generatedNumber").value;
    const putNumber = document.getElementById("givePin").value;
    if(generatedNumber == putNumber){
        document.getElementById("successNotify").style.display = "block";
    }
    
    else{
        document.getElementById("wrongNotify").style.display = "block";
    }

    if(document.getElementById("wrongNotify").style.display = "block"){
        document.getElementById("successNotify").style.display = "none";
    }
}