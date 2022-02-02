import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ScrollToTop from './ScrollToTop';
import Home from './Pages/Home/Home'
import Vip from './Pages/Vip/Vip'
import Store from './Pages/store/Store'
import VipTerms from './Pages/VipTerms/VipTerms'
import { Routes, Route } from "react-router-dom"
 const App = () => {


  return (
    <div>
      <Navbar style={{position: "-webkit-sticky"}}/>
      <ScrollToTop>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/vip" element={<Vip />} />
         <Route path="/vipterms" element={<VipTerms />} />
         <Route path="/store" element={<Store />} />
        </Routes>
        </ScrollToTop>
        <Footer />
        </div>
  );
}

export default App;
