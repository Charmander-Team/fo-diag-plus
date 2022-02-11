import UserApi from '../src/services/UserApi'
import { useEffect, useState } from 'react'


const Authentication = () => {

 const [user,setUser] = useState([])

 useEffect(()=>{
    const allUser = async()=>{
        const data = await UserApi.AllUser()
        setUser(data)
    }
    allUser()
 },[])

 return (
    <>
    Authentication<br/>
    {
    user.map(element=>element.email)
    }
    </>
);
}

export default Authentication;
