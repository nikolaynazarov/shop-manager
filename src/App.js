import React from 'react';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import { Navigation } from './components/Navigation/Navigation';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navigation />
      </div>
    </ThemeProvider>
  );
}

export default App;
