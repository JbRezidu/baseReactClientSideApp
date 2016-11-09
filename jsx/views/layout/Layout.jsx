var React       = require('react');
var Router      = require('react-router').Router;
var hashHistory = require('react-router').hashHistory;

//Container
var Container   = require('components/core/Container.jsx');
var Header      = require('views/layout/Header.jsx');
var Footer      = require('views/layout/Footer.jsx');
//Config
var routes = require('config/routes');

module.exports = React.createClass({
    render: function () {
        return (
            <Container>
                <Header/>
                <Router history={hashHistory} routes={routes}/>
                <Footer/>
            </Container>
        );
    }
});
