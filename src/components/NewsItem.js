import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let defaultImage = "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw"
        let { title, description, url, urlToImage, author, publishedAt } = this.props;
        return (
            <div>
                <div className="card my-2" style={{ textAlign: 'left' }}>
                    <img src={urlToImage ? urlToImage : defaultImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">
                            <small className="text-body-secondary">By {author} : {publishedAt}</small>
                        </p>
                        <a href={url} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}