import Button from "./Button";
import AuthenticationContext from "../Contexts/Authentication";
import {useContext, useState} from "react";

const Register = () => {

    /** To close Authentication Components **/
    const {resetState} = useContext(AuthenticationContext);

    /** To manage radio role input **/
    const [role, setRole] = useState(null);
    const handleClick = (r) => {
        setRole(r.target.value);
    }

    /** To submit form **/
    const action = (event) => {
        event.preventDefault();
        console.log("inscription...")
    }

    return (
        <>

            <Button label="X Fermer"
                    classList="border-2 border-slate-400 bg-red-100 hover:bg-slate-400 hover:text-white"
                    onClick={resetState}/>

            <form>

                <input className="border-2 border-slate-400 rounded-lg" name="lastname" type="text"
                       placeholder="DOE" required/>

                <input className="border-2 border-slate-400 rounded-lg" name="firstname" type="text"
                       placeholder="John" required/>

                <input className="border-2 border-slate-400 rounded-lg" name="phone" type="tel"
                       placeholder="0123456789" required/>

                <input className="border-2 border-slate-400 rounded-lg" name="address" type="text"
                       placeholder="1, rue du diagnostique" required/>

                <input className="border-2 border-slate-400 rounded-lg" name="city" type="text"
                       placeholder="Paris" required/>

                <input className="border-2 border-slate-400 rounded-lg" name="zip" type="number"
                       placeholder="75000" required/>

                <div>
                    <input type="radio" name="status" onClick={handleClick} value="Patient"/> Patient
                    <input type="radio" name="status" onClick={handleClick} value="Doctor"/> Médecin
                </div>

                { role === "Patient" ? "PATIENT" : ""}
                { role === "Doctor" ? "MEDECIN" : ""}

                <Button label="S'inscrire"
                        classList="border-2"
                        onClick={action}/>

            </form>

        </>
    );
}

export default Register;
