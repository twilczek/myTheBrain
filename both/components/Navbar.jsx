NavBar = React.createClass({
    render() {
        return (
            <div>
                <nav id="navigation" className="navbar navbar-fixed-top">
                        <div className="container-fluid">
                            <a href="/" id="myBrand" alt="TheBrain">&nbsp;</a>
                            <div className="navbar-default">
                                <ul className="main-nav nav navbar-nav navbar-left">
                                    <li className="active">
                                        <a href="#"><b>Sign up!</b>
                                        </a>
                                    </li>
                                    <li className="dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">Flashcards
                                            <span className="caret"></span>
                                        </a>
                                        <ul className="dropdown-menu dropdown-content">
                                            <li>
                                                <a href="#">Look for Flashcards</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown"  href="#">Courses
                                            <span className="caret"></span>
                                        </a>
                                        <ul className="dropdown-menu dropdown-content">
                                            <li>
                                                <a href="#">Find available courses</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">KhanAcademy Playlists</a>
                                    </li>
                                </ul>
                                <div className="login-button">
                                    <button type="button" id="login-button" className="pull-right btn btn-primary btn-header btn-logInModal">
                                        <b>Log In!</b>
                                    </button>
                                </div>
                            </div>
                        </div>
                </nav>
            </div>
                )}
        });