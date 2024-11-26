import React,{useState} from "react";
import "./App.css";
import Message from "./Message";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import { Routes,Route } from "react-router-dom";
import Student from "./student";
import ProfileCard from "./Components/ProfileCard";

function App(){
  const users = [
    { id: 1, name: "Alice", age: 25, image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" },
    { id: 2, name: "Bob", age: 30, image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" },
    { id: 3, name: "Charlie", age: 35, image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg" },
  ];

  const [count,setCount]=useState(0);
  const [name,setName]=useState("");

  //event handlers
  const handleIncrement=()=>{
    setCount(count+1); };
  const handleReset=()=>{
    setCount(0);};
  const handleNameChnage=()=>{
    setName(event.target.value);
  };

  
  return (
  <div>
  <Message/>
  <>
    <Student name ="John" age={23} />
    <Student name ="Riya" age={22} />
    </>
  <Navbar/>
  
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
 </Routes>
 <div>
      <h1>Profile Cards</h1>
      <ProfileCard name="Alice" age={25} image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" />
      <ProfileCard name="Bob" age={30} image="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" />
      <ProfileCard name="Charlie" age={20} image="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg" />
  </div>
  <div>
      <h1>Profile Cards</h1>
      {users.map((user) => (
        <ProfileCard 
          key={user.id} 
          name={user.name} 
          age={user.age} 
          image={user.image} 
        />
      ))}
    </div>
    <div className="container">
      <div className="counter">
        <h1>Counter App</h1>
        <h2>Count: {count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="greeting-form">
        <h1>Greeeting Form</h1>
        <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChnage}/>
      <p>Hello, {name ? name : "Stranger"}!</p>
      </div>

    </div>
    </div> 
  );
}
export default App;