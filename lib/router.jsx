// Routes = [
//     {
//         url: '/',
//         title: 'TheBrain',
//         name: 'home',
//         action() {
//             ReactLayout.render(Home);
//         }
//     },
//     {
//         url: '/study',
//         title: 'Study',
//         name: 'study',
//         action() {
//             ReactLayout.render(Home);
//         }
//     },
//     {
//         url: '/courses',
//         title: 'Courses',
//         name: 'courses',
//         action() {
//             ReactLayout.render(Home);
//         }
//     },
//     {
//         url: '/flashcards',
//         title: 'Flashcards',
//         name: 'flashcards',
//         action() {
//             ReactLayout.render(Home);
//         }
//     },
//     {
//         url: '/my_collections',
//         title: 'My Collections',
//         name: 'my_collections',
//         action() {
//             ReactLayout.render(Home);
//         }
//     },
//
// ];

//Druga opcja (wtedy w Home.jsx zamiast tagow htmlowych uzyc this.props.nav itp
Routes = [
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

