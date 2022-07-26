import Button from "./../Button";
import AuthenticationContext from "./../../Contexts/Authentication";
import {useContext, useState} from "react";
import RegisterPatient from "./RegisterPatient";
import RegisterDoctor from "./RegisterDoctor";

const Register = () => {

  /** To close Authentication Component **/
  const {resetState, registerUser, loadInputValues, formattedInputValues} = useContext(AuthenticationContext);

  /** To manage radio role input **/
  const [role, setRole] = useState(null);
  const handleClick = (r) => {
    setRole(r.target.value);
  }

  return (
    <>

      <Button label="X - Fermer"
              classList="border-2 border-slate-400 bg-white hover:bg-slate-400 hover:text-white"
              onClick={resetState}/>

      <form>
        <div className="w-full pl-24 ">
          <div className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                Nom
              </label>
              <input onChange={loadInputValues}
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="lastname" type="text" placeholder="COUALAN"/>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
                Prénom
              </label>
              <input onChange={loadInputValues}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="firstname" type="text" placeholder="Yoann"/>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mail">
                Adresse mail
              </label>
              <input onChange={loadInputValues}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="mail" type="email" placeholder="coualan.yoann@gmail.com"/>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input onChange={loadInputValues}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password" type="password"/>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Téléphone
              </label>
              <input onChange={loadInputValues}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone" type="phone" placeholder="+33601020304"/>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                Adresse postale
              </label>
              <input onChange={loadInputValues}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address" type="text" placeholder="25 Rue Claude Tillier"/>
            </div>

            <div className="mb-4 flex">
              <div className="w-full mr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                  Ville
                </label>
                <input onChange={loadInputValues}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="city" type="text" placeholder="Paris"/>
              </div>

              <div className="w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zip">
                  Code postal
                </label>
                <input onChange={loadInputValues}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="zip" type="number" placeholder="75012"/>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Sexe
              </label>
              <div onChange={loadInputValues}>
                <span className="px-3">M :</span><input id="male" name="gender" value="M" type="radio"/>
                <span className="px-3">F :</span><input name="gender" value="F" type="radio"/>
              </div>
            </div>

          </div>
        </div>

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
              <p>Je suis un praticien et je souhaite effectuer des diagnostiques en ligne puis consulter mes
                patients</p>
            </label>
          </div>
        </section>

        {role === "Patient" ? <RegisterPatient/> : ""}
        {role === "Doctor" ? <RegisterDoctor/> : ""}

        <div className="flex items-center justify-between">
          <Button label="S'inscrire"
                  onClick={ (event)=> { registerUser(event, formattedInputValues) } }
                  classList="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"/>
        </div>

      </form>
    </>
  );
}

export default Register;
