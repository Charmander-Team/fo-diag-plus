import Button from "./../Button";
import AuthenticationContext from "../../Contexts/Authentication";
import {useContext} from "react";

const Connection = () => {

    const {resetState,connectedUser} = useContext(AuthenticationContext);
    // const {connectedUser} = useContext(AuthenticationContext);

    let opts =  {
        email:"",
        password:""    
    }
    
    const handleChange= (e)=>{
        if(e.target.id=="username"){
            opts.email = e.target.value
        }
        
        if(e.target.id=="password"){
            opts.password = e.target.value
        }
    }

    return (
        <>
                <Button label="X Fermer"
                        classList="border-2 border-slate-400 bg-red-100 hover:bg-slate-400 hover:text-white mb-6"
                        onClick={resetState}/>

                <div className="w-full pl-24 ">
                    <form className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                        </div>
                        <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Mot de passe
                        </label>
                        <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                        </div>
                        <div className="flex items-center justify-between">
                        <button onClick={(event)=>{connectedUser(event,opts)}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Se connecter
                        </button>
                        </div>
                    </form>
                </div>
        </>
    );
}

export default Connection;