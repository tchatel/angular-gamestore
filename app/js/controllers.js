'use strict';

/* Controllers */
function MainCtrl($scope, $location, Cart) {
    $scope.addCart = function (game) {
        Cart.add(game);
        $location.url("/cart")
    }
}

function CatalogCtrl($scope, $http) {
    $http.get("data/catalog.json.js").success(function (data) {
        $scope.catalog = data;
    });
}

function GameCtrl($scope, $routeParams, $http) {
    $http.get("data/" + $routeParams.ref + ".json.js").success(function (data) {
        $scope.game = data;
    });
}

function CartCtrl($scope, Cart) {
    $scope.cart = Cart;
}
