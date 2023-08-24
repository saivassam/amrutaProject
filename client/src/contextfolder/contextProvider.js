import {useState} from 'react';
import Context from "./context";

const StateContext = ({children})=>{
const [state,setState] = useState("Pavan")
    return(

        <Context.Provider value={{state,setState}}>
            {children}
        </Context.Provider>

    )
}

export default StateContext;
