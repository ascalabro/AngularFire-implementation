app.controller("threadCtrl", ["$scope", "threadFactory", "$firebaseArray",
    function($scope, threadFactory, $firebaseArray) {
//        $scope.threads = [];

        threadFactory.get(function(data) {
            $scope.threads = (data);
            console.log(data);
        });
        $scope.createThread = function() {
//            $scope.threads.push($scope.thread);
            console.log($scope.thread);
            threadFactory.save($scope.thread, function(ref) {
                $scope.threads[ref.name] = $scope.thread;
                $scope.thread = {title: 'Default Title', author: 'Default Author'};
            });
        };

        $scope.deleteThread = function(threadId) {
            threadFactory.delete({id: threadId}, function() {
                delete $scope.threads[threadId];
            });
        };
    }
]);