var Comp1 = require('views/test.jsx');
var Comp2 = require('views/test2.jsx');
var Home  = require('views/home.jsx');

module.exports = {
    path: '/',
    indexRoute: {component: Home},
    childRoutes: [
        {path: 'page1', component: Comp1},
        {path: 'page2', component: Comp2}
    ]
};
