'use strict';

var MoviesImdbID = ['tt3896198', 'tt0266697', 'tt1951265', 'tt0110622', 'tt2313197', 'tt2375559'];

var recentMovies = ['Spider-Man: Homecoming', 'Wonder Woman', 'Despicable Me 3', 'Cars 3', 'Tubelight', 'Baahubali 2: The Conclusion'];

var featuredMovies = ['The Shawshank Redemption', 'Avatar'];


function SogetiMovieService($http, $q) {

    var service = {};
	
	var getMovieResults = function(movieList) {
		var promises = [];
		var resultList = [];
		
		movieList.forEach(function(movieTitle) {
		  promises.push($http.get('http://www.omdbapi.com/?t='+ movieTitle +'&apikey=6c3a2d45'))
		});
		
		$q.all(promises).then(function(results){
		  results.forEach(function(response){
			resultList.push(response.data);
		  })
		})
		
		return resultList;
	}

	service.findMovie = function(searchName, plot){
		return $http.get('http://www.omdbapi.com/?t='+ searchName +'&plot='+ plot +'&apikey=6c3a2d45');
	}

    service.getRecentMovies = function() {
		
		return getMovieResults(recentMovies);
    }
	
	service.getFeaturedMovies = function() {
		
		return getMovieResults(featuredMovies);
    }

    return service;
}

angular.module('my-app').factory('Movie', SogetiMovieService);
