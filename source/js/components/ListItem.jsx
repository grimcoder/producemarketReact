var React = require('react');
var ListItemDescription = require('./ListItemDescription.jsx');
var ListItemActionCreators = require('../actions/ListItemActionCreators');

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

                <div className="td">

                    {item.ItemName}

                </div>

                <div className="td">

                    {item.Price > 0 ? <ListItemDescription description={item.Price} /> : ''}

                </div>

                    <div className="td">

                            <button type="submit" onClick={this.handleSubmit} className="btn btn-danger">Remove</button>

                    </div>
                    <div className="td">

                            <button type="submit" onClick={this.handleEdit} className="btn btn-edit">Edit</button>

                    </div>

            </div>
        );
    }
});

module.exports = ListItem;