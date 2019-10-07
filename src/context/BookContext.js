import React, { createContext, useState } from 'react'
import uuid from 'uuid';

export const BookContext = createContext();

export default function BookContextProvider(props) {
    const [books, setBooks] = useState([
        { title: 'the ways of kings', id: uuid() },
        { title: 'the ways of queens', id: uuid() },
        { title: 'the ways of jacks', id: uuid() }
    ])
    return (
        <BookContext.Provider value={{ books }}>
            {props.children}
        </BookContext.Provider>
    )
}
