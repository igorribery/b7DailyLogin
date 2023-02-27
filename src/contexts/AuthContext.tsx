import { createContext } from "react";
import { User } from "../types/user";

export interface AuthContext {
    user: User | null,
    signIn: (email: string, password: string) => Promise<boolean>,
    signOut: () => void
}


export const AuthContext = createContext<AuthContext>(null!);