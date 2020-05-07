import React from 'react';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import { Navigation } from './components/Navigation/Navigation';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import { ReactComponent as SomeIcon } from './icons/gear.svg'

function App() {
  return (
    <ThemeProvider>
      <Navigation />
      <div className="App">
        <Input />
        <Input type={ 'number' } />
        <Input type={ 'date' } />
        <Button icon={ <SomeIcon /> } />
      </div>
    </ThemeProvider>
  );
}

export default App;
