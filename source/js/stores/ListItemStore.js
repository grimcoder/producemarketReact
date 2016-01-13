var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var $ = require('jquery');
var apiHost = "http://" + 'taraskovtun.com' + ":3001";

var shoppingList = {};

var activeRecord = {};

function addListItem(listItem) {
    //shoppingList[listItem.Id] = listItem;

    $.post(apiHost + "/api/prices", listItem, function() {
        ListItemStore.getAllListItems();
    });
}

function removeListItem(listItemId) {
    delete shoppingList[listItemId];


    $.ajax({
        url: apiHost + '/api/prices?id=' + listItemId,
        type: 'DELETE',
        success: function(result) {
            // Do something with the result
        }
    });

    ListItemStore.emit('pricesRecieved',shoppingList);
}

function editListItem(listItemId){

    activeRecord = shoppingList[listItemId];
    ListItemStore.emit('change');
}

function resetActiveRecord(){

    activeRecord = {};

    ListItemStore.emit('change');
}

function removeAllListItems() {
    shoppingList = {};
    activeRecord = {};

    ListItemStore.emit('change');
}

var ListItemStore = objectAssign({}, EventEmitter.prototype, {

        getAllListItems: function () {
            $.get(apiHost + '/api/prices', function(result) {

                result.map(function(item){
                    shoppingList[item.Id] = item;
                });

                ListItemStore.emit('pricesRecieved',shoppingList);
            }.bind(this));
        },

    getActiveRecord: function(){
        return activeRecord;
    },


    addChangeListener: function (changeEventHandler) {
        this.on('change', changeEventHandler);
    },

    removeChangeListener: function (changeEventHandler) {
        this.removeListener('change', changeEventHandler);
    },

    addpricesRecievedListener: function (changeEventHandler) {
        this.on('pricesRecieved', changeEventHandler);
    },

    removepricesRecievedListener: function (changeEventHandler) {
        this.removeListener('pricesRecieved', changeEventHandler);
    }

});

function handleAction(action) {
    if (action.type === 'add_list_item') {
        addListItem(action.item);
    } else if (action.type === 'remove_list_item') {
        removeListItem(action.itemId);
    } else if (action.type === 'edit_list_item') {
            editListItem(action.itemId);
    } else if (action.type === 'remove_all_list_items') {
        removeAllListItems();
    }else if (action.type === 'reset_Active_Record') {
        resetActiveRecord();
    }
}

ListItemStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = ListItemStore;
