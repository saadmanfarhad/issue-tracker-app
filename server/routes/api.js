const express = require('express');
const router = express.Router();
const Issue = require('../models/issue');
const slugify = require('slugify');

//get a list of ninjas from db
router.get('/issues', function(req, res, next) {
  Issue.find({}, function(err, issues) {
    var issueMap = {};

    issues.forEach(function(issue) {
      issueMap[issue._id] = issue;
    });

    res.send(issueMap);
  });
});

//get issue by id
router.get('/issues/:id', function(req, res, next){
  Issue.findOne({_id: req.params.id}).then(function(issue){
    res.send(issue);
  });
});

//add new ninja
router.post('/issues', function(req, res, next) {
  var newIssue = new Issue();
  newIssue = req.body;
  newIssue.slug = slugify(newIssue.title);

  Issue.create(newIssue).then(function(issue){
    res.send(issue);
  }).catch(next);
});

//update a particular issue
router.put('/issues/:id', function(req, res, next) {
  var updatedIssue = new Issue();
  updatedIssue = req.body;
  updatedIssue.updatedAt = Date.now();
  updatedIssue.slug = slugify(updatedIssue.title);
  Issue.findByIdAndUpdate({_id: req.params.id},updatedIssue).then(function(){
    Issue.findOne({_id: req.params.id}).then(function(issue){
      res.send(issue);
    });
  });
});

//delete a particular ninja
router.delete('/issues/:id', function(req, res, next) {
  Issue.findByIdAndRemove({_id: req.params.id}).then(function(issue){
    res.send(issue);
  });
});

module.exports = router;
