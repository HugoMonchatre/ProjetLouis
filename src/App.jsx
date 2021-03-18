import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Accueil from './Users/NavBar'; // changer le chemin

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Accueil} />
    </Switch>
  );
}

export default App;
