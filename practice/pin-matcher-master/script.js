function handleGeneratePin() {
  const generateNumber = Math.random() * 10000;
  const generateRoundNumber = Math.round(generateNumber);
  document.getElementById("generatedNumber").value = generateRoundNumber;
}

function putPin(value) {
  const newNumber = value.toString();
  let beforeNumber = document.getElementById("givePin").value;
  const setNumber = beforeNumber + newNumber;
  document.getElementById("givePin").value = setNumber;
  if (value == "clearAll") {
    document.getElementById("givePin").value = "";
    document.getElementById("successNotify").style.display = "none";
    document.getElementById("wrongNotify").style.display = "none";
  }
}

function handleNotify() {
  const generatedNumber = document.getElementById("generatedNumber").value;
  const putNumber = document.getElementById("givePin").value;
  if (generatedNumber == putNumber) {
    document.getElementById("successNotify").style.display = "block";
    document.getElementById("wrongNotify").style.display = "none";
  } else {
    document.getElementById("wrongNotify").style.display = "block";
    document.getElementById("successNotify").style.display = "none";
  }
}

function handleRemoveChr() {
  const removeChr = document.getElementById("givePin").value;
  const removed = removeChr.slice(0, -1);
  document.getElementById("givePin").value = removed;
}

// function clearInput(){
//     document.getElementById("givePin").value = "";
// }
