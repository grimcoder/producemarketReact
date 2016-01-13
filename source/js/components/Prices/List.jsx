var React = require('react');
var ListItem = require('./ListItem.jsx');
var ListHeader = require('./ListHeader.jsx');
var EmptyList = require('./../common/EmptyList.jsx');

var List = React.createClass({

    getListOfItemIds: function (items) {
        return items ? Object.keys(items) : [];
    },

    getTotalNumberOfListItems: function (items) {
        var totalNumberOfItems = 0;
        var item;



        return items ? Object.keys(items).length : [];
    },

    getInitialState: function (){
        return {searchText: ''};
    },


    getState: function(){
        return {searchText: this.refs.search.value};
    },


    createListItemElements: function (items) {
        var item;
        if (this.state.searchText != '')
        {
            return (
                this
                    .getListOfItemIds(items).
                    filter(function(itemId){
                        return items[itemId].ItemName.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1
                    }.bind(this))
                    .map(function createListItemElement(itemId) {
                        item = items[itemId];
                        return (<ListItem item={item} handleRemoveListItem={this.props.removeListItem} key={item.Id} />);
                    }.bind(this))
                    .reverse()
            );
        }
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

    handleSearch : function(event){

        this.setState(this.getState());
    },

    render: function () {
        var items = this.props.items;
        var listItemElements = this.createListItemElements(items);
        var searchText = this.state.searchText;
        return (

            <form>

                <div>



                    <h3 className="page-header">
                        <ListHeader title='Prices' totalNumberOfListItems={this.getTotalNumberOfListItems(items)} />
                    </h3>
                    <div>
                        <input type="text" className="form-control searchbox" onChange={this.handleSearch} id="searchtext" placeholder="Search"  value={searchText}  ref="search" />
                    </div>
                        {listItemElements.length > 0 ?



                    <div className="panel panel-primary">

                            <div className="panel-heading">Prices</div>
                            <div className="panel-body">
                            <div className="table">

                            <div className="tr ">

                                <div className="td strong panel-header">Name</div>
                                <div className="td">Price</div>
                                <div className="td"></div>
                                <div className="td"></div>

                            </div>

                            {listItemElements}

                        </div>
                        </div>
                    </div>

                    : <EmptyList />}


                </div>

            </form>
        );
    }
});

module.exports = List;