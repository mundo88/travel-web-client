import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth' 
import useAxiosPrivate from '../hooks/useAxiosPrivate' 
import useRefreshToken from '../hooks/useRefreshToken' 

export default function PersistLogin() {
    const refresh = useRefreshToken()
    const { accessToken} = useAuth()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let isMounted = true
        async function verifyUser() {
            try {
                await refresh()
                setLoading(true)
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
