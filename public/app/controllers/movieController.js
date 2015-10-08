/**
 * Created by rad on 04/10/15.
 */

app.controller('movieController',['$scope','movieFactory',function($scope,movieFactory){

    $scope.heading = 'Movies';
    $scope.movies = {};
    $scope.thumbnail ='';
    $scope.total =0;
    $scope.message =false;

    getTotal();
    getMovies();


    function getTotal() {
        movieFactory.getTotal()
            .success(function (response) {
            $scope.total = response;
        })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }
    function getMovies() {
        movieFactory.getMovies()
            .success(function (response) {
                $scope.movies = response;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

    $scope.searchMovies = function() {
        movieFactory.search($scope.search)
            .success(function (response) {
                $scope.movies = response.movies;
                $scope.message = 'Matched '+ $scope.movies.length +' of '+ response.total +' movies total'
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }




}]);