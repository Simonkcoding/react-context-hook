import React, { useState,useEffect } from 'react';
import uuid from 'uuid';
import NewSongForm from './NewSongForm';

export default function Songlist() {
    const [songs, setSong] = useState([
        { title: 'this wild darkness', id: 1 },
        { title: 'this wild darkness 2', id: 2 },
        { title: 'this wild darkness 3', id: 3 }
    ])
    const [age, setAge] = useState(20);
    const handleAge = () => {
        setAge(age + 1);
    }
    const addSong = (title) => {
        const newSong = { title, id: uuid() };
        setSong([...songs, newSong]);
    }
    useEffect(()=>{
        console.log('songEffect');
    },[songs])
    useEffect(()=>{
        console.log('ageEffect');
    },[age])
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (
                        <li key={song.id}>{song.title}</li>
                    )
                })}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={handleAge}>The age is now {age}</button>
        </div>
    )
}
