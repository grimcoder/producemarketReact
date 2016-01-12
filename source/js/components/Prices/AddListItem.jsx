var React = require('react');
var uuid = require('node-uuid');
var ListItemActionCreators = require('../../actions/ListItemActionCreators');
var ListItemStore = require('../../stores/ListItemStore');


var styleRequired = {
    color: "#ffaaaa"
};

    var AddListItem = React.createClass({


    handleChange : function(event){
        var id = this.state.activeRecord.Id;
        var item = {
            Id: id,
            date: new Date(),
            ItemName: this.refs.ItemName.value,
            Price: this.refs.Price.value
        };

        //this.setState({});

        this.setState({activeRecord: item});

    },

    resetForm : function(){
        ListItemActionCreators.resetActiveRecord();
    },

    handleSubmitEvent: function (event){

        event.preventDefault();

        ListItemActionCreators.addListItem(this.state.activeRecord);
        ListItemActionCreators.resetActiveRecord();

    },

    getInitialState: function (){
        return this.getActiveRecord();
    },

    updateState: function () {
        this.setState(this.getActiveRecord());
    },

    getActiveRecord: function () {
        return {

            activeRecord: ListItemStore.getActiveRecord(),

            'addeditbutton': "Add to list"

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
        var addeditbutton = !activeRecord.Id ? "Add" : "Save";
        var addeditTitle = !activeRecord.Id ? "Add New price" : "Edit price";

        return (
            <form onSubmit={this.handleSubmitEvent}>
                <h3 className="page-header">{addeditTitle}</h3>

                <div className="form-group">
                    <label htmlFor="listItemName">Name <span style={styleRequired}>*</span></label>
                    <input type="text" className="form-control" id="listItemName" placeholder="Enter name" onChange={this.handleChange} required ref="ItemName" value={activeRecord.ItemName} />
                </div>

                <div className="form-group">
                    <label htmlFor="listItemQuantity">Price <span style={styleRequired}>*</span></label>
                    <div className="row">
                        <div className="col-xs-5 col-sm-6 col-md-4">
                            <input type="number" min="1" max="9999" step="1" defaultValue="1" className="form-control" onChange={this.handleChange} id="listItemQuantity"  value={activeRecord.Price}  required ref="Price" />
                        </div>
                    </div>
                </div>



                <hr />

                <button type="submit" className="btn btn-primary">{addeditbutton}</button>
                <button type="reset" onClick={this.resetForm} className="btn btn-link">Cancel</button>
            </form>
        );
    }
});

module.exports = AddListItem;