import usersApi from "../src/services/routes/usersApi";
import {useEffect, useState} from 'react'
import Link from 'next/link'
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
                <Link href="/connection">
                    <Button classList="border-2 border-slate-400 bg-white hover:bg-slate-400 hover:text-white"
                            label="Connexion"/>
                </Link>
                <Link href="/register">
                    <Button classList="border-2 border-slate-400 bg-white hover:bg-slate-400 hover:text-white"
                            label="Inscription"/>
                </Link>
            </div>
            {user.map(element => element.email)}
        </>
    );
}

export default Authentication;
