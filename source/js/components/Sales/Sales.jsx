var React = require('react');
var ListHeader = require('./../Prices/ListHeader.jsx');
var EmptyList = require('./../common/EmptyList.jsx');
var ListItem = require('./ListItem.jsx');

var Sales = React.createClass({

    getInitialState: function(){
        return {searchText: ''};
    },

    getItemsCount : function(){
        return this.props.items.length
    },

    getState: function(){
        return {searchText: this.refs.search.value};
    },

    //handleSearch : function(event){
    //
    //    this.setState(this.getState());
    //},

    createListItemElements: function(items){

        return (
            items.map(function (item) {
                    return (<ListItem item={item}  key={item.Id} />);
                })
                .reverse()
        );

    },

    render: function () {
        //var searchText = this.state.searchText
        var listItemElements = this.createListItemElements(this.props.items);

        return(
            <div>

                <h3 className="page-header">

                    <ListHeader title='Sales' totalNumberOfListItems={this.getItemsCount()} />

                </h3>

                {this.props.items > 0 ?

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
        );

    }

});

module.exports = Sales;