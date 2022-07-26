import News from "./News";

const NewsBloc = () => {

  return (
    <section className="flex">
      <News title="La fievre" classList="bg-blue-100"/>
      <News title="La grippe" classList="bg-blue-200"/>
      <News title="La lombalgie" classList="bg-blue-300"/>
      <News title="La céphalée" classList="bg-slate-300"/>
      <News title="La tachycardie" classList="bg-slate-400"/>
    </section>
  );
}

export default NewsBloc;
