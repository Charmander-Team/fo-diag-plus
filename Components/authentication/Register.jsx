import Button from "./../Button";
import AuthenticationContext from "./../../Contexts/Authentication";
import {useContext, useState} from "react";
import RegisterPatient from "./RegisterPatient";
import RegisterDoctor from "./RegisterDoctor";

const Register = () => {

    /** To close Authentication Component **/
    const {resetState} = useContext(AuthenticationContext);

    /** To manage radio role input **/
    const [role, setRole] = useState(null);
    const handleClick = (r) => {
        setRole(r.target.value);
    }

    return (
        <>

            <Button label="X - Fermer"
            classList="border-2 border-slate-400 bg-red-100 hover:bg-slate-400 hover:text-white mb-6"                    
            onClick={resetState}/>

            <form>

            <section className="register mb-4">
                <div>
                    <input type="radio" id="control_01" name="status" onClick={handleClick} value="Patient"/>
                    <label htmlFor="control_01">
                        <h2 className="mt-3">Patient</h2>
                        <p>Je suis un patient est je souhaite obtenir un diagnostique fiable en ligne</p>
                    </label>
                </div>
                <div>
                    <input type="radio" id="control_02" name="status" onClick={handleClick} value="Doctor"/>
                    <label htmlFor="control_02">
                        <h2 className="mt-3">Docteur</h2>
                        <p>Je suis un praticien et je souhaite effectuer des diagnostiques en ligne puis consulter mes patients</p>
                    </label>
                </div>
            </section>

                { role === "Patient" ? <RegisterPatient/> : ""}
                { role === "Doctor" ? <RegisterDoctor/> : ""}

            </form>
        </>
    );
}

export default Register;
