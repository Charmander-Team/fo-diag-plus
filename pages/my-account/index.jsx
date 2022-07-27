import AuthenticationContext from "../../Contexts/Authentication";
import {useContext} from "react";
import Button from "../../Components/Button";

const MyAccount = () => {

  let {userInfo, updateUser, updateInputValues} = useContext(AuthenticationContext);

  return (
    <>
      <h3>Mon compte</h3>

      Nom de famille : <input type="text" id="lastname" onChange={(event) => {
      updateInputValues(event, userInfo)
    }} defaultValue={userInfo.last_name}/>

      Prenom : <input type="text" id="firstname" onChange={(event) => {
      updateInputValues(event, userInfo)
    }} defaultValue={userInfo.first_name}/>

      <input type="text" id="birthdate" onChange={(event) => {
        updateInputValues(event, userInfo)
      }} defaultValue={userInfo.birthdate}/>

      <div>{userInfo.origin}</div>

      <input type="text" id="height" onChange={(event) => {
        updateInputValues(event, userInfo)
      }} defaultValue={userInfo.height}/> cm

      <input type="text" id="weight" onChange={(event) => {
        updateInputValues(event, userInfo)
      }} defaultValue={userInfo.weight}/> kg

      <div>{userInfo.email}</div>
      <div>{userInfo.address}</div>
      <div>{userInfo.zipcode}</div>
      <div>{userInfo.telephone}</div>

      <div>{userInfo.smoking}</div>
      <div>{userInfo.alcohol}</div>

      <Button label="Mettre à jour"
              onClick={(event) => {
                updateUser(event, userInfo)
              }}/>
    </>
  )
}

export default MyAccount;
