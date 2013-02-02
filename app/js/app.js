'use strict';


// Declare app level module which depends on filters, and services
angular.module('gamestore', ['gamestore.filters', 'gamestore.services', 'gamestore.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/catalog', {templateUrl: 'partials/catalog.html', controller: CatalogCtrl});
    $routeProvider.when('/item',    {templateUrl: 'partials/item.html', controller: ItemCtrl});
    $routeProvider.otherwise({redirectTo: '/catalog'});
  }]);
