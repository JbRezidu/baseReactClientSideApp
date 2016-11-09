var React = require('react');

module.exports = React.createClass({
    getDefaultProps: function () {
        return {
            className: "",
            id: "",
            style: {},
            onclick: function () {}
        };
    },
    render: function () {
        return (
            <div className={this.props.className}
                 id={this.props.id}
                 style={this.props.style}
                >
                {this.props.children}
            </div>
        );
    }
});
