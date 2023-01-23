import React, { useContext, useState } from "react";

const TokenContext = React.createContext();
export function useToken() {
    return useContext(TokenContext)
}

export function AuthenticationContext({children}) {
    const [token, setToken] = useState()

    return (
        <TokenContext.Provider value={[token, setToken]}>
            {children}
        </TokenContext.Provider>
    )
}

