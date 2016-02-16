SignUpWithEmailModal = React.createClass({

    getInitialState: function() {
        return {
            email: "",
            password: ""
        }
    },
    handleChangeEmail: function(event) {
        console.log('handleChangeEmail');
        this.setState({ email: event.target.value });
    },
    handleChangePassword: function(event) {
        console.log('handleChangePassword');
        this.setState({ password: event.target.value });
    },
    resetState: function(){
        console.log('onClickClose');
        this.setState({  email: "", password: ""})
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
                                    <form id="login-form" action="action">
                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="control-label">Email Address</label>
                                            <input type="text" className="form-control" id="user-id" onChange={this.handleChangeEmail} value={this.state.email} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="control-label"> Password</label>
                                            <input type="text" className="form-control" id="user-id" onChange={this.handleChangePassword} value={this.state.password}/>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.resetState}>Close</button>
                                    <button type="submit" className="login-button btn btn-primary" disabled={this.state.email.length === 0 || this.state.password.length === 0 }>Sign up!</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
});