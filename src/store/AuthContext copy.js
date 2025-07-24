import { useState, createContext } from 'react'

export const AuthContext = createContext({
    user: {},
    setUser: () => { },
    accessToken: null,
    csrfToken: null,
    setAccessToken: () => { },
    setCSRFToken: () => { }
});

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({})
    const [accessToken, setAccessToken] = useState()
    const [csrfToken, setCSRFToken] = useState()

    return (
        <AuthContext.Provider value={{
            user, setUser,
            accessToken, setAccessToken,
            csrfToken, setCSRFToken,
            }}>
            {children}
        </AuthContext.Provider>
    )
}