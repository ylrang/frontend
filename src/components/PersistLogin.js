import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import useRefreshToken from '../hooks/useRefreshToken'
import useLogout from '../hooks/useLogout'

export default function PersistLogin() {
    const { accessToken, setUser } = useAuth()
    const refresh = useRefreshToken()
    const [loading, setLoading] = useState(true)
    const axiosPrivate = useAxiosPrivate()
    const logout = useLogout()

    useEffect(() => {
        let isMounted = true
    
        async function verifyUser() {
            // if (!isLoggedIn) {
            //     isMounted && setLoading(false)
            //     return
            // }
    
            try {
                await refresh()
                const data = await axiosPrivate.get('user')
                console.log("User Data: ", data)
                setUser(data)
            } catch (error) {
                console.log(error?.response)
            } finally {
                isMounted && setLoading(false)
            }
        }
    
        !accessToken ? verifyUser() : setLoading(false)
    
        return () => {
            isMounted = false
        }
    }, [])

    return (
        loading ? "Loading" : <Outlet />
    )
}