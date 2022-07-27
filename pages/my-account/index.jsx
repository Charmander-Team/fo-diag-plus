import AuthenticationContext from "../../Contexts/Authentication";
import {useContext} from "react";
import Button from "../../Components/Button";

const MyAccount = () => {

  let {userInfo, updateUser, updateInputValues, tokenState} = useContext(AuthenticationContext);

  return (
    <>
      <h3>Mon compte</h3>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
          Nom
        </label>
        <input onChange={(event) => {
          updateInputValues(event, userInfo)
        }} defaultValue={userInfo.last_name}
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="lastname" type="text"/>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
          Prénom
        </label>
        <input onChange={(event) => {
          updateInputValues(event, userInfo)
        }}
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
               id="firstname" type="text" defaultValue={userInfo.first_name}/>
      </div>

      <div className="mb-4 flex">
        <div className="w-full mr-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
            Poids
          </label>
          <input onChange={(event) => {
            updateInputValues(event, userInfo)
          }}
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="weight" type="number" defaultValue={userInfo.weight}/>
        </div>

        <div className="w-full">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">
              Taille
            </label>
            <input onChange={(event) => {
              updateInputValues(event, userInfo)
            }}
                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   id="height" type="number" defaultValue={userInfo.height}/>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
          Téléphone
        </label>
        <input onChange={(event) => {
          updateInputValues(event, userInfo)
        }}
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="phone" type="phone" defaultValue={userInfo.telephone}/>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Adresse postale
        </label>
        <input onChange={(event) => {
          updateInputValues(event, userInfo)
        }}
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="address" type="text" defaultValue={userInfo.address}/>
      </div>

      <div className="mb-4 flex">
        <div className="w-full mr-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
            Ville
          </label>
          <input onChange={(event) => {
            updateInputValues(event, userInfo)
          }}
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="city" type="text" defaultValue={userInfo.city}/>
        </div>

        <div className="w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zip">
            Code postal
          </label>
          <input onChange={(event) => {
            updateInputValues(event, userInfo)
          }}
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="zip" type="number" defaultValue={userInfo.zipcode}/>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Mot de Passe
        </label>
        <input onChange={(event) => {
          updateInputValues(event, userInfo)
        }}
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="password" type="password"/>
      </div>

      <Button label="Mettre à jour"
              onClick={(event) => {
                updateUser(event, tokenState, userInfo)
              }}
              classList="border-2 border-slate-400 bg-white hover:bg-slate-400 hover:text-white"
      />
    </>
  )
}

export default MyAccount;
