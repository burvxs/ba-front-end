import React from 'react';
import './App.css';
import {Route, HashRouter as Router, Redirect} from 'react-router-dom'
import FlightResults from './components/FlightResults'
import SearchFlight from './components/SearchFlight';

class App extends React.Component {
  render(){
    return (
        <div className="App">
          <Router>
            <Redirect to="/search" from="/"/>
            <Route exact path="/search" component={SearchFlight}/>
            <Route exact path="/search/:id" component={FlightResults} />
          </Router>
      </div>
    )
  }
}

export default App;
