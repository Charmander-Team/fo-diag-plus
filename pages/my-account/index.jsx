import AuthenticationContext from "../../Contexts/Authentication";
import {useContext} from "react";

const MyAccount = () => {

  let {userInfo} = useContext(AuthenticationContext);

  return (
    <>
      <h3>Mon compte</h3>

      <div>{userInfo.gender}</div>
      <div>{userInfo.last_name}</div>
      <div>{userInfo.first_name}</div>
      <div>{userInfo.birthdate}</div>
      <div>{userInfo.origin}</div>

      <div>{userInfo.height} cm</div>
      <div>{userInfo.weight} kg</div>

      <div>{userInfo.email}</div>
      <div>{userInfo.address}</div>
      <div>{userInfo.zipcode}</div>
      <div>{userInfo.telephone}</div>

      <div>{userInfo.smoking}</div>
      <div>{userInfo.alcohol}</div>
    </>
  )
}

export default MyAccount;
