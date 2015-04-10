app.controller("threadCtrl", ["$scope", "threadFactory", "$modal",
    function($scope, threadFactory, $modal) {
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
            });
        };

        $scope.deleteThread = function(threadId) {
            threadFactory.delete({id: threadId}, function() {
                delete $scope.threads[threadId];
            });
        };

        $scope.openThreadModal = function(threadId) {
            var modalInstance = $modal.open({
                templateUrl: 'app/views/thread/partials/_viewThreadModal.html',
                controller: 'threadViewCtrl',
                size: "lg",
                resolve: {
                    items: function() {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function(selectedItem) {
                $scope.selected = selectedItem;
            }, function() {
//      $log.info('Modal dismissed at: ' + new Date());
            });
        };

    }
]);