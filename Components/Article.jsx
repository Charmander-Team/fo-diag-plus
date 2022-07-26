const Articles = ({title, image, description}) => {

  return (
    <div className="flex">

      <div className="basis-2/5">
        <img src={image} alt=""/>
      </div>

      <div className="basis-3/5 text-sm">
        <div className="uppercase">{title}</div>
        <div>{description.substring(0, 130)}...</div>
      </div>

    </div>
  );
}

export default Articles;
