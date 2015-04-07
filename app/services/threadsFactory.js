//service.factory('firebaseFactory', function($resource) {
//    return {
//        list: $resource(
//                app.config["params"].data_services_url + '/index.php?r=affableListings/listing',
//                {},
//        {
//            "all": {method: "GET", isArray: true},
//            "active": {method: "GET", "params": {thread_id: "thread_id"}, isArray: true},
//            "completed" : {method: "GET", "params": {thread_id: "thread_id"}, isArray: true}
//        }),
//        find: $resource( app.config.data_services_url + '/index.php?r=affableListings/listing&listing_id=:listing_id'),
//        create: ""
//    };
//});

service.factory('threadsFactory', function (FbRef, $firebase, $q) {
    var $threads = $firebase(FbRef.child('colors'));
    return {
        findAll: function getAllThreads() {
            var deferred = $q.defer();

            $threads.$on('loaded', function (colors) {

                var colorArr = [];
                angular.forEach(colors, function (color) {
                    colorArr.push(color);
                });

                deferred.resolve(colorArr);
            });

            return deferred.promise;
        },
        findOne: function getThread() {
            
        },
        add: function addColor(color) {
            $threads.$add(color);
        }
    };
})