import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProviderComp = ({ children }) => {
    const [loggedIn, setIsloggedin] = useState(true);

    return (<AuthContext.Provider value={{ loggedIn, setIsloggedin }}>
        {children}
    </AuthContext.Provider>);

}

export default AuthProviderComp;