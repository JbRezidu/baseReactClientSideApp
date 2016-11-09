var React = require('react');
var Link = require('react-router').Link;

var Container = require('components/core/Container.jsx');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            test: "blabla"
        }
    },

    render: function () {
        return (
            <Container>
                Home<br/>{this.state.test}<br/>
            <li><Link to="/page1">Page1</Link></li>
            </Container>
        );
    }
});
