app.controller("listThreadsCtrl", ["$scope", "$firebaseArray",
    function($scope, $firebaseArray) {
        var ref = new Firebase("https://djenchat.firebaseio.com/");
        $scope.messages = $firebaseArray(ref);
    }
]);