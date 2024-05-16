import React from 'react';
import {useState} from 'react';
import './App.css';

function App() {
  let [cnt, setCnt] = useState(0);
  let ThumbClick = () => {
    setCnt(cnt + 1);
  };
  return (
    <div>
      <span onClick={ThumbClick} Style={"cursor:pointer"}>👍</span><span>{cnt}</span>      
    </div>
  );
}

export default App
