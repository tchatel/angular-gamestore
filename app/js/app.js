'use strict';


// Declare app level module which depends on filters, and services
angular.module('gamestore', ['gamestore.filters', 'gamestore.services', 'gamestore.directives']).
  config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/catalog', {templateUrl: 'partials/catalog.html', controller: CatalogCtrl});
    $routeProvider.when('/game/:ref',    {templateUrl: 'partials/game.html', controller: GameCtrl});
    $routeProvider.when('/cart', {templateUrl: 'partials/cart.html', controller: CartCtrl});
    $routeProvider.otherwise({redirectTo: '/catalog'});

  }]);
