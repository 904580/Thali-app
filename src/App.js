import './App.css';
import HomeContainer from './component/HomeContainer'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import React from "react";


function App() {
  return (
    <div className="App">
     <Navbar />
     
     <HomeContainer/>
     <Footer/>
       
    </div>
  );
}

export default App;
