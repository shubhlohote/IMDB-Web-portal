module.exports = function() {
    var model={};
    var mongoose = require("mongoose");
    var WebsiteSchema = require("./website.schema.server.js")();
    var WebsiteModel = mongoose.model("WebsiteModel",WebsiteSchema);

    var api={
        createWebsite: createWebsite,
        findAllWebsitesForUser:findAllWebsitesForUser,
        findWebsiteById: findWebsiteById,
        updateWebsite:updateWebsite,
        deleteWebsite:deleteWebsite,
        setModel: setModel

    };
    return api;

function deleteWebsite(id) {
    return WebsiteModel.remove({_id:id});
}


    function updateWebsite(wid, website) {
        console.log(website);
 return WebsiteModel.update(
     {
         //_id: wid,
         _id: wid
     },
     {
         name: website.name,
         description: website.description
        // dateCreated: website.dateCreated
     }
 )
    }

    function setModel(_model) {
        model=_model;
    }

    function findWebsiteById(wid) {
        return WebsiteModel.findById(wid);
    }


    function findAllWebsitesForUser(userId) {
        console.log("user id in model");
        console.log(userId);
        //return model.userModel.findAllWebsitesForUser(userId);
        return WebsiteModel.find({"_user": userId});
    }

    function createWebsite(userId,website) {
        website._user=userId;
        return WebsiteModel.create(website);
            /*.then(function (websiteObj) {
                model.userModel.findUserById(userId)
                    .then(function (userObj) {
                        userObj.websites.push(websiteObj);
                        return userObj.save();
                    })
            });*/
    }
}
