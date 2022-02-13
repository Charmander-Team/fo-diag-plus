import articlesApi from '../src/services/routes/articlesApi';
import {useEffect, useState} from 'react'
import Articles from "./Article";

const ArticlesBloc = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const data = await articlesApi.getArticlesSortedByDate();
            setArticles(data);
        }
        getArticles();
    }, [])

    return (
        <section className="grid grid-cols-3">

            {articles.map((article, index) => (
                <Articles image={article.image} title={article.title} description={article.description}/>
            ))}

        </section>
    );
}

export default ArticlesBloc;
