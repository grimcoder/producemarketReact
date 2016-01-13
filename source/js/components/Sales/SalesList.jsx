var React = require('react');
var Sales = require('./Sales.jsx');
var AddListItem = require('./AddListItem.jsx')
var SalesStore = require('./../../stores/SalesStore')
var ActionCreators = require('../../actions/ListItemActionCreators');

var SalesList = React.createClass({

    getInitialState: function(){
        ActionCreators.getAllSalesList();
        return {saleslist: []}
    },

    updateState(state){
      this.setState({saleslist: state})
    },

    componentDidMount: function () {
        SalesStore.addGetSalesListListener(this.updateState);
    },

    componentWillUnmount: function () {
        SalesStore.removeGetSalesListListener(this.updateState);
    },


    render: function () {
        var items = this.state.saleslist;

        return(
            <div>


                <div className="row">
                    <div className="col-sm-6">

                        <Sales items={items} />

                    </div>
                    <div className="col-sm-6">

                        <AddListItem />

                    </div>
                </div>



            </div>
        );
    }
});

module.exports = SalesList;