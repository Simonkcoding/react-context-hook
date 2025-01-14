import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { BookContext } from '../context/BookContext';

export default function BoookList() {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const { books } = useContext(BookContext);
    return (
        <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
            <ul>
                {books.map(book => {
                    return (
                        <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>
                    )
                })}
            </ul>
        </div>
    )
}
