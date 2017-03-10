var mongoose = require("mongoose");

var UserItemSchema = new mongoose.Schema ({
    email: String,
    passwordHash: String
});

var UserItem = mongoose.model("User", UserItemSchema, "users");

module.exports = { 
    UserItem
};