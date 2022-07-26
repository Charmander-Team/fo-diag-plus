import Button from "./Button";

const Form = () => {

  return (
    <form className="flex">

      <div className="inline-flex basis-3/4 border-2 border-slate-400 rounded-lg">

        <input className="w-full p-2  rounded-lg" type="text" placeholder="INDIQUEZ UNE PATHOLOGIE"/>

        <Button label="RECHERCHER"
                classList="bg-slate-400 border-2 border-slate-400 rounded-lg float-right text-white"/>

      </div>

    </form>
  );
}

export default Form;
