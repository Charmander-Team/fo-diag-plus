import News from "./News";

const NewsBloc = () => {

  return (
    <section className="flex">
      <News classList="bg-blue-100"/>
      <News classList="bg-blue-200"/>
      <News classList="bg-blue-300"/>
      <News classList="bg-slate-300"/>
      <News classList="bg-slate-400"/>
    </section>
  );
}

export default NewsBloc;
