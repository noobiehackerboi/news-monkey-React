import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">News Monkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <Link className="nav-link" aria-current="page" to="/general">General</Link> */}
                                <Link className="nav-link d-lg-none" to="/general">
                                    <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">General</span>
                                </Link>
                                <Link className="nav-link d-none d-lg-block" to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                {/* <Link className="nav-link" aria-current="page" to="/business">Business</Link> */}
                                <Link className="nav-link d-lg-none" to="/business">
                                    <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Business</span>
                                </Link>
                                <Link className="nav-link d-none d-lg-block" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                {/* <Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link> */}
                                <Link className="nav-link d-lg-none" to="/entertainment">
                                    <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Entertainment</span>
                                </Link>
                                <Link className="nav-link d-none d-lg-block" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                {/* <Link className="nav-link" aria-current="page" to="/health">Health</Link> */}
                                <Link className="nav-link d-lg-none" to="/health">
                                    <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Health</span>
                                </Link>
                                <Link className="nav-link d-none d-lg-block" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                {/* <Link className="nav-link" aria-current="page" to="/science">Science</Link> */}
                                <Link className="nav-link d-lg-none" to="/science">
                                    <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Science</span>
                                </Link>
                                <Link className="nav-link d-none d-lg-block" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                {/* <Link className="nav-link" aria-current="page" to="/sports">Sports</Link> */}
                                <Link className="nav-link d-lg-none" to="/sports">
                                    <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Sports</span>
                                </Link>
                                <Link className="nav-link d-none d-lg-block" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                {/* <Link className="nav-link" aria-current="page" to="/technology">Technology</Link> */}
                                <Link className="nav-link d-lg-none" to="/technology">
                                    <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Technology</span>
                                </Link>
                                <Link className="nav-link d-none d-lg-block" to="/technology">Technology</Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch d-flex justify-content-end">
                            <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                            <label className="form-check-label mx-3" htmlFor="flexSwitchCheckChecked" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Navbar