/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { GetFromStorage, SetToStorage } from "../helpers";


const ProtectedRoutesContext = createContext({
    user: true,
    setUser: () => { },
    setToken: () => { },
    token: true,
});

export const useProtectedRoutesContext = () => useContext(ProtectedRoutesContext);

const ProtectedRoutesProvider = ({ children }) => {
    const [user, setUser] = useState(() => GetFromStorage("user") || null);
    const [token, setToken] = useState(() => GetFromStorage("token") || null);

    useEffect(() => {
        SetToStorage("user", user);
    }, [user]);

    useEffect(() => {
        SetToStorage("token", token);
    }, [token]);

    return (
        <ProtectedRoutesContext.Provider value={{ user, setUser, token, setToken }}>
            {children}
        </ProtectedRoutesContext.Provider>
    );
};

export default ProtectedRoutesProvider;
