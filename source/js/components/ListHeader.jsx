var React = require('react');
var ListItemActionCreators = require('../actions/ListItemActionCreators');

var ListHeader = React.createClass({

    render: function () {

        var totalNumberOfListItems = this.props.totalNumberOfListItems;

        if (totalNumberOfListItems > 0) {
            return (
                <div >
                    {this.props.totalNumberOfListItems} {totalNumberOfListItems === 1 ? 'item' : 'items'}
                    {' '}

                </div>
            );
        }

        return (<span>{this.props.title}</span>);
    }
});

module.exports = ListHeader;