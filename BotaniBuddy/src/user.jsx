import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = (props) => {

    const [userID, setUserID] = useState("")
    return <UserContext.Provider value={{userID, setUserID}}>{props.children}</UserContext.Provider>
}