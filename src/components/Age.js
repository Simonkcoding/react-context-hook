import React, { useContext, useState } from 'react';
import { AgeContext } from '../context/AgeContext';

export default function Age() {
    const { age, dispatch
       // addAge, addFiveAge, addNumtoAge
     } = useContext(AgeContext);
    const [num, setNum] = useState(0);
    const handleNumChange = (e) => {
        setNum(e.target.value);
    }
    return (

        <div>
            <p>Your age is {age}</p>
            <button onClick={()=>dispatch({type:'add_one'})}>Add Age</button>
            <button onClick={()=>dispatch({type:'add_five'})}>Add 5 age</button>
            <input type="text" onChange={handleNumChange} value={num} />
            <button onClick={()=>dispatch({type:'add_num',num})}>Add a num age</button>
        </div>
    )
}
