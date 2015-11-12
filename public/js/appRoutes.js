angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/blog.html',
			controller: 'blogController'
        });

	$locationProvider.html5Mode(true);

}]);