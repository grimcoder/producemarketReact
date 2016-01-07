var React = require('react');
var PriceList = require('./PriceList.jsx');
var Sales  = require ('./Sales/Sales.jsx');
var Application = React.createClass({

    getInitialState: function () {

        return {activeTab: "PricesTab"};
    },

    switchTab: function (tabName) {
        this.setState({activeTab: tabName});

    },

    render: function () {
        var activeTab;
        if (this.state.activeTab == 'PricesTab')
        {
            activeTab =  <PriceList />;
        }
        else {
            activeTab =  <Sales />;
        }

        return (


            <div className="container">

                <h2>

                    <span className="label label-warning" >
                        Produce market
                    </span>

                    <div>
                        <ul className="nav nav-pills">

                        </ul>
                    </div>


                </h2>

                {activeTab}

            </div>

        );
    }
});

module.exports = Application;