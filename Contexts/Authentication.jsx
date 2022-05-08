import authentication from "./../src/services/routes/authentication";
import {createContext, useState} from "react";

const AuthenticationContext = createContext();

const AuthenticationWrapper = ({ children }) => {
    // Process connexion début
    const [login,setLogin] = useState(false)
    const connectedUser = async (event,opts) => {
        event.preventDefault()
        console.log("e",event)
        console.log("opts",opts)
        const token = await authentication.byPostToken(opts)
        console.log("token",token)
        if(token){setLogin(true)}
    }
    // Process connexion fin

    const [connection, setConnection] = useState(false);
    const [register, setRegister] = useState(false);
    
    const [idFor, setIdFor] = useState("");

    const connectionClick = () => {
        setConnection(true);
        setRegister(false);
    }

    const registerClick = () => {
        setConnection(false);
        setRegister(true);
    }

    const resetState = () => {
        setConnection(false);
        setRegister(false);
    }

    const handleChange = (event) => {
        console.log(event)
        
        if(event.target.value==="connexion"){
            connectionClick()
        }
        
        if(event.target.value==="inscription"){
            registerClick()
        }
    }

    return (
        <AuthenticationContext.Provider value={{ connectionClick, connection, registerClick, register, resetState, handleChange, connectedUser, login}}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export { AuthenticationWrapper };
export default AuthenticationContext;
