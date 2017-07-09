'use strict';

function NavigationController($scope, $window) {
	 $scope.isCollapsed = false;
	if ($window.innerWidth < 768) {
		$scope.isCollapsed = true;
	}
	
	$scope.toggleMenu = function() {
		$scope.isCollapsed = !$scope.isCollapsed
	}
	
}

angular.module('my-app').component('navigation', {
    templateUrl: 'app/components/navigation/navigation.html',
    controller: NavigationController,
});
