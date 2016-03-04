Routes = [
    {
        url: '/',
        title: 'TheBrain',
        name: 'home',
        action() {
            ReactLayout.render(Home);
        }
    }
];
//Druga opcja (wtedy w Home.jsx zamiast tagow htmlowych uzyc this.props.nav itp
/*Routes = [
    {
        url: '/',
        title: 'TheBrain',
        name: 'home',
        action() {
            ReactLayout.render(Home, {
                nav: <Nav />,
                content: <Body />,
                footer: <Footer />
                }
            );
        }
    }
];*/

_.each(Routes, (route) => {
    FlowRouter.route(route.url, {
        name: route.name,
        action: route.action
    });
});

FlowRouter.notFound = {
    action() {
        FlowRouter.go('home');
    }
};