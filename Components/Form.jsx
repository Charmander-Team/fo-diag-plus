import Button from "./Button";

const Form = () => {

    return (
            <form className="flex">

                <div className="flex basis-3/4 border-2 border-slate-400 rounded-lg">

                    <input className="w-full" type="text" placeholder="INDIQUEZ UNE PATHOLOGIE"/>

                    <Button label="RECHERCHER" classList="float-right bg-slate-400 text-white"/>

                </div>

            </form>
    );
}

export default Form;
