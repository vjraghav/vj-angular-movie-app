'use strict';

(function () {
    function featuredController($scope, $rootRouter, Movie) {
        
		$scope.featuredMovies = [];
		$scope.featuredMovies = Movie.getFeaturedMovies();
    }

    angular.module('my-app').component('featured', {
        templateUrl: 'app/components/featured/featured.html',
        controller: featuredController
    });
})();
