var mongoose = require("mongoose");
var LinkItemSchema = require("./LinkItem").schema; 

var Schema = mongoose.Schema;

var TopicItemSchema = new Schema ({
    name: String,
    description: String,
    links: [LinkItemSchema]
});

var TopicItem = mongoose.model("TopicItem", TopicItemSchema, "topics");

module.exports = TopicItem;