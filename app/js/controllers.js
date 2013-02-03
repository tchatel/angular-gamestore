'use strict';

/* Controllers */


function CatalogCtrl($scope, $http) {

    $http.get("data/catalog.json.js").success(function (data) {
        $scope.catalog = data;
    });

}

function ItemCtrl($scope) {
}
