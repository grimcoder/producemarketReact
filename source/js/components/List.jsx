var React = require('react');
var ListItem = require('./ListItem.jsx');
var ListHeader = require('./ListHeader.jsx');
var EmptyList = require('./EmptyList.jsx');

var List = React.createClass({

    getListOfItemIds: function (items) {
        return Object.keys(items);
    },

    getTotalNumberOfListItems: function (items) {
        var totalNumberOfItems = 0;
        var item;

        this.getListOfItemIds(items).forEach(function (itemId) {
            item = items[itemId];
            totalNumberOfItems = totalNumberOfItems + parseInt(item.quantity, 10);
        });

        return totalNumberOfItems;
    },

    createListItemElements: function (items) {
        var item;

        return (
            this
                .getListOfItemIds(items)
                .map(function createListItemElement(itemId) {
                    item = items[itemId];
                    return (<ListItem item={item} handleRemoveListItem={this.props.removeListItem} key={item.Id} />);
                }.bind(this))
                .reverse()
        );
    },

    render: function () {
        var items = this.props.items;
        var listItemElements = this.createListItemElements(items);

        return (
            <div>

                <h3 className="page-header">
                    <ListHeader totalNumberOfListItems={this.getTotalNumberOfListItems(items)} />
                </h3>

                <ul>
                    {listItemElements.length > 0 ? <div class="table"> {listItemElements} </div> : <EmptyList />}
                </ul>

            </div>
        );
    }
});

module.exports = List;