var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var salesList = {};
var activeRecord = {};

var $ = require('jquery');
var apiHost = "http://" + 'taraskovtun.com' + ":3001";

var Salestore = objectAssign({}, EventEmitter.prototype, {

    getAllListItems: function () {
        $.get(apiHost + '/api/sales', function(result) {

            Salestore.emit('salesReceivedFromAPI',result);

        }.bind(this));
    },

    addGetSalesListListener: function (changeEventHandler) {
        this.on('salesReceivedFromAPI', changeEventHandler);
    },

    removeGetSalesListListener: function (changeEventHandler) {
        this.removeListener('salesReceivedFromAPI', changeEventHandler);
    }


})

function handleAction(action) {
    if (action.type === 'get_sales_list') {

        Salestore.getAllListItems();
    }
}

Salestore.dispatchToken = Dispatcher.register(handleAction);

module.exports = Salestore;



