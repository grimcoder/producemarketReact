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


                    {listItemElements.length > 0 ?
                <div className="panel panel-primary">
                    <div className="panel-heading">Prices</div>
                    <div className="panel-body">
                        <div className="table">

                        <div className="tr ">

                            <div className="td strong panel-header">Name</div>
                            <div className="td">Price</div>
                            <div className="td">Actions</div>

                        </div>

                        {listItemElements}

                    </div>
                    </div>
                </div>

                : <EmptyList />}


            </div>
        );
    }
});

module.exports = List;