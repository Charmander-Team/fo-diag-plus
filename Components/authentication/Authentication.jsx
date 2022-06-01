// import usersApi from "./../../src/services/routes/usersApi";
// import {useContext, useEffect, useState} from 'react'
// import authentication from "./../../src/services/routes/authentication";
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

    let { connectionClick, registerClick, login, logoutClick } = useContext(AuthenticationContext);

    const [checked,setChecked] = useState(true)
    
    // const [loginRefresh,setloginRefresh] = useState(false)
    // useEffect(() => {
    //     const token = localStorage.getItem("tokenRefresh")
    //     console.log("login",login)
    //     const refresh = async ()=>{
    //         const response =  await authentication.refresh(token)
    //         console.log("response",response)
    //         if(response.code != "token_not_valid"){
    //             localStorage.setItem("tokenAccess",response.access)
    //             setloginRefresh(true)
    //         } 
    //         else
    //         {
    //             setloginRefresh(false)
    //         }
    //     }
        
    //     if(token){
    //         refresh()
    //     }

    // },[login])

    return (
        <>
            { 
                // (!login && !loginRefresh) || (!login && loginRefresh)?
                !login?
                <div className="auth flex w-fit h-fit">
                    <input id="toggle-on" className="toggle toggle-left" name="toggle" value="connexion" type="radio" defaultChecked={checked} onChange={() => setChecked(!checked)}/>
                    <label htmlFor="toggle-on" className="btnAuth" onClick={ connectionClick }>Connexion</label>
                    <input id="toggle-off" className="toggle toggle-right" name="toggle" value="inscription" type="radio" onChange={() => setChecked(!checked)}/>
                    <label htmlFor="toggle-off" className="btnAuth" onClick={ registerClick }>Inscription</label>
                </div>
                
                // :login || loginRefresh?
                :<div className="auth flex w-fit h-fit">
                    <span className="btnAuth hover" onClick={ logoutClick }>Déconnexion</span>
                </div>
                // :""
            }
        </>
    );
}

export default Authentication;
