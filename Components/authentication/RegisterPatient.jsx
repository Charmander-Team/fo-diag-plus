import Button from "./../Button";


const RegisterPatient = () => {

    /** To submit **/
    const action = (event) => {
        event.preventDefault();
        console.log("inscription...")
    }

    return (
        <>
            <div className="w-full pl-24 ">
                <form className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                            Nom
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Nom"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
                            Prénom
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="password" placeholder="Prénom"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Tél
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="phone" placeholder="Téléphone"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="adress">
                            Adresse
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="adress" type="text" placeholder="Adresse"/>
                    </div>
                    <div className="mb-4 flex">
                        <div className="w-full mr-2">     
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                                Ville
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" placeholder="Ville"/>
                        </div>
                        <div className="w-full">     
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zip">
                                Code postal
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="zip" type="text" placeholder="CP"/>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Sexe
                        </label>
                        <div>
                            <span className="px-3">M :</span><input name="alcohol" value="M" type="radio"/>
                            <span className="px-3">F :</span><input name="alcohol" value="F" type="radio"/>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
                            Poids
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="weight" type="text" placeholder="Poids"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">
                            Taille
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="height" type="text" placeholder="Taille"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">
                            Origine
                        </label>
                        <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="origin">
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
                            Naissance
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="birthdate" type="text" placeholder="Date de naissance"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Tabac
                        </label>
                        <div>
                            <span className="px-3">Oui :</span><input name="tabacco" value="true" type="radio"/>
                            <span className="px-3">Non :</span><input name="tabacco" value="false" type="radio"/>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Alcool
                        </label>
                        <div>
                            <span className="px-3">Oui :</span><input name="alcohol" value="true" type="radio"/>
                            <span className="px-3">Non :</span><input name="alcohol" value="false" type="radio"/>
                        </div>
                    </div>
                    

                    <div className="flex items-center justify-between">
                        <button onClick={action} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            S&apos;inscrire
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default RegisterPatient;
