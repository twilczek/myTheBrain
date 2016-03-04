SignUpWithEmailModal = React.createClass({

    getInitialState: function() {
        return {
            email: "",
            password: "",
            confirmationPassword: "",
            passwordHasFocus: false,
            confirmationHasFocus: false
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
    renderPasswordLengthWarning: function() {
        return this.state.password.length < 6 ? (<span><small>Password
            is too short
        </small></span>) : false;
    },
    renderPasswordMismatchWarning: function(){
        return this.state.password !== this.state.confirmationPassword ? (<span><small>Passwords
            do not match
        </small></span>) : false;
    },
    prepareUserName: function(email){
        var userName;
        var atPosition = email.indexOf('@');
        if (atPosition === -1) {
            return false;
        } else {
            userName = email.slice(0, atPosition);
            return userName;
        }
    },
    submitRegistrationData: function(event){
        event.preventDefault();
        var userName= this.prepareUserName(this.state.email);
        if (userName) {
            Accounts.createUser({
                    email: this.state.email,
                    password: this.state.password,
                    username: userName,
                    profile: {
                        name: userName
                    }
                },
                function (error) {
                    if (error) {
                        alert(error.reason);
                    }
                }
            );
            $('#registerModal').modal('hide');
        }
        else {
            alert("Email is invalid");
        }
    },
    changePasswordFocus: function(value){
        this.setState({passwordHasFocus: value})
    },
    changeConfirmationFocus: function(value){
        this.setState({confirmationHasFocus: value})
    },
    shouldButtonBeDisabled: function() {
        return !this.renderPasswordLengthWarning() && /*!!this.prepareUserName(this.state.email) &&*/ !this.renderPasswordMismatchWarning();
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

                <div className="modal fade bs-example-modal-sm1" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                    <div className="modal-dialog modal-sm">

                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.resetState}><span aria-hidden="true">&times;</span></button>
                                    <h4 className="modal-title">Sign up!</h4>
                                </div>
                                <div className="modal-body">
                                    <form id="register-form" action="action" onSubmit={this.submitRegistrationData}>
                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="control-label">Email Address</label>
                                            <input type="text" className="form-control" id="user-id" onChange={this.handleCredentialsChange.bind(this, 'email')} value={this.state.email} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="control-label"> Password</label>
                                            <input type="password" className="form-control" id="user-id" onChange={this.handleCredentialsChange.bind(this, 'password')} value={this.state.password} onFocus={this.changePasswordFocus.bind(this,true)} onBlur={this.changePasswordFocus.bind(this,false)}/>
                                            {this.state.passwordHasFocus ? this.renderPasswordLengthWarning() : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="control-label"> Re-type Password</label>
                                            <input type="password" className="form-control" id="user-id" onChange={this.handleCredentialsChange.bind(this, 'confirmationPassword')} value={this.state.confirmationPassword} onFocus={this.changeConfirmationFocus.bind(this,true)} onBlur={this.changeConfirmationFocus.bind(this,false)}/>
                                            {this.state.confirmationHasFocus ? this.renderPasswordMismatchWarning() : null}
                                        </div>
                                        <div className="form-group">
                                            <div className="modal-footer">
                                                <button type="submit" className="login-button btn btn-primary" disabled={!this.shouldButtonBeDisabled()}>Sign up!</button>
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