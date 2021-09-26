import React, { useEffect, useState } from "react";

const SearchMeal = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [search]);
  return (
    <div>
      <p>
        ________________________________________________________________________________
      </p>
      <h1>40_5-6 Implement search functionality</h1>
      <input
        onChange={handleSearch}
        type="text"
        placeholder="search for meals"
      />
      <h3>Searching: {search}</h3>
      <h4>total meal found {meals?.length || 0}</h4>
      {meals?.map((meal) => {
        return (
          <div>
            <li>{meal.strMeal}</li>
            <img style={{ width: "150px" }} src={meal.strMealThumb} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default SearchMeal;
