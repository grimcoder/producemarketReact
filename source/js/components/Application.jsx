var React = require('react');
var PriceList = require('./PriceList.jsx');

var Application = React.createClass({
    render: function () {
        return (
            <div className="container">
                <PriceList />
            </div>
        );
    }
});

module.exports = Application;