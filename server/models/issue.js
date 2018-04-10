const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Issue Schema & model
const IssueSchema = new Schema({
  title: {
    type: String,
    required: [true,'Title field is required']
  },
  description:{
    type: String
  },
  solved:{
    type: Boolean,
    default: false
  },
  assignedTo:{
    type: String
  },
  slug:{
    type: String
  },
  category:{
    type: String
  },
  createdAt:{
    type: Date,
    default: Date.now
  },
  updatedAt:{
    type: Date
  }
});

const Issue = mongoose.model('issue', IssueSchema);

module.exports = Issue;
