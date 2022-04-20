import { createContext } from "react";
import { useUserValues } from "../hooks/useUserValues";

const userContext = createContext({});

export function Provider(props){
    const userValues = useUserValues();

    return(
        <userContext.Provider value={userValues}>{props.children}</userContext.Provider>
    )
}

export default userContext;