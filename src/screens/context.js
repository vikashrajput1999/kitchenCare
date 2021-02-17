import React from 'react'
const initialState = {
    'Food Preparation Equipment':[],
    'Storage Equipment':[],
    'Serving Equipment':[],
    'Cooking Equipment':[],
    'Miscellaneous Equipment':[],
}
export const TakeHolidayContext = React.createContext(null)
export default function Context(props) {
    const [state, setState] = React.useState(initialState)
    return (
        <TakeHolidayContext.Provider value={{state,setState}}>
            {props.children}
        </TakeHolidayContext.Provider>
    )
}
