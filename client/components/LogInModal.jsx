LogInModal = React.createClass({

    resetValues: function(){
        document.getElementById("register-form").reset();
    },

    loginUser: function(e){
        e.preventDefault();
        var _email = e.target.userEmail.value;
        var _password = e.target.userPassword.value;
        Meteor.loginWithPassword({email: _email}, _password, function (error) {
            if (error) {
                alert(error.reason);
            }});
        $('#loginModal').modal('hide');
    },
    render() {
        return (
            <div>
                <button data-toggle="modal" data-target=".bs-example-modal-sm" type="button" id="login-button" className="pull-right btn btn-primary btn-header btn-logInModal"><i className="fa fa-hand-o-right"></i> Log In!</button>

                <div className="modal fade bs-example-modal-sm" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.resetValues}><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title">Log In</h4>
                            </div>
                            <form id="register-form" action="action" onSubmit={this.loginUser}>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="control-label">Email Address</label>
                                        <input type="text" className="form-control" id="userEmail" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="control-label"> Password</label>
                                        <input type="password" className="form-control" id="userPassword" />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Log in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
