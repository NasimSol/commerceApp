import React from 'react';
import Navbar from './Navbar';

import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Products from './Products';
import Contact from './Contact';
import About from './About';
import Product from './Product';

const App= () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" exact element={<Home/>}/>
            
         

          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product/>}/>
           

          <Route path="/about"  element={<About/>}/>
          

          <Route path="/contact" element={<Contact />} />
          
            
         </Routes>
    </Router>
      
   </React.Fragment>
  )
}

export default App