Nav = React.createClass({

    propTypes: {
        userId: React.PropTypes.object
    },

    logOut(){
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        });
    },

    renderNav(){

        return (
            <div>
                <nav id="navigation" className="navbar navbar-fixed-top navbar-custom">
                    <div className="container-fluid">
                        <div className="navbar-default">
                            <ul className="main-nav nav navbar-nav navbar-left hidden-xs hidden-sm">
                                <li><img className="logo-navbar" src="img/logo@2x.png"></img></li>
                                <li className="active"><a href="#"><span
                                    className="up glyphicon glyphicon-education"></span><b> Sign up!</b></a></li>
                            </ul>
                        </div>
                        <div>
                            <LogInModal />
                        </div>
                    </div>
                </nav>
            </div> )
    },

    renderLoggedInUserNav(){

        return (
            <div>
                <nav id="navigation" className="navbar navbar-fixed-top navbar-custom">
                    <div className="container-fluid">
                        <div className="navbar-default">
                            <ul className="main-nav nav navbar-nav navbar-left hidden-xs hidden-sm">
                                <li><img className="logo-navbar" src="img/logo@2x.png"></img></li>
                                <li className="active"><a href="#"><span
                                    className="up glyphicon glyphicon-home"></span><b>Home</b></a></li>
                                <li><a href="#"><span
                                    className="up glyphicon glyphicon-education"></span><b>Study</b></a></li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle " data-toggle="dropdown" href="#"><span
                                        className="up glyphicon glyphicon-th-list"></span>Courses</a>
                                    <ul className="dropdown-menu dropdown-content">
                                        <li><a href="#">Available Courses</a></li>
                                        <li><a href="#">Create Course</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#"><span className="up glyphicon glyphicon-th"></span>Flashcards</a>
                                    <ul className="dropdown-menu dropdown-content">
                                        <li><a href="#">Look for Flashcards</a></li>
                                        <li><a href="#">Create Flashcard</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#"><span
                                        className="up glyphicon glyphicon-heart-empty"></span>My collections</a>
                                    <ul className="dropdown-menu dropdown-content">
                                        <li><a href="#">My Flashcards</a></li>
                                        <li><a href="#">My Courses</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="user nav main-nav navbar-nav pull-right hidden-xs hidden-sm">
                                <div id="user-name-profile">
                                    <li className="dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown" href="#"><div id="login-name"><span>{this.props.userId.profile.name}</span></div></a>
                                        <ul className="dropdown-menu dropdown-content">
                                            <li><a href="#">My Profile</a></li>
                                            <li><a href="#">Repetitions Calendar</a></li>
                                            <li><a href="#">Notifications Center</a></li>
                                            <li><a href="#" onClick={this.logOut}>Log out</a></li>
                                        </ul>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div> )
    },


    render() {
        return (
            (!this.props.userId ? this.renderNav() : this.renderLoggedInUserNav())
        )
    }
});