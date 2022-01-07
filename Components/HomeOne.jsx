import Button from "./Button";

const HomeOne = () => {

    return (
        <div className="grid gap-4 pb-8">

            <form className="flex">

                <div className="flex basis-3/4 border-2 border-slate-400 rounded-lg">

                    <input className="w-full" type="text" placeholder="INDIQUEZ UNE PATHOLOGIE"/>

                    <Button label="RECHERCHER" classList="float-right bg-slate-400 text-white"/>

                </div>

            </form>

            <div className="border-2 border-slate-400 rounded">

                <div className="bg-slate-400 text-white text-center py-2 px-4">VOTRE DIAGNOSTIQUE EN 5 ETAPES</div>

                <div>

                    <div className="p-2 flex flex-row justify-center gap-16">
                        <div className="text-2xl pr-2 pl-2 border border-slate-400 rounded-full"> 1 </div>
                        <div className="text-2xl pr-2 pl-2 border border-slate-400 rounded-full bg-slate-400 text-white">2</div>
                        <div className="text-2xl pr-2 pl-2 border-slate-400 border rounded-full">3</div>
                        <div className="text-2xl pr-2 pl-2 border-slate-400 border rounded-full">4</div>
                        <div className="text-2xl pr-2 pl-2 border-slate-400 border rounded-full">5</div>
                    </div>

                    <div className="pl-8 pr-8">
                        <div className="font-bold pb-2">Completez votre dossier médical</div>
                        <div className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus gravida
                            dolor vitae finibus. Phasellus pulvinar ut sapien lacinia mollis. Nulla
                            pellentesque quam et luctus dictum. Aenean quis dapibus leo, id pellentesque libero.
                            Quisque ultricies arcu in imperdiet cursus. Quisque lorem diam,
                            laoreet eget vestibulum non, porta ac magna. Praesent mauris nulla, viverra mattis
                            lobortis a, cursus sit amet neque. Etiam ligula urna, hendrerit sed ex
                            non, ornare posuere tortor.
                        </div>
                    </div>

                    <div className="pt-2 pr-8 pb-2 flex flex-row-reverse gap-4">
                        <Button label="EN SAVOIR +" classList="border-2 border-slate-400 bg-white"/>
                        <Button label="COMMENCER" classList="border-2 border-slate-400 bg-white"/>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default HomeOne;
