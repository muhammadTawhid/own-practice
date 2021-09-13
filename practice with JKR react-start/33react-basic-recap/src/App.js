import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const friends =[
  //    {name: "jhon cena", age: 43}, {name: "hot cena", age:55}, {name: "cool cena"}, {name: "angry cena", age:17}
  // ]

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res =>res.json())
    .then(data =>  setUsers(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NetProduct/>
        {/* {
          friends.map(friend => <Friends name= {friend.name} age={friend.age}/> )
        } */}

        {
          users.map(user => <Friends name={user.name} age={user.age} key={user.id}/>)
        }
      </header>
    </div>
  );
}

function Friends(props){
  const {age, name} = props
  return (
    <div style={{border:"1px solid goldenrod", margin:"10px", padding:"30px",  backgroundColor:"black"}}>
      <h3>i'm  {name}</h3>
      <h4>i'm {age ||30} years old</h4>
    </div>
  )
}

function NetProduct(){
  const [count, setCount] = useState(0);

  function handleAddProduct(){
    return setCount(count + 1);
  }
  return (
    <div style={{border:"1px solid goldenrod"}}>
      <button onClick={handleAddProduct}>Add Product to Cart</button>
      <button onClick={() => setCount(count - 1)}>Remove Product from Cart</button>
      <h3>Product Available: {count}</h3>
      <ProductDisplay product={count}></ProductDisplay>
      <ProductDisplay product={count + 10}></ProductDisplay>
    </div>
  )
}

function ProductDisplay( props){
  // passing state value in different component
  return <h4> <small>it's different component</small> Product that i added in cart {props.product}</h4>
}

export default App;
