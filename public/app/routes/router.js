app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
        controller: 'movieController',
        templateUrl: 'views/movies.html'

    })
        .otherwise({ redirectTo: '/' });

}]);