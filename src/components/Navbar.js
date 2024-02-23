import { Link, useLocation } from 'react-router-dom'

const Navbar = (props) => {
    const location = useLocation();
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
                                <Link className={`nav-link d-lg-none ${location.pathname === '/' ? "active" : ""}`} to="/general">
                                    <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">General</span>
                                </Link>
                                <Link className={`nav-link d-none d-lg-block ${location.pathname === '/' ? "active" : ""}`} to="/general">General</Link>
                            </li>

                            <li className="nav-item">
                                {/* <Link className="nav-link" aria-current="page" to="/business">Business</Link> */}
                                <Link className={`nav-link d-lg-none ${location.pathname === '/business' ? "active" : ""}`} to="/business">
                                    <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Business</span>
                                </Link>
                                <Link className={`nav-link d-none d-lg-block ${location.pathname === '/business' ? "active" : ""}`} to="/business">Business</Link>
                            </li>

                            <li className="nav-item">
                                {/* <Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link> */}
                                <Link className={`nav-link d-lg-none ${location.pathname === '/entertainment' ? "active" : ""}`} to="/entertainment">
                                    <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Entertainment</span>
                                </Link>
                                <Link className={`nav-link d-none d-lg-block ${location.pathname === '/entertainment' ? "active" : ""}`} to="/entertainment">Entertainment</Link>
                            </li>

                            <li className="nav-item">
                                {/* <Link className="nav-link" aria-current="page" to="/health">Health</Link> */}
                                <Link className={`nav-link d-lg-none ${location.pathname === '/health' ? "active" : ""}`} to="/health">
                                    <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Health</span>
                                </Link>
                                <Link className={`nav-link d-none d-lg-block ${location.pathname === '/health' ? "active" : ""}`} to="/health">Health</Link>
                            </li>

                            <li className="nav-item">
                                {/* <Link className="nav-link" aria-current="page" to="/science">Science</Link> */}
                                <Link className={`nav-link d-lg-none ${location.pathname === '/science' ? "active" : ""}`} to="/science">
                                    <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Science</span>
                                </Link>
                                <Link className={`nav-link d-none d-lg-block ${location.pathname === '/science' ? "active" : ""}`} to="/science">Science</Link>
                            </li>

                            <li className="nav-item">
                                {/* <Link className="nav-link" aria-current="page" to="/sports">Sports</Link> */}
                                <Link className={`nav-link d-lg-none ${location.pathname === '/sports' ? "active" : ""}`} to="/sports">
                                    <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Sports</span>
                                </Link>
                                <Link className={`nav-link d-none d-lg-block ${location.pathname === '/sports' ? "active" : ""}`} to="/sports">Sports</Link>
                            </li>

                            <li className="nav-item">
                                {/* <Link className="nav-link" aria-current="page" to="/technology">Technology</Link> */}
                                <Link className={`nav-link d-lg-none ${location.pathname === '/technology' ? "active" : ""}`} to="/technology">
                                    <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Technology</span>
                                </Link>
                                <Link className={`nav-link d-none d-lg-block ${location.pathname === '/technology' ? "active" : ""}`} to="/technology">Technology</Link>
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