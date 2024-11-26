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

    
    </div> 
  );
}
export default App;