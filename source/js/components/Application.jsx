var React = require('react');
var PriceList = require('./Prices/PriceList.jsx');
var SalesList  = require ('./Sales/SalesList.jsx');
var Application = React.createClass({

    getInitialState: function () {

        return {activeTab: "PricesTab"};
    },

    switchSales: function (event) {

        this.setState({activeTab: 'SalesTab'});

    },

    switchPrices: function (event) {
        var a = event;
        this.setState({activeTab: 'PricesTab'});

    },

    render: function () {
        var activeTab;
        if (this.state.activeTab == 'PricesTab')
        {
            activeTab =  <PriceList />;
        }
        else {
            activeTab =  <SalesList />;
        }

        return (
            <div className="container">

                <div className="h2">

                    <span className="label label-warning" >
                        Produce market
                    </span>

                    <button className="btn btn-primary" onClick={this.switchPrices} >Prices</button>
                    <button className="btn btn-primary"  onClick={this.switchSales}>Sales</button>
                    <button className="btn btn-primary"    >Reports</button>

                </div>

                    <ul className="nav nav-pills">

                    </ul>

                {activeTab}

            </div>

        );
    }
});

module.exports = Application;