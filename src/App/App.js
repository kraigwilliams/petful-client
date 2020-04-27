import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from '../Home/Home';
import Adoption from '../Adoption/Adoption'

class App extends Component {
  render(){ 
    return(
  <>
  <main className="App">
  <Switch>
  <Route
  exact path="/"
  component={Home}
  />

<Route
path="/adoption"
component={Adoption}
/>
</Switch>
  </main>
  </>
  )
}}

export default App
