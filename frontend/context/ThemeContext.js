"use client"

import { createContext, useContext, useEffect, useState } from "react";
export const userContext = createContext();
const UserProvider = ({ children }) => {
     return(
        <userContext.Provider >
            {children}
        </userContext.Provider>
    )
};
// value={{ user, loading, updateUser, clearUser}}
export const useUser = () => useContext(userContext);
export default UserProvider
//  cannot use context api and redux on server components