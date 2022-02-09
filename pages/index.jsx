import Steps from "../Components/Steps";
import Form from "../Components/Form";

const Home = () => {
    return (
        <div className="divide-y-2 divide-slate-400">

            <div className="pt-8 pb-8">
                <Form/>
            </div>

            <div className="pt-8 pb-8">
                <Steps/>
            </div>

            <div className="pt-8 pb-8">
                5 blocs Heroku staging
            </div>

            <div className="pt-8 pb-8">
                requete API 6 trucs
            </div>

        </div>
    )
}

export default Home;
