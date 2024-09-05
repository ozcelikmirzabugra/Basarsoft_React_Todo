import React, { useState } from 'react';
import './style.css'; 
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Header count={count} />
      <Body incrementCounter={incrementCounter} />
      <Footer />
    </div>
  );
}

export default App;
