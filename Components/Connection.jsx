import Button from "./Button";
import AuthenticationContext from "../Contexts/Authentication";
import {useContext} from "react";

const Connection = () => {

    const {resetState} = useContext(AuthenticationContext);

    const action = (event) => {
        event.preventDefault();
        console.log("connexion...")
    }

    return (
        <>

            <Button label="X Fermer"
                    classList="border-2 border-slate-400 bg-red-100 hover:bg-slate-400 hover:text-white"
                    onClick={resetState}/>

            <form>

                <input className="border-2 border-slate-400 rounded-lg" name="login" type="email"
                       placeholder="exemple@mail.com"/>

                <input className="border-2 border-slate-400 rounded-lg" name="password" type="password"
                       placeholder="Mot de passe"/>

                <Button label="Connexion"
                        classList="border-2"
                        onClick={action}/>

            </form>

        </>
    );
}

export default Connection;
