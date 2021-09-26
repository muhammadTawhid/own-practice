import React, { useEffect, useState } from "react";

const MealDetail = () => {
  const [meal, setMeal] = useState();

  useEffect(() => {
    // url("www.themealdb.com/api/json/v1/1/lookup.php?i=52772")//// this url dont work cz there is no "https://"

    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
      .then((res) => res.json())
      .then((data) => setMeal(data.meals?.[0]))
      .then((err) => console.log(err, "no err found"));
  }, []);
  return (
    <div>
      <h1>________________________</h1>
      <h1>40_5-5 optional chaining</h1>
      <h3>optional chaining Meal Name: {meal?.strMeal}</h3>
    </div>
  );
};

export default MealDetail;
