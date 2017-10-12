module.exports = function(){
    var model={};
    var mongoose = require("mongoose");
  var UserSchema = require("./user.schema.server.js")();
var UserModel = mongoose.model("UserModel",UserSchema);

    var api={
        findFacebookUser:findFacebookUser,
        createUser: createUser,
        findUserById:findUserById,
        updateUser:updateUser,
        findUserByCredentials: findUserByCredentials,
        removeUser:removeUser,
        setModel: setModel,
        findAllWebsitesForUser: findAllWebsitesForUser,
        findUserByUsername:findUserByUsername,
        findUserByGoogleId:findUserByGoogleId
    };
    return api;

    function findFacebookUser(id) {
        return UserModel.findOne({"facebook.id":id})
    }

    function findUserByGoogleId(googleId){
        return UserModel.findOne({"google.id":googleId});
    }

    function findAllWebsitesForUser(userId) {
        console.log("user id in user model");
        console.log(userId);
        console.log(UserModel.find({_id: userId}));
        return UserModel.find({_id: userId})
            .populate("websites")
            .exec();
    }

    function findUserByUsername(username){
        console.log("in usermodel username");
        return UserModel.findOne({username: username})
    }

    function setModel(_model) {
        model=_model;
    }

    function removeUser(id) {
        console.log(id);
        return UserModel.remove({_id: id});
    }

    
    function findUserByCredentials(username,password) {
        console.log("in user model");
      return  UserModel.findOne({
            username:username,
            password: password
        });
    }
    
  function createUser(user) {
      //console.log(UserModel.create(user));
     return UserModel.create(user);
  }  
  
  function findUserById(userid) {
     // UserModel.find({_id: userid});
     return UserModel.findById(userid);
  }
  
  function updateUser(userid,user) {
   return UserModel.update(
       {
           _id: userid
       },
       {
           firstName: user.firstName,
           lastName: user.lastName
       }
   )
  }
};
