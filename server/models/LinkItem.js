var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LinkItemSchema = new Schema ({
    description: String,
    url: String,
    voteCount: Number,
    voters: Array,
});

var LinkItem = mongoose.model("LinkItem", LinkItemSchema);

module.exports = LinkItemSchema;
module.exports = LinkItem;