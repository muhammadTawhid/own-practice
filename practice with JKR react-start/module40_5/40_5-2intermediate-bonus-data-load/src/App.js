import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import MealDetail from "./components/MealDetail/MealDetail";
import SearchMeal from "./components/SearchMeal/SearchMeal";

function App() {
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState([]);
  const [randomUser, setRandomUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((data) => setUsers(data));

    // load single user
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => setSingleUser(data));

    // random user data load
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setRandomUser(data.results[0]));
  }, []);

  return (
    <div className="App">
      <h1>____________________________________________________________</h1>
      <h1>40_5-2handle multiple data loading style</h1>

      <h3>{singleUser.name}</h3>
      {users.map((user) => (
        <li>{user.name}</li>
      ))}
      <h3>random user gender" {randomUser.gender}</h3>
      <h3>
        random user name "nasted property access"{" "}
        {randomUser.name && randomUser.name.first}
      </h3>
      <h3>
        random user name "nasted property access" {randomUser.name?.first}
      </h3>
      <MealDetail />
      <SearchMeal />
    </div>
  );
}

export default App;
