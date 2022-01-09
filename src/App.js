import React from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import './App.css';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import ContactForm from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import Home from './pages/Home';



function App() {

  return (
      <CssBaseline>
        <Router>
          <header>
            <Header></Header>
          </header>
          <main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/portfolio' component={Portfolio} />
              <Route exact path='/contact' component={ContactForm} />
              <Route exact path='/resume' component={Resume} />

              <Route render={() => <h1 className='display-2'>Wrong Page!</h1>} />
            </Switch>
          </main>
        </Router>
        <Footer />
      </CssBaseline>

  );
}

export default App;
