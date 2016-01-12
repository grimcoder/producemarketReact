var React = require('react');
var ListHeader = require('./../ListHeader.jsx');


var Sales = React.createClass({


    render: function () {

        return(
            <div>

                <h3 className="page-header">
                    <ListHeader title='Sales' totalNumberOfListItems={this.getTotalNumberOfListItems(items)} />
                </h3>

            </div>
        );

    }

});

module.exports = Sales;