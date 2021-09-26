import React, { useEffect, useState } from 'react';
import News from '../News/News'

// https://newsapi.org/v2/everything?q=tesla&from=2021-08-16&sortBy=publishedAt&apiKey=b093438169e44148aa7051053a7a930e
// this is jnkr api key :)  = b093438169e44148aa7051053a7a930e

const ShowNews = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=tesla&from=2021-08-16&sortBy=publishedAt&apiKey=b093438169e44148aa7051053a7a930e")
        .then(res => res.json())
        .then(data => setArticles(data))
        .catch(error => console.log(error))
    }, [])
    // console.log(articles);
    return (
        <div>
            <h1>all news {articles.length}</h1>
            {
                articles.map(article => <News article={article}/>)
            }
        </div>
    );
};

export default ShowNews;