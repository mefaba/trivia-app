import React from 'react';
import { Switch, Route} from "react-router-dom";
import './App.css';
import GamePage from './pages/GamePage/GamePage';
import WelcomPage from './pages/WelcomePage/WelcomPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={WelcomPage} />
        <Route exact path="/game" component={GamePage} />
      </Switch>
    </div>
  );
}

export default App;
