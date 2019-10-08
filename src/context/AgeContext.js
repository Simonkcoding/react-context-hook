import React, { createContext, useReducer } from 'react'
export const AgeContext = createContext();

const ageReducer = (state, action) => {
    switch (action.type) {
        case 'add_one':
            return state + 1;
        case 'add_five':
            return state + 5;
        case 'add_num':
            return state + parseInt(action.num) ;
        default:
            return state;
    }
}

export default function AgeContextProvider(props) {
    //const [age, setAge] = useState(20);

    const [age, dispatch] = useReducer(ageReducer, 20)

    // const addAge = () => {
    //     setAge(age + 1);
    // }
    // const addFiveAge = () => {
    //     setAge(age + 5);
    // }
    // const addNumtoAge = (num) => {
    //     setAge(age + parseInt(num));
    // }
    return (
        <AgeContext.Provider value={{ age, dispatch
        // addAge, addFiveAge, addNumtoAge
         }}>
            {props.children}
        </AgeContext.Provider>
    )
}
