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
    renderPasswordLengthWarning: function(){
        if(this.state.password.length < 6){
            return (<span className="warning"><small>The password
                is too short</small></span>);
        }
        else return false;
    },
    renderPasswordMismatchWarning: function(){
        if (this.state.password !== this.state.confirmationPassword){
            return (<span className="warning"><small>The passwords
                do not match </small></span>);
        }
        else {
            return false;
        }
    },
    prepareUserName: function(email){
        var userName;
        var atPosition = email.indexOf('@');
        if (atPosition > -1) {
            userName = email.slice(0, atPosition);
            return userName;
        } else return false;
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
                function (error, result) {
                    if (error) {
                        console.log("error", error);
                        console.log("result", result);
                    }
                }
            );
            $('#registerModal').modal('hide');
        }
        else {
            alert("Check whether email address is correct");
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
    //  NIE DZIALA ON CHANGE W FORMIE
    // seeOnChange: function(event){
    //    console.log("w onChange", event);
    //},

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
                                    <form id="login-form" action="action" onSubmit={this.submitRegistrationData}>
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
                                                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.resetState}>Close</button>
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