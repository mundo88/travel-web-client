import { createContext, useEffect, useState } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate';



export const AuthContext = createContext({
    currentUser: null,
    setCurrentUser: () => { },
    accessToken: null,
    refreshToken: null,
    csrftoken: null,
    setAccessToken: () => { },
    setRefreshToken: () => { },
    setCSRFToken: () => { }
});


export function AuthContextProvider({children,props}) {
    const [currentUser, setCurrentUser] = useState({})
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [csrftoken, setCSRFToken] = useState()
    const axiosPrivateInstance = useAxiosPrivate()
    useEffect(() => {
        if (accessToken) {
            getCurrentUser();
        }
    }, [accessToken]);

    const getCurrentUser = async () => {
        try {
            const { data } = await axiosPrivateInstance.get('users/me')
            setCurrentUser(data);
        } catch (error) {
            setCurrentUser(null);
        }
    };
    return <AuthContext.Provider value={{
        currentUser, setCurrentUser,
        accessToken, setAccessToken,
        refreshToken, setRefreshToken,
        csrftoken, setCSRFToken
    }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext
