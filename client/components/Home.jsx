Home = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            currentUser: Meteor.user()
        }
    },
    render() {
        return (
/*  If using Flow Router to render nav, body, and footer there is trouble with passing currentUser as props*/ 
          
            <div>
                 <Nav userId={this.data.currentUser} />
                 <Body userId={this.data.currentUser} />
                 <Footer/>
            </div>
        );
    }
});