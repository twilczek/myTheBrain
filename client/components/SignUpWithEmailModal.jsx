SignUpWithEmailModal = React.createClass({

    getInitialState: function() {
        return {
            email: "",
            password: "",
            confirmationPassword: ""
        }
    },
    
    handleCredentialsChange: function(input, event){
        console.log('handleCredentialsChange, input', input);
        console.log('handleCredentialsChange, event', event);
        this.setState({[input]: event.target.value})
    },
    resetState: function(){
        console.log('onClickClose');
        this.setState({
            email: "",
            password: "",
            confirmationPassword: ""
        })
    },
    checkIfPasswordsMatch: function(password=this.state.password,confirmationPassword=this.state.confirmationPassword){
        if(password.length === 0 || confirmationPassword === 0){
            return false;
        }
        else {
            return password === confirmationPassword ? true : false;
        }
    },
    submitRegistrationData: function(event){

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
                                    <form id="login-form" action="action" onSubmit={this.submitRegistrationData}>
                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="control-label">Email Address</label>
                                            <input type="text" className="form-control" id="user-id" onChange={this.handleCredentialsChange.bind(this, 'email')} value={this.state.email} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="control-label"> Password</label>
                                            <input type="password" className="form-control" id="user-id" onChange={this.handleCredentialsChange.bind(this, 'password')} value={this.state.password}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="control-label"> Re-type Password</label>
                                            <input type="password" className="form-control" id="user-id" onChange={this.handleCredentialsChange.bind(this, 'confirmationPassword')} value={this.state.confirmationPassword}/>
                                            {(!this.checkIfPasswordsMatch())? <span><small>Passwords do not match!</small></span> : null}
                                        </div>
                                        <div className="form-group">
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.resetState}>Close</button>
                                                <button type="submit" className="login-button btn btn-primary" disabled={this.state.email.length === 0 || !this.checkIfPasswordsMatch()}>Sign up!</button>
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