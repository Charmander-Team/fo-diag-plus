import Steps from "../Components/Steps";
import Form from "../Components/Form";
import NewsBloc from "../Components/NewsBloc";

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
                <NewsBloc/>
            </div>

            <div className="pt-8 pb-8">
                requete API 6 trucs
            </div>

        </div>
    )
}

export default Home;
