module.exports = function(){
    var mongoose = require("mongoose");
   // var WebsiteSchema = require("../website/website.schema.server.js");
    var UserSchema = mongoose.Schema({
        username: {type:String,required:true},
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        facebook:{
            token:String,
            id:String,
            displayName:String
        },
        google:{
           id: String,
            token:String,
            email: String
        },
        role: {type: String, default: "STUDENT", enum: ['ADMIN','STUDENT','FACULTY']},
       // websites: [WebsiteSchema]
        websites: [{type: mongoose.Schema.Types.ObjectId, ref:'WebsiteModel'}]
    },{collection: "assignment.user"});
    return UserSchema;
};
