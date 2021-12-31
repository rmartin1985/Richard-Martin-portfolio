import React from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Nav from './components/Nav';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Hero></Hero>
        <About></About>
      </main>
    </div>
  );
}

export default App;
