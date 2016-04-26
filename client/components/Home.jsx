Home = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            currentUser: Meteor.user()
        }
    },
    render() {
        return (
            <div>
                <Nav userId={this.data.currentUser}/>
                <Body userId={this.data.currentUser}/>
                <Footer/>
            </div>
        );
    }
});