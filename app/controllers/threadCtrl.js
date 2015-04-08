app.controller("threadCtrl", ["$scope", "threadFactory",
    function($scope, threadFactory) {
        threadFactory.query(function(data) {
            $scope.data = data;
            console.log(data);
        });

        $scope.createThread = function() {
            threadFactory.save($scope.thread);
            $scope.post = {url: 'http://', title: ''};
        };

        $scope.deleteThread = function(threadId) {
            threadFactory.delete({id: threadId}, function() {
                delete $scope.posts[threadId];
            });
        };
    }
]);