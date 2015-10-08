/**
 * Created by rad on 04/10/15.
 */

app.controller('movieController',['$scope','movieFactory',function($scope,movieFactory){

    $scope.heading = 'Movies';
    $scope.movies = {};
    $scope.thumbnail ='';
    $scope.total =0;
    $scope.message =false;
    $scope.perPage =0;
    $scope.page = 1;
    $scope.range = new Array();

    range();
    getTotal();
    getMovies();


    function range(){
        for(var x = 1;x<=5;x++){
            $scope.range.push(x);
        }
    }

    function getTotal() {
        movieFactory.getTotal()
            .success(function (response) {
            $scope.total = response;
        })
            .error(function (error) {
                $scope.status = 'Unable to load movie data: ' + error.message;
            });
    }
    function getMovies() {
        movieFactory.getMovies()
            .success(function (response) {
                $scope.movies = response;
            })
            .error(function (error) {
                $scope.status = 'Unable to load movie data: ' + error.message;
            });
    }

    $scope.searchMovies = function() {
        movieFactory.search($scope.search)
            .success(function (response) {
                $scope.movies = response.movies;
                $scope.message = 'Matched '+ $scope.movies.length +' of '+ response.total +' movies total'
            })
            .error(function (error) {
                $scope.status = 'Unable to load movie data: ' + error.message;
            });
    }




}]);