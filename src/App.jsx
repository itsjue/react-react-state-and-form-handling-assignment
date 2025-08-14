import "./App.css";
import ProductForm from "./components/productForm";
import React from "react";
import GreetingBox from "./components/GreetingBox.jsx";

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        {/* <h1 className="app-title">Create Product</h1> */}
         <GreetingBox />
      </div>
      {/* <ProductForm /> */}
    </div>
  );
}

export default App;
