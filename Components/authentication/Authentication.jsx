import {useContext, useState} from 'react'
import AuthenticationContext from "../../Contexts/Authentication";

const Authentication = () => {

  let {connectionClick, registerClick, login, logoutClick} = useContext(AuthenticationContext);

  const [checked, setChecked] = useState(true)

  return (
    <>
      {
        !login ?
          <div className="auth flex w-fit h-fit">
            <input id="toggle-on" className="toggle toggle-left" name="toggle" value="connexion" type="radio"
                   defaultChecked={checked} onChange={() => setChecked(!checked)}/>
            <label htmlFor="toggle-on" className="btnAuth" onClick={connectionClick}>Connexion</label>
            <input id="toggle-off" className="toggle toggle-right" name="toggle" value="inscription" type="radio"
                   onChange={() => setChecked(!checked)}/>
            <label htmlFor="toggle-off" className="btnAuth" onClick={registerClick}>Inscription</label>
          </div>
          :
          <div className="auth flex w-fit h-fit">
            <span className="btnAuth hover" onClick={logoutClick}>Déconnexion</span>
          </div>
      }
    </>
  );
}

export default Authentication;
