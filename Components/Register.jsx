import Button from "./Button";
import AuthenticationContext from "../Contexts/Authentication";
import {useContext} from "react";

const Register = () => {

    const { resetState } = useContext(AuthenticationContext);

    return (
        <>
            Inscription Component

            <Button label="X Fermer"
                    classList="border-2 border-slate-400 bg-red-100 hover:bg-slate-400 hover:text-white"
                    onClick={resetState}/>

        </>
    );
}

export default Register;
