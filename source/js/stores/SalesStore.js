var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var shoppingList = {};
var activeRecord = {};

var $ = require('jquery');
var apiHost = "http://" + 'taraskovtun.com' + ":3001";

var Salestore = objectAssign({}, EventEmitter.prototype, {

    getAllListItems: function () {
        $.get(apiHost + '/api/prices', function(result) {

            result.map(function(item){
                shoppingList[item.Id] = item;
            });

            ListItemStore.emit('salesReceivedFromAPI',shoppingList);

        }.bind(this));
    }
})

Salestore.dispatchToken = Dispatcher.register(handleAction);

module.exports = Salestore;


