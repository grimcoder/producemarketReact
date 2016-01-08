var React = require('react');
var ListItemActionCreators = require('../actions/ListItemActionCreators');

var ListHeader = React.createClass({

    handleSubmit: function (event) {
        event.preventDefault();

        ListItemActionCreators.removeAllListItems();
    },

    render: function () {
        var totalNumberOfListItems = this.props.totalNumberOfListItems;

        if (totalNumberOfListItems > 0) {
            return (
                <form onSubmit={this.handleSubmit} className="form-inline">
                    {this.props.totalNumberOfListItems} {totalNumberOfListItems === 1 ? 'item' : 'items'}
                    {' '}

                </form>
            );
        }

        return (<span>Price List</span>);
    }
});

module.exports = ListHeader;