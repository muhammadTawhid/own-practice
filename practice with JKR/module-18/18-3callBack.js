function callBack(name, age, bap) {
  console.log("name-", name);
  console.log("age", age);
  bap();
}

function callBackAbi() {
  console.log("se mofiz er pula");
}

function callBackSki() {
  console.log("se jakir er pula");
}

callBack("abir", 18, callBackAbi);
callBack("sakib", 16, callBackSki);
