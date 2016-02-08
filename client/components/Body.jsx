Body = React.createClass({

    render() {
        return (
        <div className="body-view">


        <div className="row">


            <div className="col-md-6 loginWelcome">
                <div className="box box-bordered box-color">
                    <div className="box-title">
                        <h3><i className="fa fa-th-list"></i> Welcome to TheBrain!</h3>
                    </div>

                    <div className="box-content padding body-content">


                        <div className="visible-xs visible-sm loginListPhone">
                            <p><strong>Remember for life</strong>, not for exams</p>

                            <p>Learn smart and <strong>save your time</strong></p>

                            <p><strong>Amaze</strong> everyone with <strong>robot-like memory</strong></p>

                            <p>Be a <strong>creator</strong>. TheBrain <strong>learns with you.</strong></p>

                            <p><strong>Make TheBrain Happy! :)</strong></p>
                        </div>

                        <ul className="fa-ul loginList visible-md visible-lg">
                            <li><i className="fa fa-li fa-check"></i><strong>Remember for life</strong>, not for exams</li>
                            <li><i className="fa fa-li fa-check"></i>Learn smart and <strong>save your time</strong></li>
                            <li><i className="fa fa-li fa-check"></i><strong>Amaze</strong> everyone with <strong>robot-like memory</strong></li>
                            <li><i className="fa fa-li fa-check"></i>Be a <strong>creator</strong>. TheBrain <strong>learns with you.</strong></li>
                            <li><i className="fa fa-li fa-check"></i><strong>Make TheBrain Happy! :)</strong></li>
                        </ul>


                    </div>
                </div>
            </div>
            <div className="col-md-6 loginSignUp">
                <div className="box box-bordered box-color">
                    <div className="box-title">
                        <h3><i className="fa fa-th-list"></i> Join TheBrain!</h3>
                    </div>
                    <div className="box-content padding body-content">


                        <p className="lead">Are you already familiar with spaced repetition? </p>


                        <button type="submit" className="btn-mine quickButton btn-signUpWithFacebook"><i className="fa fa-hand-o-right"></i> Join
                            <strong>TheBrain</strong>
                            with <i className="fa fa-facebook-square body-facebook"></i>acebook!
                        </button>

                        <p className="login-or">OR</p>


                        <div className="submit">
                            <button type="submit" className="btn-mine quickButton btn-signUpWithEmailModal">
                                <i className="fa fa-hand-o-right"></i>
                                Join with
                                Email
                            </button>
                        </div>
                        <h2 className="text-center">For Free. For Ever.</h2>

                        <p className="lead">Not familiar? Enjoy the <strong>introductory
                            video</strong> first. </p>


                    </div>
                </div>


            </div>
        </div>
        <div className="row">
            <div className="col-md-12 loginSignUp">
            <div className="box box-bordered box-color">
            <div className="box-title">
            <h3><i className="fa fa-th-list"></i> Introductory video</h3>
        </div>
        <div className="box-content padding body-bottom">


            <div className="flex-video widescreen">
            <iframe src="http://www.youtube.com/embed/ZqZTIIZcg5o?HD=1;rel=0;showinfo=0;controls=0"
        frameborder="0" allowfullscreen=""></iframe>
            </div>

            Learn more here: <a href="http://blog.thebrain.pro/2014/04/what-is-thebrain-pro-all-about/" target="_blank">What is TheBrain.Pro all
            about?</a><br/>
        And don't forget to check the mobile app on <a href="https://itunes.apple.com/us/app/thebrain.pro/id826908600?mt=8">AppStore</a>!<br/>
        Join the community on <a href="http://facebook.com/TheBrainPortal/">facebook</a><br/>


            </div>
            </div>


            </div>
            </div>
            </div>
        )
    }
});