import { useEffect, useState } from "react"

const Articles = () => {
    const [ news, setNews ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/news');
                const data = await res.json();
                setNews(data);
            } catch (err) {
                console.error("An error occurred while fetching the data.", err);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Latest News</h1>
            {news.length > 0 ? (
                news.map((article) => (
                    <div key={article._id}>
                        <h2>{article.title}</h2>
                        <p>{article.content}</p>
                    </div>
                )) 
            ): (
                <p>Loading news...</p>
            )}
        </div>
    );
};

export default Articles;