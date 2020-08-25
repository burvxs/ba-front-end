import React from 'react';
import './App.css';
import {Route, HashRouter as Router} from 'react-router-dom'
import FlightResults from './components/FlightResults'
import SearchFlight from './components/SearchFlight';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/search" component={SearchFlight} />
        <Route exact path="/search/:query" component={FlightResults} />
      </Router>
    </div>
  );
}

export default App;
