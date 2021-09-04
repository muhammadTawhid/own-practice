fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((res) => res.json())
  .then((data) => showMealDetails(data.meals));

const showMealDetails = (data) => {
  data.forEach((meal) => {
    const mealsDiv = document.getElementById("allMeals");
    const div = document.createElement("div");
    div.className = "mealDiv";
    const mealDetails = `
        <img onclick = "showDetails('${meal.strMeal}')" src="${meal.strMealThumb}"/>
        <h3 onclick = "showDetails('${meal.strMeal}')">${meal.strMeal}</h3>
        `;
    div.innerHTML = mealDetails;
    mealsDiv.appendChild(div);
  });
};

const searchName = () => {
  const name = document.getElementById("nameInput").value;
  showDetails(name);
};

// document.getElementById("allMeals").addEventListener("click", function(){
//     const name = event.target.innerText
//     showDetails(name);
// })
////extend of this we use onclick on 13, 14

const showDetails = (name) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then((res) => res.json())
    .then((data) => showPerMealDetails(data.meals));
};

const showPerMealDetails = (data) => {
  data.forEach((meal) => {
    const mealDetails = document.getElementById("mealDetails");
    mealDetails.className = "mealDiv";

    mealDetails.innerHTML = `
        <img src="${meal.strMealThumb}" />
        <br/>
        <a href=" ${meal.strYoutube}">click to watch on YT --></a>
        <h3>${meal.strMeal}</h3>
        <p>${meal.strIngredient1} ${meal.strMeasure1}</p>
        <p>${meal.strIngredient2} ${meal.strMeasure2}</p>
        <p>${meal.strIngredient3} ${meal.strMeasure3}</p>
        <p>${meal.strIngredient4} ${meal.strMeasure4}</p>
        <p>${meal.strIngredient5} ${meal.strMeasure5}</p>
        `;
  });
};
