import React from 'react';
import Navbar from './components/Navbar';
import Booklist from './components/BoookList';
import ThemeToggle from './components/ThemeToggle';
import ThemeContextProvider from './context/ThemeContext';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
        <ThemeToggle/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
