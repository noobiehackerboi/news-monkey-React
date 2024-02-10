import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    static defaultProps = {
        country: "in",
        category: "general",
        pageSize: 15,
        source: {
            id: null,
            name: null
        }
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number,
        source: PropTypes.object
    }
    apiKey = process.env.REACT_APP_NEWS_API
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loader: true,
            page: 1
        }
        document.title = `${this.props.category === 'general' ? "News Monkey" : this.capitalizeFirstLetter(this.props.category) + "- News Monkey"}`;
    }
    updateNews = async () => {
        const api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        let data = await fetch(api);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            loader: false,
            totalResults: parsedData.totalResults,
        })
    }
    async componentDidMount() {
        this.updateNews();
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 }, async () => {
            const api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
            let data = await fetch(api);
            let parsedData = await data.json();
            this.setState({
                articles: this.state.articles.concat(parsedData.articles),
                loader: false,
                totalResults: parsedData.totalResults,
            })
        });
    };
    render() {
        return (
            <>
                <h2 className="text-center mt-3 mb-5">
                    News Monkey - Top {this.props.category === 'general' ? "" : this.capitalizeFirstLetter(this.props.category)} Headlines
                </h2>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div key={element.url} className="col-md-4">
                                    <NewsItem title={element.title} description={element.description}
                                        url={element.url} urlToImage={element.urlToImage}
                                        author={element.author} publishedAt={element.publishedAt} source={element.source} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}
