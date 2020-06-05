import React from 'react';
import {
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import { Navigation } from './components/Navigation/Navigation';
// Pages
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import AddItemsPage from './pages/AddItemsPage/AddItemsPage'

function App({ history }) {
  return (
    <ThemeProvider>
      <Navigation />>
      <div className="App">
        <Switch>
          <Route path='/' component={ HomePage } exact />
          <Route path='/login' component={ LoginPage } />
          <Route path='/add-items' component={ AddItemsPage } />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default withRouter(App);
