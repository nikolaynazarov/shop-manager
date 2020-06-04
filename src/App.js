import React from 'react';
import {
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import { Navigation } from './components/Navigation/Navigation';
// Pages
import HomePage from './pages/HomePage/HomePage'
import AddItemsPage from './pages/AddItemsPage/AddItemsPage'

function App({ history }) {
  return (
    <ThemeProvider>
      <Navigation />>
      <Switch>
        <div className="App">
          <Route path='/' component={ HomePage } exact />
          <Route path='/add-items' component={ AddItemsPage } />
        </div>
      </Switch>
    </ThemeProvider>
  );
}

export default withRouter(App);
