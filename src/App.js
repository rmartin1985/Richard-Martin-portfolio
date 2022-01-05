import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
// import Hero from './components/Hero';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import ContactForm from './pages/Contact';
import Resume from './pages/Resume';



function App() {
  return (
    <Router>
      <div>
        <Header></Header>

        <main>
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/about' component={About} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/contact' component={ContactForm} />
            <Route exact path='/resume' component={Resume} />
            
            <Route render={() => <h1 className='display-2'>Wrong Page!</h1>} />
          </Switch>
        </main>


      </div>
    </Router>
  );
}

export default App;
