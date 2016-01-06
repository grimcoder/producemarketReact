var React = require('react');
var ListItemDescription = require('./ListItemDescription.jsx');
var ListItemActionCreators = require('../actions/ListItemActionCreators');

var ListItem = React.createClass({

    handleSubmit: function (event) {
        event.preventDefault();

        var listItemId = this.props.item.Id;

        ListItemActionCreators.removeListItem(listItemId);
    },

    render: function () {
        var item = this.props.item;
        return (
            <div className="panel panel-primary tr">

                <div className="panel-heading td">
                    {item.Price} x {item.ItemName}
                </div>

                <div className="td">
                    {item.Price.length > 0 ? <ListItemDescription description={item.Price} /> : ''}
                </div>

                    <div className="td">

                            <button type="submit" onClick={this.handleSubmit} className="btn btn-default btn-xs">Remove</button>

                    </div>
            </div>
        );
    }
});

module.exports = ListItem;