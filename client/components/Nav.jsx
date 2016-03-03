Nav = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            currentUser: Meteor.user()
        }
    },

    render() {
        return (
            <div>
                <nav id="navigation" className="navbar navbar-fixed-top navbar-custom">
                    <div className="container-fluid">
                        <div className="navbar-default">
                            <ul className="main-nav nav navbar-nav navbar-left hidden-xs hidden-sm">
                                <li><img  className="logo-navbar" src="img/logo@2x.png"></img></li>
                                <li className="active"><a href="#"><span className="up glyphicon glyphicon-education"></span><b> Sign up!</b></a></li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle " data-toggle="dropdown"  href="#"><span className="up glyphicon glyphicon-th-list"></span>Courses</a>
                                    <ul className="dropdown-menu dropdown-content"><li><a href="#">Find available courses</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#"><span className="up glyphicon glyphicon-th"></span>Flashcards</a>
                                    <ul className="dropdown-menu dropdown-content"><li><a href="#">Look for Flashcards</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div>
                            {!this.data.currentUser? (<LogInModal />) : null}
                        </div>
                    </div>
                </nav>
            </div>
        )}
});
