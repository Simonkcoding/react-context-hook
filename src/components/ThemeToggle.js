import React, { Component } from 'react';
import {ThemeContext} from '../context/ThemeContext';

class ThemeToggle extends Component {
    static contextType = ThemeContext;
    state = {  }
    render() { 
        const {toggleTheme} = this.context;
        return ( 
            <button onClick={toggleTheme}>Toggle</button>
         );
    }
}
 
export default ThemeToggle;