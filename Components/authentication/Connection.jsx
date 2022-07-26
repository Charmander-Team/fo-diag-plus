import Button from "./../Button";
import AuthenticationContext from "../../Contexts/Authentication";
import {useContext} from "react";

const Connection = () => {

  const {resetAuthenticationState, connectUser} = useContext(AuthenticationContext);

  let credentials = {
    email: "",
    password: ""
  }

  const loadCredentials = (event) => {
    if ( event.target.id === "mail" ) {
      credentials.email = event.target.value
    }

    if ( event.target.id === "password" ) {
      credentials.password = event.target.value
    }
  }

  return (
    <>
      <Button label="X - Fermer"
              classList="border-2 border-slate-400 bg-white hover:bg-slate-400 hover:text-white"
              onClick={resetAuthenticationState}/>

      <div className="w-full pl-24 ">
        <form className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mail">
              Adresse mail
            </label>
            <input onChange={loadCredentials}
                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   id="mail" type="email" placeholder="coualan.yoann@gmail.com"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Mot de passe
            </label>
            <input onChange={loadCredentials}
                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                   id="password" type="password"/>
          </div>

          <div className="flex items-center justify-between">
            <Button onClick={ (event)=> { connectUser(event, credentials) } }
                    className="border-2 border-slate-400 bg-white hover:bg-slate-400 hover:text-white"
                    label="Se connecter"/>
          </div>
        </form>
      </div>
    </>
  );
}

export default Connection;
