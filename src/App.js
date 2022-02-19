import React from 'react';
import './App.css';
import Burger from './components/Burger';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header />
    <div className="burgerContent">
      <Burger />
    </div>
    </>
  );
}

export default App;
