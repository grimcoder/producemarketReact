var React = require('react');
var ListHeader = require('./../Prices/ListHeader.jsx');


var Sales = React.createClass({


    render: function () {

        return(
            <div>

                <h3 className="page-header">
                    <ListHeader title='Sales' totalNumberOfListItems={8} />
                </h3>

            </div>
        );

    }

});

module.exports = Sales;