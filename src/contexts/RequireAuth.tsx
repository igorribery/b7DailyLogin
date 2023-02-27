import { ReactNode, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Login } from "../Pages/Login";

export const RequireAuth = ({ children }: {children: ReactNode}) => {
    const auth = useContext(AuthContext);

    if(!auth.user) {
        return <Login />
    }

    return <> {children} </>;
}