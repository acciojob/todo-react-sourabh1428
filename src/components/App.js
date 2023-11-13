
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./child";
import Hero from "./hero";


const App = () => {


 
  return (
    <div className="outer">
        {/* Do not remove the main div */}
      <h1>TO DO LIST</h1>

      <Hero/>
    

    </div>
  )
}

export default App
