import React from 'react';
import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Comments from './components/Comments';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/' component={Feed} exact />
        <Route path='/profile' component={Profile} exact />
        <Route path='/users' component={Comments} exact />
      </div>
    </Router>
  );
}

export default App;
