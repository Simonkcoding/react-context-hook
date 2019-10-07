import React from 'react';
import Navbar from './components/Navbar';
import Booklist from './components/BoookList';
import ThemeToggle from './components/ThemeToggle';
import ThemeContextProvider from './context/ThemeContext';
import AuthContextProvider from './context/AuthContext';
import Songlist from './components/Songlist';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <Booklist />
          <ThemeToggle />
        </ThemeContextProvider>
      </AuthContextProvider>
      <Songlist/>
    </div>
  );
}

export default App;
