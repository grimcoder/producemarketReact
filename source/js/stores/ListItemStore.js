var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var $ = require('jquery');

var shoppingList = {6:{"ItemName":"Beet","Price":6,"Id":6},15:{"ItemName":"Cabbage","Price":6,"Id":15},16:{"ItemName":"Green mix","Price":7,"Id":16},17:{"ItemName":"Eggs","Price":6,"Id":17}};

var activeRecord = {};

function addListItem(listItem) {
    shoppingList[listItem.Id] = listItem;

    ListItemStore.emit('pricesRecieved',shoppingList);
}

function removeListItem(listItemId) {
    delete shoppingList[listItemId];

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
        $.get('http://taraskovtun.com:3001/api/prices', function(result) {

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
