service.factory('threadFactory', function ( $resource, config) {
  return $resource(config.firebaseAppUrl + "/threads/:id.json");
});