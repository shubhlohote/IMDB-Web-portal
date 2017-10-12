/**
 * Created by manog on 27-11-2016.
 */
module.exports = function(){
    var model={};
    var mongoose = require("mongoose");
    var PageSchema = require("./page.schema.server.js")();
    var PageModel = mongoose.model("PageModel",PageSchema);

    var api={
        createPage: createPage,
        findAllPagesForWebsite:findAllPagesForWebsite,
        findPageById:findPageById,
        updatePage: updatePage,
        deletePage:deletePage,
        setModel: setModel,
    };
    return api;

    function deletePage(id) {
        return PageModel.remove({_id:id});
    }

    /*function updateUser(userid,user) {
     return UserModel.update(
     {
     _id: userid
     },
     {
     firstName: user.firstName,
     lastName: user.lastName
     }
     )
     }*/

    function updatePage(pid, page) {
        console.log(page);
        return PageModel.update(
            {
                _id: pid
            },
            {
                name: page.name,
                title: page.title,
                description: page.description
                // dateCreated: website.dateCreated
            }
        )
    }

    function setModel(_model) {
        model=_model;
    }

    function findPageById(pid) {
        return PageModel.findById(pid);
    }


    function findAllPagesForWebsite(wid) {
        //console.log("user id in model");
        console.log(wid);
        //return model.userModel.findAllWebsitesForUser(userId);
        return PageModel.find({"_website": wid});
    }

    function createPage(wid,page) {
        page._website=wid;
        return PageModel.create(page);
        /*.then(function (websiteObj) {
         model.userModel.findUserById(userId)
         .then(function (userObj) {
         userObj.websites.push(websiteObj);
         return userObj.save();
         })
         });*/
    }
};
