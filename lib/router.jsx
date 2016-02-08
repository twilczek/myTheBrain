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