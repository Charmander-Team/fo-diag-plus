import {createContext, useState} from "react";

const AuthenticationContext = createContext();

const AuthenticationWrapper = ({ children }) => {
    const [connection, setConnection] = useState(false);
    const [register, setRegister] = useState(false);

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

    return (
        <AuthenticationContext.Provider value={{ connectionClick, connection, registerClick, register, resetState }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export { AuthenticationWrapper };
export default AuthenticationContext;
