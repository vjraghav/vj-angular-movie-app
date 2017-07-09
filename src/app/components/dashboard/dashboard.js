'use strict';

(function () {
    function DashboardController($scope, Movie) {
		$scope.recentMovies = Movie.getRecentMovies();
    }

    angular.module('my-app')
        .component('dashboard', {
            templateUrl: 'app/components/dashboard/dashboard.html',
            controller: DashboardController
        });
})();
