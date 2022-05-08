// import usersApi from "./../../src/services/routes/usersApi";
// import {useContext, useEffect, useState} from 'react'
import {useContext, useState} from 'react'
import AuthenticationContext from "../../Contexts/Authentication";

const Authentication = () => {

    // const [user, setUser] = useState([]);
    // useEffect(() => {
    //     const getUsers = async () => {
    //         const data = await usersApi.getUsers();
    //         setUser(data)
    //     }
    //     getUsers();
    // }, [])

    const [checked,setChecked] = useState(true)

    let { connectionClick, registerClick } = useContext(AuthenticationContext);

    return (
        <>
            <div className="auth flex w-fit h-fit">
                <input id="toggle-on" className="toggle toggle-left" name="toggle" value="connexion" type="radio" defaultChecked={checked} onChange={() => setChecked(!checked)}/>
                <label htmlFor="toggle-on" className="btnAuth" onClick={ connectionClick }>Connexion</label>
                <input id="toggle-off" className="toggle toggle-right" name="toggle" value="inscription" type="radio" onChange={() => setChecked(!checked)}/>
                <label htmlFor="toggle-off" className="btnAuth" onClick={ registerClick }>Inscription</label>
            </div>
        </>
    );
}

export default Authentication;
