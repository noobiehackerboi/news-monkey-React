import { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loader, setLoader] = useState(true);
    const [totalResults, setTotalResults] = useState(0);


    const updateNews = async () => {
        props.setProgress(0);
        const api = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
        let data = await fetch(api);
        props.setProgress(40);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setLoader(false);
        setTotalResults(parsedData.totalResults);
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${props.category === 'general' ? "News Monkey" : capitalizeFirstLetter(props.category) + "- News Monkey"}`;
        updateNews();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        const api = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page + 1}`;
        let data = await fetch(api);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setPage(page + 1);
    };

    return (
        <>
            <div style={{
                minHeight: '100vh',
                backgroundColor: props.mode == 'dark' ? '#272727' : 'white',
                color: props.mode == 'dark' ? 'white' : 'black'
            }} data-bs-theme={props.mode}>

                <h2 className="text-center mb-5" style={{ paddingTop: '80px' }}>
                    News Monkey - Top {props.category === 'general' ? "" : capitalizeFirstLetter(props.category)} Headlines
                </h2>

                {loader && <Spinner />}

                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {articles.map((element) => {
                                return <div key={element.url} className="col-md-4">
                                    <NewsItem title={element.title} description={element.description}
                                        url={element.url} urlToImage={element.urlToImage}
                                        author={element.author} publishedAt={element.publishedAt} source={element.source} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )

}

News.defaultProps = {
    country: "in",
    category: "general",
    pageSize: 15,
    source: {
        id: null,
        name: null
    }
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
    source: PropTypes.object
}

export default News;