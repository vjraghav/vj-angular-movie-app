'use strict';

(function () {
    angular.module('my-app', [
        'app.templates',
        'ngComponentRouter'
    ])
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .value('$routerRootComponent', 'app')
    .component('app', {
        template: `
            <navigation></navigation>
            <ng-outlet></ng-outlet>
        `,
        $routeConfig: [
            {path: '/', name: 'Dashboard', component: 'dashboard', useAsDefault: true},
			{path: '/search/', name: 'Search', component: 'search'},
            {path: '/featured', name: 'Featured', component: 'featured'}
        ]
    })
    .run(function ($rootScope) {
        console.log('my-app is running...');
    });
})();
