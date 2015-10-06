/**
 * Created by rad on 04/10/15.
 */

app.controller('movieController',['$scope','movieFactory',function($scope,movieFactory){

    $scope.heading = 'Movies';
    $scope.movies = {};
    $scope.thumbnail ='';

    getMovies();

    function getMovies() {
        movieFactory.getMovies()
            .success(function (response) {
                $scope.movies = response;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }


    $scope.range = function(range){
        var output = new Array();
        for(var i = 1; i<=range; i++){
            output.push(i);
        }
        return output;
    }



}]);