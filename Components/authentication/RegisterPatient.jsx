import AuthenticationContext from "../../Contexts/Authentication";
import {useContext} from "react";

const RegisterPatient = () => {

  const {handleInputChange} = useContext(AuthenticationContext);

  return (
    <>
      <div className="w-full pl-24 ">
        <div className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
              Poids
            </label>
            <input onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="weight" type="number" placeholder="75"/>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">
              Taille
            </label>
            <input onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="height" type="number" placeholder="180"/>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">
              Origine
            </label>
            <select onChange={handleInputChange}
                    id="origin"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="origin">
              <option value="">Région</option>
              <option value="europa">Europe</option>
              <option value="africa">Afrique</option>
              <option value="asia">Asie</option>
              <option value="america">Amerique</option>
              <option value="oceania">Oceanie</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthdate">
              Date de Naissance
            </label>
            <input onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="birthdate" type="text" placeholder="2022-12-31"/>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tabac
            </label>
            <div onChange={handleInputChange}>
              <span className="text-gray-700 px-3">Oui :</span>
              <input id="tobacco" name="tobacco" value="true" type="radio"/>
              <span className="text-gray-700 px-3">Non :</span>
              <input name="tobacco" value="false" type="radio"/>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Alcool
            </label>
            <div onChange={handleInputChange}>
              <span className="text-gray-700 px-3">Oui :</span>
              <input id="alcohol" name="alcohol" value="true" type="radio"/>
              <span className="text-gray-700 px-3">Non :</span>
              <input name="alcohol" value="false" type="radio"/>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default RegisterPatient;
