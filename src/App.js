import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Hero from './components/Hero';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';



function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Hero></Hero>
        <About></About>
        <Portfolio></Portfolio>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
