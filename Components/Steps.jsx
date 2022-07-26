import Button from "./Button";

const Steps = () => {

  return (
    <div className="border-2 border-slate-400 rounded">

      <div className="bg-slate-400 text-white text-center py-2 px-4">VOTRE DIAGNOSTIQUE EN 5 ETAPES</div>

      <div>

        <div className="p-2 flex flex-row justify-center gap-16">
          <div className="text-2xl pr-2 pl-2 border border-slate-400 rounded-full"> 1</div>
          <div className="text-2xl pr-2 pl-2 border border-slate-400 rounded-full bg-slate-400 text-white">2
          </div>
          <div className="text-2xl pr-2 pl-2 border-slate-400 border rounded-full">3</div>
          <div className="text-2xl pr-2 pl-2 border-slate-400 border rounded-full">4</div>
          <div className="text-2xl pr-2 pl-2 border-slate-400 border rounded-full">5</div>
        </div>

        <div className="pl-8 pr-8">
          <div className="font-bold pb-2">Completez votre dossier médical</div>
          <div className="text-justify">
            Les personnes suivantes peuvent consulter le dossier :
            <ul>
              <li>Le patient lui-même,</li>
              <li>Son tuteur, si le patient est majeur sous tutelle (une personne sous curatelle peut consulter
                elle-même son dossier)
              </li>
              <li>Son médecin si le patient l'a choisi comme intermédiaire</li>
            </ul>
          </div>
        </div>

        <div className="pt-2 pr-8 pb-2 flex flex-row-reverse gap-4">
          <Button label="EN SAVOIR +"
                  classList="border-2 border-slate-400 bg-white hover:bg-slate-400 hover:text-white"/>
          <Button label="COMMENCER" classList="border-2 border-slate-400 bg-white hover:bg-slate-400 hover:text-white"/>
        </div>

      </div>

    </div>
  );
}

export default Steps;
