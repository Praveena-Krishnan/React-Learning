import Message from "./Message";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import { Routes,Route } from "react-router-dom";
import Student from "./student";
function App(){
  return (
  <div><Message/>
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

    
    </div> 
  );
}
export default App;