import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HomePage } from './pages/home-page/home-page.component';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={HomePage} />
      </Router>
    </div>
  );
};

export default App;
