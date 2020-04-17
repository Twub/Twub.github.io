import React, { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

const UserContextProvider = (props) => {
    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const values = {
        user,
        isLoggedIn,
        setUser,
        setIsLoggedIn
    }

    return (
        <UserContext.Provider value={values}>
            { props.children }
        </UserContext.Provider>
    )
}