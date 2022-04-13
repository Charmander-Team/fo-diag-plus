import {createContext, useState} from "react";

const AuthenticationContext = createContext();

const AuthenticationWrapper = ({ children }) => {
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
        <AuthenticationContext.Provider value={{ connectionClick, connection, registerClick, register, resetState, handleChange}}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export { AuthenticationWrapper };
export default AuthenticationContext;
