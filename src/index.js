import React, {} from 'react';
import ReactDOM from "react-dom";
import './index.css';
import VietNamMap from './App';

function App() {
  return (
    <div>
      <VietNamMap />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
