import { useState } from "react";
import { useEffect } from "react";
import Newsitem from "./newsitem";

const Newsboard = ({category}) => {
    const [articles, setArticles] = useState([]);
    useEffect(()=>{
        let url = 'https://newsapi.org/v2/top-headlines?country=in&category='+category+'&apiKey=0162a2017e6a4ba7b3cef0cf8658d2a8';
        fetch(url).then(response => response.json()).then(data => setArticles(data.articles));

    }, [category]);
    return (
        <div class="board">
            <h2 className="text-center">India <span className="badge bg-danger">News</span></h2>
            <div class="cards">
                {articles.map((news, index)=>{
                    return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
                })}
            </div>
        </div>
    )
}

export default Newsboard