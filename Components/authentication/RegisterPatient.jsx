const RegisterPatient = () => {

    return (
        <>

            <form>

                <div>
                    Poids:
                    <input className="border-2 border-slate-400 rounded-lg" name="weight" type="number"
                           placeholder="60"/> kg
                </div>

                <div>
                    Taille:
                    <input className="border-2 border-slate-400 rounded-lg" name="height" type="number"
                           placeholder="170"/> cm
                </div>

                <div>
                    Origine:
                    <select className="border-2 border-slate-400 rounded-lg" name="origin">
                        <option value="europa">Europe</option>
                        <option value="africa">Afrique</option>
                        <option value="asia">Asie</option>
                        <option value="america">Amerique</option>
                        <option value="oceania">Oceanie</option>
                    </select>
                </div>

                <div>
                    Naissance:
                    <input className="border-2 border-slate-400 rounded-lg" name="birthdate" type="date"/>
                </div>

                <div>
                    Tabac:
                    <input className="border-2 border-slate-400 rounded-lg" name="tobacco" type="checkbox"/>
                </div>

                <div>
                    Alcool:
                    <input className="border-2 border-slate-400 rounded-lg" name="alcohol" type="checkbox"/>
                </div>

            </form>

        </>
    );
}

export default RegisterPatient;
