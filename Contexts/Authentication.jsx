import authentication from "./../src/services/routes/authentication";
import {createContext, useState, useEffect} from "react";

const AuthenticationContext = createContext();

const AuthenticationWrapper = ({ children }) => {

    //Process deconnexion
    const logoutClick = (event)=>{
        event.preventDefault()
        setLogin(false)
        localStorage.removeItem('tokenRefresh')
        localStorage.removeItem('tokenAccess')
    }

    // Process connexion début
    const [login,setLogin] = useState(false)
    const connectedUser = async (event,opts) => {
        event.preventDefault()
        console.log("e",event)
        console.log("opts",opts)
        const token = await authentication.byPostToken(opts)
        console.log("token",token)
        if(token){
            setLogin(true)
            localStorage.setItem('tokenRefresh', token.refresh)
            localStorage.setItem('tokenAccess', token.access)
            
            setConnection(false);
            setRegister(false);
        }
    }
    // Process connexion fin

    //Process refresh

    useEffect(() => {
        const token = localStorage.getItem("tokenRefresh")
        const refresh = async ()=>{
            const response =  await authentication.refresh(token)
            console.log("response",response)
            if(response.code != "token_not_valid"){
                localStorage.setItem("tokenAccess",response.access)
                setLogin(true)
            } 
            else
            {
                setLogin(false)
            }
        }
        
        if(token){
            refresh()
        }

    },[])

    const [connection, setConnection] = useState(false);
    const [register, setRegister] = useState(false);
    
    // const [idFor, setIdFor] = useState("");

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
        <AuthenticationContext.Provider value={{ connectionClick, connection, registerClick, register, resetState, handleChange, connectedUser, login, logoutClick}}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export { AuthenticationWrapper };
export default AuthenticationContext;
