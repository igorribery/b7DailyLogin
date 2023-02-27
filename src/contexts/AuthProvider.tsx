import { ReactNode, useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { User } from "../types/user";
import { useApi } from "../hooks/useApi";

export const AuthProvider = ({ children }: {children: ReactNode}) => {
    const [user, setUser] = useState<User| null>(null);
    const api = useApi();

    useEffect(() => {
        validateToken();
    }, []);

    const validateToken = async () => {
        const storageData = localStorage.getItem('authToken');
        if(storageData) {
            const data = await api.validateToken(storageData)
            if(data.user) {
                setUser(data.user);
            }
        }
    }

    const signIn = async  (email: string, password: string) => {
        const data = await api.signIn(email, password);
        if(data.user && data.token) {
            setUser(data.user);
            setToken(data.token);
            return true;
        }
        return false;
    }
    const signOut = async () => {
        await api.signOut();
        setUser(null);
        setToken('');
        
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }


    return (
        <AuthContext.Provider value={{ user, signIn, signOut }} >
            {children}
        </AuthContext.Provider>
    )
}