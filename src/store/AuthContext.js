import { useState, createContext } from 'react'

export const AuthContext = createContext({
    user: {},
    setUser: () => { },
    accessToken: null,
    csrftoken: null,
    setAccessToken: () => { },
    setCSRFToken: () => { }
});

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({})
    const [accessToken, setAccessToken] = useState()
    const [csrftoken, setCSRFToken] = useState()

    return (
        <AuthContext.Provider value={{
            user, setUser,
            accessToken, setAccessToken,
            csrftoken, setCSRFToken,
            }}>
            {children}
        </AuthContext.Provider>
    )
}