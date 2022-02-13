import usersApi from "../src/services/routes/usersApi";
import {useContext, useEffect, useState} from 'react'
import Button from "./Button";
import AuthenticationContext from "../Contexts/Authentication";

const Authentication = () => {

    const [user, setUser] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            const data = await usersApi.getUsers();
            setUser(data)
        }
        getUsers();
    }, [])

    const { connectionClick, registerClick } = useContext(AuthenticationContext);

    return (
        <>
            <div className="">
                <Button label="Connexion"
                        classList="border-2 border-slate-400 bg-white hover:bg-slate-400 hover:text-white"
                        onClick={ connectionClick }/>
                <Button label="Inscription"
                        classList="border-2 border-slate-400 bg-white hover:bg-slate-400 hover:text-white"
                        onClick={ registerClick }/>
            </div>
            {user.map(element => element.email)}
        </>
    );
}

export default Authentication;
