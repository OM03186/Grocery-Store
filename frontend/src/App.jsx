import React from 'react';
import Home from './home/Home';
import {Route, Routes} from "react-router-dom";
import Items from "./Items/Items"
import Signup from './Components/Signup';
import About from './Components/About';

function App() {
  return (<>
   <div className='dark:bg-slate-900 dark:text-white' >
   
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Item" element={<Items />}/>
    <Route path="/Signup" element={<Signup />}/>
    <Route path='/about' element={<About/>}/>
   
   </Routes>
   </div>
   </>);
}

export default App
