import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Private = () => {

    const auth = useContext(AuthContext);
    return (
        <div>
            <h2>
                Página Privada

                <p>Olá {auth.user?.name}, tudo bem?</p>
            </h2>
        </div>
    )
}

export default Private;