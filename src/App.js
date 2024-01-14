import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactUs from './Pages/ContactUs'
import OurCustomers from './Pages/OurCustomers'
import Home from './Pages/Home'
import Products from './Pages/Products'

function App() {
  return (
    <div>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Products" element={<Products/>} />
                <Route path="/OurCustomers" element={<OurCustomers/>}/>
                <Route path="/ContactUs" element={<ContactUs />} />
            </Routes>
        </BrowserRouter>
    </div> 
  );
}

export default App;
