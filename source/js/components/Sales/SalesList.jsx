var React = require('react');
var List = require('./Sales.jsx');
var AddListItem = require('./AddListItem.jsx')
var SalesStore = require('./../../stores/SalesStore')

var SalesList = React.createClass({

    getInitialState: function(){
        //SalesStore.
    },
    render: function () {
        var items = this.state.list;

        return(
            <div>


                <div className="row">
                    <div className="col-sm-6">

                        <List items={items} />

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