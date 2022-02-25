import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Components/header.js';
import FooterComponent from './Components/footer.js';
import NutribodyComponent from './Components/body/nutribody.js'
import React from "react";

function App() {
  return (
      <div className="App">
          <HeaderComponent />
          <div className="dtr-main-content text-left">
              <NutribodyComponent />
              <FooterComponent />
          </div>
      </div>
  );
}

export default App;
