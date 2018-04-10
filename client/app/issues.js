myIssueTrackerApp.controller('IssuesCtrl', function($scope, Issue) {

  $scope.issue = new Issue();

  var refresh = function() {
    $scope.issues = Issue.query();
    $scope.issue ="";
  }
  refresh();

  $scope.add = function(issue) {
    Issue.save(issue,function(issue){
      refresh();
    });
  };

  $scope.update = function(issue) {
    issue.$update(function(){
      refresh();
    });
  };

  $scope.remove = function(issue) {
    issue.$delete(function(){
      refresh();
    });
  };

  $scope.edit = function(id) {
    $scope.issue = Issue.get({ id: id });
  };

  $scope.deselect = function() {
    $scope.issue = "";
  }

})
