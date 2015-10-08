app.factory('movieFactory',['$http',function($http){

    var urlBase = '/api/movies';
    var imdbApiUrl = '';
    var movieFactory = {};

    movieFactory.getMovies = function () {
        return $http.get(urlBase);
    };

    movieFactory.search = function (query) {
        if(query.length >= 3) {
            return $http.get(urlBase + '/query/' + query);
         }else{
            this.getMovies();
        }
    };

    movieFactory.getTotal = function () {
        return $http.get(urlBase + '/total');
    };

    return movieFactory;
    
}]);