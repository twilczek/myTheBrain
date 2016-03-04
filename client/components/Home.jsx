Home = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            currentUser: Meteor.user()
        }
    },
    render() {
        return (
/*            <div>
                {this.props.nav}
                {this.props.content}
                {this.props.footer}
            </div>*/
            <div>
                 <Nav userId={this.data.currentUser} />
                 <Body userId={this.data.currentUser} />
                 <Footer/>
            </div>
        );
    }
});