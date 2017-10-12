/**
 * Created by manog on 27-11-2016.
 */

module.exports = function(){
    var mongoose = require("mongoose");
    var PageSchema = mongoose.Schema({
        name: String,
        title: String,
        description: String,
        _website:{type: mongoose.Schema.ObjectId, ref: "WebsiteModel"},
        dateCreated:{type: Date, default: Date.now},
        // websites: [WebsiteSchema]
        //widgets: [{type: mongoose.Schema.Types.ObjectId, ref:'WidgetModel'}]
    },{collection: "try"});
    return PageSchema;
};
