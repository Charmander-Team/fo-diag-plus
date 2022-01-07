import Button from "../Components/Button";

const Home = () => {
    return (
        <div className="divide-y-2 divide-slate-400">

            <div>

                <form className="border-2 border-slate-400 rounded-lg flex">

                    <input className="basis-3/4" type="text" placeholder="INDIQUEZ UNE PATHOLOGIE"/>

                    <Button label="RECHERCHER" classList="bg-slate-400 text-white"/>

                </form>

                <div>VOTRE DIAGNOSTIQUE EN 5 ETAPES</div>

            </div>

            <div>5 blocs</div>

            <div>requete API 6 trucs</div>

        </div>
    )
}

export default Home;
