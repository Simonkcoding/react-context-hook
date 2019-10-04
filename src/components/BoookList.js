import React, { Component } from 'react';
import ThemeContextProvider, { ThemeContext } from '../context/ThemeContext';

class Booklist extends Component {

    render() {
       
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
                return (
                    <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
                        <ul>
                            <li style={{ background: theme.ui }}>the ways of kings</li>
                            <li style={{ background: theme.ui }}>the final empire</li>
                        </ul>
                    </div>
                )
            }}
            </ThemeContext.Consumer>
        );
    }
}

export default Booklist;