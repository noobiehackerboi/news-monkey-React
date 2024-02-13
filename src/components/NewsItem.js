const NewsItem = (props) => {
    const defaultImage = "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw"
    let { title, description, url, urlToImage, author, publishedAt, source } = props;
    return (
        <div>
            <div className="card my-2" style={{ textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className="badge rounded-pill bg-danger">
                        {source.name}
                    </span>
                </div>
                <img src={urlToImage ? urlToImage : defaultImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title ? title : ""}
                    </h5>
                    <p className="card-text">{description ? description : ""}</p>
                    <p className="card-text">
                        <small className="text-body-secondary">
                            By&nbsp;
                            <strong>
                                {author ? author : "Unknown"}&nbsp;:&nbsp;
                                {new Date(publishedAt).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}
                                &nbsp;IST
                            </strong>
                        </small>
                    </p>
                    <a href={url} target='_blank' rel="noreferrer" className={`btn btn-sm btn-${props.mode === 'light' ? 'dark' : 'secondary'}`}>Read More</a>
                </div>
            </div>
        </div>
    )

}
export default NewsItem;