var React = require('react');
var uuid = require('node-uuid');
var ListItemActionCreators = require('../actions/ListItemActionCreators');
var ListItemStore = require('../stores/ListItemStore');


var styleRequired = {
    color: "#ffaaaa"
};

var AddListItem = React.createClass({

    handleSubmitEvent: function (event) {
        event.preventDefault();
        var id = this.state.activeRecord.Id ?  this.state.activeRecord.Id : uuid.v4();
        var item = {
            Id: id,
            date: new Date(),
            ItemName: this.refs.ItemName.value.trim(),
            Price: this.refs.Price.value
        };

        ListItemActionCreators.addListItem(item);
    },
    getInitialState: function () {
        return this.getActiveRecord();
    },
    updateState: function () {
        this.setState(this.getActiveRecord());
    },

    getActiveRecord: function () {
        return {
            activeRecord: ListItemStore.getActiveRecord()
        };
    },

    componentDidMount: function () {
        ListItemStore.addChangeListener(this.updateState);
    },

    componentWillUnmount: function () {
        ListItemStore.removeChangeListener(this.updateState);
    },


    render: function () {
        var activeRecord = this.state.activeRecord;
        return (
            <form onSubmit={this.handleSubmitEvent}>
                <h3 className="page-header">Add New price</h3>

                <div className="form-group">
                    <label htmlFor="listItemName">Name <span style={styleRequired}>*</span></label>
                    <input type="text" className="form-control" id="listItemName" placeholder="Enter name" required ref="ItemName" value={activeRecord.ItemName} />
                </div>

                <div className="form-group">
                    <label htmlFor="listItemDescription">Id</label>
                    <input type="text" disabled className="form-control" rows="3" id="listItemDescription" placeholder="Enter description"  value={activeRecord.Id}  ref="Id"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="listItemQuantity">Price <span style={styleRequired}>*</span></label>
                    <div className="row">
                        <div className="col-xs-5 col-sm-6 col-md-4">
                            <input type="number" min="1" max="9999" step="1" defaultValue="1" className="form-control" id="listItemQuantity"  value={activeRecord.Price}  required ref="Price" />
                        </div>
                    </div>
                </div>

                <hr />

                <button type="submit" className="btn btn-primary">Add to list</button>
                <button type="reset" className="btn btn-link">Cancel</button>
            </form>
        );
    }
});

module.exports = AddListItem;