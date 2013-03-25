'use strict';

/* Controllers */

var moduleCtrl = angular.module('gamestore.controllers', ['gamestore.services']);

moduleCtrl.controller('MainCtrl', function ($scope, $location, Cart) {
    $scope.addCart = function (game) {
        Cart.add(game);
        $location.url("/cart");
    }
});

moduleCtrl.controller('CatalogCtrl', function ($scope, $http) {
    $http.get("data/catalog.json").success(function (data) {
        $scope.catalog = data;
    });
});

moduleCtrl.controller('GameCtrl', function ($scope, $routeParams, $http) {
    $http.get("data/" + $routeParams.ref + ".json").success(function (data) {
        $scope.game = data;
    });
});

moduleCtrl.controller('CartCtrl', function ($scope, Cart) {
    $scope.cart = Cart;
});
