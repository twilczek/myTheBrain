SignUpWithEmailModal = React.createClass({

    getInitialState: function() {
        return {
            email: "",
            password: "",
            confirmationPassword: ""
        }
    },
    resetState: function(){
        this.setState({
            email: "",
            password: "",
            confirmationPassword: ""
        })
    },
    handleCredentialsChange: function(input, event){
        this.setState({[input]: event.target.value})
    },
    checkPasswordLength: function(){
        return (this.state.password.length > 6);
    },
    checkIfPasswordsMatch: function(password=this.state.password,confirmationPassword=this.state.confirmationPassword){
        return password === confirmationPassword;
    },
    checkEmailAndSubmit: function(event){
        event.preventDefault();
        var userName = this.state.email;
        var atPosition = userName.indexOf('@');

        if (atPosition > -1) {
            userName = userName.slice(0, atPosition);
            this.submitRegistrationData(userName);
            //location.reload();
        }
        else {
            alert("Incorrect email");
            return false;
        }
    },
    submitRegistrationData: function(userName){
        Accounts.createUser({
            email: this.state.email,
            password: this.state.password,
            username: userName
            }
        )
    },

    render() {
        return (
            <div>
                <div className="submit">
                    <button type="submit" data-toggle="modal" data-target=".bs-example-modal-sm1" id="login-button" className="btn-mine quickButton btn-signUpWithEmailModal">
                        <i className="fa fa-hand-o-right">&nbsp;</i>
                        Join with
                        Email
                    </button>
                </div>

                <div className="modal fade bs-example-modal-sm1" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                    <div className="modal-dialog modal-sm">

                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.resetState}><span aria-hidden="true">&times;</span></button>
                                    <h4 className="modal-title">Sign up!</h4>
                                </div>
                                <div className="modal-body">
                                    <form id="login-form" action="action" onSubmit={this.checkEmailAndSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="control-label">Email Address</label>
                                            <input type="text" className="form-control" id="user-id" onChange={this.handleCredentialsChange.bind(this, 'email')} value={this.state.email} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="control-label"> Password</label>
                                            <input type="password" className="form-control" id="user-id" onChange={this.handleCredentialsChange.bind(this, 'password')} value={this.state.password}/>
                                            {(!this.checkPasswordLength())? <span className="warning"><small>The password is too short</small></span> : null}

                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="control-label"> Re-type Password</label>
                                            <input type="password" className="form-control" id="user-id" onChange={this.handleCredentialsChange.bind(this, 'confirmationPassword')} value={this.state.confirmationPassword}/>
                                            {(!this.checkIfPasswordsMatch())? <span className="warning"><small>Passwords do not match!</small></span> : null}
                                        </div>
                                        <div className="form-group">
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.resetState}>Close</button>
                                                <button type="submit" className="login-button btn btn-primary" disabled={this.state.email.length < 6 || !this.checkIfPasswordsMatch() || !this.checkPasswordLength()}>Sign up!</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                    </div>
                </div>
            </div>
        )
    }
});