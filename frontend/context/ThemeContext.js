"use client"

import { createContext, useContext, useEffect, useState } from "react";
export const userContext = createContext();
export default UserProvider = ({ children }) => {
     return(
        <userContext.Provider value={{ user, loading, updateUser, clearUser}}>
            {children}
        </userContext.Provider>
    )
};

export const useUser = () => useContext(userContext);

//  cannot use context api and redux on server components