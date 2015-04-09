service.factory('threadFactory', function ( $resource, config) {
  return $resource(config.firebaseAppUrl + "/threads/:id.json");
});
//service.factory('threadFactory', function($resource, config) {
//    return $resource(
//            config.firebaseAppUrl + "/threads/:id.json",
//            {}, // Query parameters
//            {'query': {method: 'GET', isArray: false},
//                'save': {method: 'POST', isArray: false}
//            }
//    );
//})