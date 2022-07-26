const News = ({title, classList}) => {

  const content = "La fièvre n’est pas une maladie en soi, mais une manifestation signalant une réaction de l’organisme, le plus souvent face à une infection. Chez un adulte, on parle en général de fièvre lorsque la température interne du corps dépasse 38°C. Elle s’annonce par une sensation de froid, des frissons plus ou moins intenses, voire des claquements de dents. La personne se sent faible. Plus tard, la transpiration devient abondante, le pouls et la respiration s’accélèrent, la soif augmente."

  return (
    <div className={`basis-1/5 ${classList} text-white p-4`}>

      <h3 className="text-2xl">{title}</h3>
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
