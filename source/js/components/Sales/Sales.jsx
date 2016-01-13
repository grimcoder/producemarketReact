var React = require('react');
var ListHeader = require('./../Prices/ListHeader.jsx');


var Sales = React.createClass({

    getItemsCount : function(){
        return this.props.items.length
    },

    render: function () {

        return(
            <div>

                <h3 className="page-header">

                    <ListHeader title='Sales' totalNumberOfListItems={this.getItemsCount()} />

                </h3>

            </div>
        );

    }

});

module.exports = Sales;