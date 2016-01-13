var React = require('react');
//var ListItemDescription = require('./ListItemDescription.jsx');
var ListItemActionCreators = require('../../actions/ListItemActionCreators');


var ListItem = React.createClass({

    handleSubmit: function (event) {
        event.preventDefault();

        var listItemId = this.props.item.Id;

        ListItemActionCreators.removeListItem(listItemId);
    },

    handleEdit: function (event) {
        event.preventDefault();

        var listItemId = this.props.item.Id;

        ListItemActionCreators.editListItem(listItemId);
    },

    render: function () {
        var item = this.props.item;
        return (
            <div className="panel panel-primary tr">



            </div>
        );
    }
});

module.exports = ListItem;