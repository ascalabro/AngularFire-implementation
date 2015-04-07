app.controller("threadIndexCtrl", ["$scope", "$firebaseArray", "threadsFactory",
    function($scope, $firebaseArray, threadsFactory) {
        var ref = new Firebase("https://djenchat.firebaseio.com/");
        $scope.messages = $firebaseArray(ref);
        a = threadsFactory.get();
        a.then(function (threads) {
            $scope.messages = threads;
        });
//        console.log($scope.messages);
    }
]);