app.factory('movieFactory',['$http',function($http){

    var urlBase = '/api/movies';
    var imdbApiUrl = '';
    var movieFactory = {};

    movieFactory.getMovies = function () {
        return $http.get(urlBase);
    };

    movieFactory.getMovie = function (query) {
        return $http.get(urlBase + '/' + query);
    };

    return movieFactory;
    
}]);