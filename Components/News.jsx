const News = ({classList}) => {

  const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  return (
    <div className={`basis-1/5 ${classList} text-white p-4`}>

      <h3 className="text-2xl">Titre</h3>
      <br/>
      <div className="text-sm">
        {content.substring(0, 130)}...
      </div>
      <br/>
      <div className="text-right">
        <a href="">Lire plus</a>
      </div>


    </div>
  );
}

export default News;
