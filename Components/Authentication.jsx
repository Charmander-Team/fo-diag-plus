import usersApi from "../src/services/routes/usersApi";
import {useEffect, useState} from 'react'

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
            Authentication<br/>
            {user.map(element => element.email)}
        </>
    );
}

export default Authentication;
