import React, { useState } from 'react'

export default function NewSongForm({addSong}) {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        addSong(title);
    }
    return (
      <form onSubmit={handleSubmit}>
          <label>Song name:</label>
          <input type="text" required onChange={e=>setTitle(e.target.value)}/>
       <input type="submit" value="add song"/>
      </form>
    )
}
