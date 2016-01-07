var React = require('react');
var List = require('./List.jsx');
var AddListItem = require('./AddListItem.jsx');
var ListItemStore = require('../stores/ListItemStore');
var PriceList = React.createClass({

    getInitialState: function () {
        this.getList();
        return {};
    },

    updateState: function (state) {
        this.setState({list:  state});
    },

    getList: function () {
        ListItemStore.getAllListItems()
    },

    componentDidMount: function () {
        ListItemStore.addpricesRecievedListener(this.updateState);
    },

    componentWillUnmount: function () {
        ListItemStore.removepricesRecievedListener(this.updateState);
    },


    render: function () {
        var items = this.state.list;
        return (

            <div className="row">
            <div className="col-sm-6">

                <List items={items} />
            </div>
            <div className="col-sm-6">

            <AddListItem />

            </div>
            </div>


        );
    }
});

module.exports = PriceList;