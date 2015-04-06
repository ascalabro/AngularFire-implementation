app.controller("sampleCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase(app.config.firebaseAppUrl);
  // download the data into a local object
  $scope.data = $firebaseObject(ref);
});