import usersApi from "../src/services/routes/usersApi";
import {useEffect, useState} from 'react'
import Button from "./Button";

const Authentication = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const data = await usersApi.getUsers();
            setUser(data)
        }
        getUsers();
    }, [])

    return (
        <>
            <div className="">
                <Button label="Connexion"
                        classList="border-2 border-slate-400 bg-white hover:bg-slate-400 hover:text-white"/>
                <Button label="Inscription"
                        classList="border-2 border-slate-400 bg-white hover:bg-slate-400 hover:text-white"/>
            </div>
            {user.map(element => element.email)}
        </>
    );
}

export default Authentication;
