var Dispatcher = require('../dispatcher/Dispatcher');

function addListItem(item) {
    var action = {
        type: 'add_list_item',
        item: item
    };

    Dispatcher.dispatch(action);
}

function removeListItem(itemId) {
    var action = {
        type: 'remove_list_item',
        itemId: itemId
    };

    Dispatcher.dispatch(action);
}

function editListItem(itemId) {
    var action = {
        type: 'edit_list_item',
        itemId: itemId
    };

    Dispatcher.dispatch(action);
}

function removeAllListItems() {
    var action = {
        type: 'remove_all_list_items'
    };

    Dispatcher.dispatch(action);
}



function resetActiveRecord() {
    var action = {
        type: 'reset_Active_Record'
    };

    Dispatcher.dispatch(action);
}



module.exports = {
    addListItem: addListItem,
    removeListItem: removeListItem,
    editListItem: editListItem,
    removeAllListItems: removeAllListItems,
    resetActiveRecord : resetActiveRecord
};