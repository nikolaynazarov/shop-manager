import React from 'react';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import { Navigation } from './components/Navigation/Navigation';
import ItemsAddForm from './components/ItemsAddForm/ItemsAddForm';
import ItemsList from './components/ItemsList/ItemsList';

function App() {
  return (
    <ThemeProvider>
      <Navigation />
      <div className="App">
        <ItemsAddForm />
        <ItemsList />
      </div>
    </ThemeProvider>
  );
}

export default App;
