import React from 'react';
import Navbar from './components/Navbar';
import Booklist from './components/BoookList';
import ThemeToggle from './components/ThemeToggle';
import ThemeContextProvider from './context/ThemeContext';
import AuthContextProvider from './context/AuthContext';
import BookContextProvider from './context/BookContext';
import Songlist from './components/Songlist';
import AgeContextProvider from './context/AgeContext';
import Age from './components/Age';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <BookContextProvider>
            <Booklist />
          </BookContextProvider>
          <ThemeToggle />
        </ThemeContextProvider>
      </AuthContextProvider>
      <Songlist />
      <AgeContextProvider>
        <Age/>
      </AgeContextProvider>
    </div>
  );
}

export default App;
