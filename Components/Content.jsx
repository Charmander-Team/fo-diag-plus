import Connection from "./authentication/Connection";
import Register from "./authentication/Register";
import {useContext} from "react";
import AuthenticationContext from "../Contexts/Authentication";

const Content = ({Component, pageProps}) => {

    const {connection, register} = useContext(AuthenticationContext);

    let content;
    if (connection) {
        content = <Connection/>;
    } else if (register) {
        content = <Register/>;
    } else {
        content = <Component {...pageProps} />;
    }

    return (
        <>
            {content}
        </>
    );
}

export default Content;
