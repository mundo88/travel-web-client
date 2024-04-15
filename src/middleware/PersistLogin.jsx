import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth' 
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
        loading ? <div className='h-screen w-screen flex items-center justify-center flex-col'>
            <h1 className='md:text-8xl font-black text-4xl animate-bounce'>Vietmaytour.com</h1>
        </div> : <Outlet />
    )
}
