LogInModal = React.createClass({

    render() {
        return (
            <div>
                <button data-toggle="modal" data-target=".bs-example-modal-sm" type="button" id="login-button" className="pull-right btn btn-primary btn-header btn-logInModal"><i className="fa fa-hand-o-right"></i> Log In!</button>

                <div className="modal fade bs-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title">Log In</h4>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="control-label"> Username / Email Address</label>
                                        <input type="text" className="form-control" id="user-id" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="control-label"> Password</label>
                                        <input type="text" className="form-control" id="user-id" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Log in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
