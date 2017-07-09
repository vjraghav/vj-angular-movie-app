'use strict';

(function () {
    function searchController($scope, $rootRouter, Movie) {
		
	$scope.searchResult = '';
	$scope.isSearchResult = false;
	$scope.isNoResult = false;
	$scope.genres = [];
	$scope.writers = [];
	$scope.actors = [];
	$scope.plot = 'Full';
	$scope.plotLimit = null;
	$scope.plotLength = null;
	$scope.isReadMore = false;
	
	
	$scope.searchMovie = function() {
		
		if ($scope.plot === 'Full') {
			
		}
		Movie.findMovie($scope.searchTitle, $scope.plot).then(function(response){
			
			if (response.data.Error) {
				$scope.isSearchResult = false;
				$scope.isNoResult = true;
				return;
			}
			$scope.searchResult = response.data;
			$scope.plotLength = (response.data.Plot).length;
			
			if ($scope.plot === 'Full' && $scope.plotLength > 200) {
				$scope.plotLimit = 200;
				$scope.isReadMore = true;
			}
			$scope.genres = (response.data.Genre).split(',');
			$scope.writers = (response.data.Writer).split(',');
			$scope.actors = (response.data.Actors).split(',');
			$scope.isSearchResult = true;
			$scope.isNoResult = false;
		}, function(response) {
			console.log('Error: Please try again later');
		});
    }
	
	$scope.readMore = function() {
		$scope.plotLimit = $scope.plotLength;
		$scope.isReadMore = !$scope.isReadMore;
	}
	
	$scope.searchMovieByEnter = function($event) {
		
		if($event.keyCode === 13) {
			$scope.searchMovie();
		}
    }
	
	}

    angular.module('my-app').component('search', {
        templateUrl: 'app/components/search/search.html',
        controller: searchController
    });
})();
